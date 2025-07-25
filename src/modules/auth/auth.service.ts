import { Injectable } from '@nestjs/common';
import { LoggerService, PrismaService } from '../common';
import { NotificationService } from '../notification/notification.service';
import {
    Auth_CreateAccountInput,
    Auth_CreateAccountResponse,
    Auth_FirebaseLoginInput,
    Auth_FirebaseLoginResponse,
    Auth_LoginInput,
    Auth_LoginMinipayInput,
    Auth_LoginMinipayResponse,
    Auth_LoginResponse,
    Auth_LogoutInput,
    Auth_MinipayCreateAccountInput,
    Auth_ResetPasswordInput,
    Auth_ResetPasswordResponse,
    Auth_sendEmailOtpInput,
    Auth_sendEmailOtpResponse,
    Auth_TelegramLoginInput,
    Auth_TelegramLoginResponse,
    Auth_ThirdwebLoginInput,
    Auth_verifyEmailOtpInput,
    Auth_verifyOtpResponse,
} from './auth.dto';
import { GqlErr } from '../common/errors/gqlErr';
import { OtpPurpose } from '../common/enums';
import { HpFn } from '../../lib';
import { ThirdwebService } from './thirdweb.service';
import { FirebaseAuthService } from '../firebase/firebase.service';
import { WalletCryptoService } from '../wallet-crypto/wallet.service';
import { CryptoService } from '../helper/crypto.service';

@Injectable()
export class AuthService {
    public constructor(
        private readonly logger: LoggerService,
        private readonly notification: NotificationService,
        private readonly prisma: PrismaService,
        private readonly walletCrypto: WalletCryptoService,
        private readonly cryptoService: CryptoService,
        private readonly thirdweb: ThirdwebService,
        private readonly fbService: FirebaseAuthService
    ) { }

    public async sendEmailOtp(
        params: Auth_sendEmailOtpInput,
    ): Promise<Auth_sendEmailOtpResponse> {
        this.logger.info('sendEmailOtp');

        if (!HpFn.isValidEmail(params.email))
            throw GqlErr('Invalid email address');

        if (params.purpose === OtpPurpose.SignUp) {
            if (await this.doesEmailExist(params.email))
                throw GqlErr('Account already exist');
        }

        const otp = this.cryptoService.generateOTP();
        this.logger.info('sendEmailOtp: ' + otp);

        try {
            const token = this.cryptoService.generateToken({ otp });
            await this.notification.sendEmailOtp({ email: params.email, otp });
            // todo: return jwt token with otp
            return {
                message: 'Otp sent successfully',
                token,
            };
        } catch (error) {
            this.logger.error('Could not send otp to email: ' + error.message);
            return {
                message: error.message,
                token: '',
            };
        }
    }

    public async verifyEmailOtp(
        params: Auth_verifyEmailOtpInput,
    ): Promise<Auth_verifyOtpResponse> {
        this.logger.info('VerifyEmailOtp: ');
        const isValid = this.cryptoService.verifyOTP(params.token, params.otp);

        if (!isValid) throw GqlErr('Invalid otp');

        return { message: 'Valid otp' };
    }

    public async minipayLogin(
        params: Auth_LoginMinipayInput,
    ): Promise<Auth_LoginMinipayResponse> {
        this.logger.info('MinipayLogin: ' + params.walletAddress);

        if (!HpFn.isValidEthereumAddress(params.walletAddress))
            throw GqlErr('Invalid Ethereum Wallet');

        let cryptoWallet = await this.prisma.cryptoWallets.findFirst({
            where: {
                address: params.walletAddress.trim(),
            },
        });

        if (!cryptoWallet) {
            await this.minipayCreateAccount({
                walletAddress: params.walletAddress,
                email: '',
            });
        }

        let _user = await this.prisma.user.findFirst({
            where: {
                id: cryptoWallet.user_id!,
            },
        });

        if (!_user) throw GqlErr('User account not found');

        const token = this.cryptoService.generateToken({
            userId: _user.id,
            email: cryptoWallet,
        });

        return {
            walletAddress: params.walletAddress,
            token: token,
            email: _user.email!,
            firstname: _user.firstname!,
            lastname: _user.lastname!,
            middlename: _user.middlename!,
        };
    }

    // omit email if user logs in directly
    public async minipayCreateAccount(
        params: Auth_MinipayCreateAccountInput & { fromLogin?: boolean },
    ): Promise<Auth_LoginMinipayResponse> {
        this.logger.info('minipayCreateAccount: ' + params.walletAddress);

        if (!HpFn.isValidEthereumAddress(params.walletAddress))
            throw GqlErr('Invalid Ethereum Wallet');

        if (params.fromLogin === false && !HpFn.isValidEmail(params.email))
            throw GqlErr('Invalid email address');

        let user;
        if (await this.doesEmailExist(params.email)) {
            user = await this.prisma.user.findFirst({
                where: {
                    email: params.email,
                },
            });

            await this.prisma.cryptoWallets.create({
                data: {
                    address: params.walletAddress.trim(),
                    chainType: 'Ethereum',
                    minipay: true,
                    user_id: user?.id,
                },
            });
        } else {
            user = await this.prisma.user.create({
                data: {
                    email: params.email,
                    crypto_wallets: {
                        create: {
                            address: params.walletAddress.trim(),
                            chainType: 'Ethereum',
                            minipay: true,
                        },
                    },
                },
            });
        }

        const token = this.cryptoService.generateToken({
            userId: user!.id,
            email: user!.email,
        });

        return {
            walletAddress: params.walletAddress,
            token: token,
            email: user!.email!,
            firstname: user!.firstname!,
            lastname: user!.lastname!,
            middlename: user!.middlename!,
        };
    }
    public async loginTelegramUser(
        params: Auth_TelegramLoginInput,
    ): Promise<Auth_TelegramLoginResponse> {
        this.logger.info('minipayCreateAccount: ' + params.walletAddress);
        // todo: Validate telegram raw data and payload
        // if (!isValidEthereumAddress(params.walletAddress))
        //     throw GqlErr('Invalid Ethereum Wallet');
        let user;
        try {
            user = await this.prisma.user.findFirst({
                where: {
                    telegram_id: params.telegramUserId,
                },
            });
        } catch (error) {
            this.logger.info(
                'Telegram User not found: ' + params.telegramUserId,
            );
        }

        if (!user) {
            user = await this.prisma.user.create({
                data: {
                    telegram_id: params.telegramUserId,
                },
            });
        }

        const token = this.cryptoService.generateToken({
            userId: user!.id,
            telegramId: user!.telegram_id,
        });

        return {
            walletAddress: params.walletAddress,
            token: token,
            email: user!.email!,
            firstname: user!.firstname!,
            lastname: user!.lastname!,
            middlename: user!.middlename!,
        };
    }

    public async createAccount(
        params: Auth_CreateAccountInput,
    ): Promise<Auth_CreateAccountResponse> {
        // try {
        this.logger.info('Create user account');

        if (!HpFn.isValidEmail(params.email))
            throw GqlErr('Invalid email address');

        if (!HpFn.isValidPassword(params.password))
            throw GqlErr('Invalid password structure');

        if (await this.doesEmailExist(params.email))
            throw GqlErr('Account already exist');

        const hashedPassword = await this.cryptoService.hash(
            params.password,
        );

        const user = await this.prisma.user.create({
            data: {
                firstname: params.firstname,
                lastname: params.lastname,
                middlename: params.middlename,
                email: params.email,
                password: hashedPassword,
                country_code: params.country,
            },
        });

        if (!user) throw GqlErr('User was not found');

        await this.walletCrypto.createWalletsForNewUser({ userId: user.id });

        await this.notification.sendWelcomeMessage({ email: params.email });

        return {
            message: 'Created successfully',
        };
    }

    public async resetPassword(
        params: Auth_ResetPasswordInput,
    ): Promise<Auth_ResetPasswordResponse> {
        this.logger.info('Reset user password');

        if (params.password !== params.confirmPassword) {
            throw GqlErr("Passwords doesn't match");
        }

        if (!HpFn.isValidPassword(params.password))
            throw GqlErr('Invalid password structure');

        const hashedPassword = await this.cryptoService.hash(
            params.password,
        );

        const user = await this.prisma.user.findFirst({
            where: {
                email: params.email,
            },
        });

        if (!user) throw GqlErr('Account not found');

        await this.prisma.user.update({
            where: {
                id: user.id,
            },
            data: {
                password: hashedPassword,
            },
        });

        return {
            message: 'Password Updated',
        };
    }

    public async login(params: Auth_LoginInput): Promise<Auth_LoginResponse> {
        this.logger.info('Fetch user info');
        const user = await this.prisma.user.findFirst({
            where: {
                email: params.email,
            },
        });

        if (!user) {
            this.logger.error('Invalid credentials');
            throw GqlErr('Invalid credentials');
        }
        if (!user.password) {
            this.logger.error('No password for this account');
            throw GqlErr('No password for this account');
        }

        const isValid = await this.cryptoService.verify(
            params.password,
            user?.password!,
        );

        if (!isValid) {
            this.logger.error("user password doesn't match");
            throw GqlErr('Invalid credentials');
        }

        const token = this.cryptoService.generateToken({
            userId: user.id,
            email: user.email,
        });

        return {
            country: user.country_code!,
            email: user.email!,
            firstname: user.firstname!,
            lastname: user.lastname!,
            middlename: user.middlename!,
            token,
        };
    }

    public async logout(params: Auth_LogoutInput) {
        // todo:
        this.logger.info('Deleting platform');
    }

    private async doesEmailExist(email: string) {
        const user = await this.prisma.user.findFirst({
            where: {
                email,
            },
        });

        return user ? true : false;
    }

    public async thirdwebLogin(
        params: Auth_ThirdwebLoginInput,
    ): Promise<Auth_LoginMinipayResponse> {
        this.logger.info('thirdwebLogin: ' + params.walletAddress);

        if (!HpFn.isValidEthereumAddress(params.walletAddress))
            throw GqlErr('Invalid Ethereum Wallet');

        if (!HpFn.isValidEmail(params.email))
            throw GqlErr('Invalid Email address');

        const userData = await this.thirdweb.verifyThirdwebToken(
            params.payload,
        );

        if (!userData) throw GqlErr('You need to login first');

        let _user = await this.prisma.user.findFirst({
            where: {
                email: params.email,
            },
        });

        if (!_user) {
            console.log('No user found. Creating a new user');
            _user = await this.prisma.user.create({
                data: {
                    email: params.email,
                    crypto_wallets: {
                        create: {
                            address: params.walletAddress,
                            chainType: 'Ethereum',
                        },
                    },
                },
            });
        }

        const token = this.cryptoService.generateToken({
            userId: _user.id,
            email: _user.email,
        });

        return {
            walletAddress: params.walletAddress,
            token: token,
            email: _user.email!,
            firstname: _user.firstname!,
            lastname: _user.lastname!,
            middlename: _user.middlename!,
        };
    }

    public async fbAuth(
        { idToken }: Auth_FirebaseLoginInput,
    ): Promise<Auth_FirebaseLoginResponse> {
        this.logger.info('Login from app ');


        const payload = await this.fbService.verifyIdToken(
            idToken
        );

        if (!payload) throw GqlErr('You need to login first');


        const email = payload.email;;

        console.log("User email : " + email)
        let _user = await this.prisma.user.findFirst({
            where: {
                email,
            },
        });

        if (!_user) {
            console.log('No user found. Creating a new user');
            _user = await this.prisma.user.create({
                data: {
                    email: email,
                    firstname: payload.name,
                },
            });
        }

        const token = this.cryptoService.generateToken({
            userId: _user.id,
            email: _user.email,
            googleId: payload.uid,
        });

        return {
            token: token,
            email: _user.email!,
            firstname: _user.firstname!,
            lastname: _user.lastname!,
            middlename: _user.middlename!,
        };
    }
}
