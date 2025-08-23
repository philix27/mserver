import { Injectable } from '@nestjs/common';
import {
    Kyc_AddAddressInfoInput,
    Kyc_AddAddressProofInput,
    Kyc_AddBvnNinInput,
    Kyc_AddBvnResponse,
    Kyc_AddNamesInput,
    Kyc_CreateTransactionPinInput,
    Kyc_Response,
    Kyc_SendPhoneOtpInput,
    Kyc_SendOtpResponse,
    Kyc_verifyPhoneOtpAndInput,
    Kyc_UserResponse,
} from './kyc.dto';
import { UserInput } from '../../lib';
import { LoggerService, PrismaService } from '../common';
import { CryptoService } from '../helper/crypto.service';
import { GqlErr } from '../common/errors/gqlErr';
// import { HelperService } from '../helper/helper.service';

@Injectable()
export class KycService {
    public constructor(
        private readonly logger: LoggerService,
        private readonly prisma: PrismaService,
        private readonly jwtService: CryptoService,
    ) { } // private readonly notification: NotificationService // private readonly logger: LoggerService

    public async sendPhoneOtp(params: Kyc_SendPhoneOtpInput & UserInput): Promise<Kyc_SendOtpResponse> {
        this.logger.info(`KYC -> Send Phone ${params.phone} OTP`);
        // this.logger.info("Creating platform account ...");
        // throw GqlErr('Unimplemented');
        return {
            message: 'Unimplemented',
            otpToken: "02920"
        };
    }

    public async kyc_verifyPhoneOtpAndSubmitCredentials(params: Kyc_verifyPhoneOtpAndInput & UserInput):
        Promise<Kyc_Response> {
        this.logger.info(`KYC -> Verify Phone ${params.phone} OTP`);
        // await this._sendCredentials(params)
        throw GqlErr("Unimplemented ")
        return {
            message: 'Unimplemented',
        };
    }

    private async _sendCredentials(
        params: Kyc_verifyPhoneOtpAndInput & UserInput,
    ): Promise<Kyc_AddBvnResponse> {
        this.logger.info('KYC -> Add kyc docs');
        const res = await this.prisma.user.update({
            where: {
                id: params.userId,
            },
            data: {
                phone: params.phone,
            },
        });
        return {
            message: 'success',
        };
    }


    public async createTransactionPin(
        params: Kyc_CreateTransactionPinInput & UserInput,
    ) {
        this.logger.info('KYC - Create transactions pin');
        const hashedPin = await this.jwtService.hash(params.pin);

        const res = await this.prisma.user.update({
            where: {
                id: params.userId,
            },
            data: {
                transaction_pin: hashedPin,
            },
        });

        return {
            message: 'Transactions Pin set',
        };
    }

    public async addBvn(
        params: Kyc_AddBvnNinInput & UserInput,
    ): Promise<Kyc_AddBvnResponse> {
        this.logger.info('KYC - Add BVN number');
        const res = await this.prisma.user.update({
            where: {
                id: params.userId,
            },
            data: {
                bvn: params.bvn,
                bvn_status: 'REVIEW',
                nin: params.nin,
                nin_status: 'REVIEW',

            },
        });
        return {
            message: 'BVN verification request sent',
        };
    }

    // public async addNin(
    //     params: Kyc_AddNinInput & UserInput,
    // ): Promise<Kyc_AddNinResponse> {
    //     this.logger.info('KYC - Add NIN number');
    //     const res = await this.prisma.user.update({
    //         where: {
    //             id: params.userId,
    //         },
    //         data: {
    //             nin: params.nin,
    //             nin_status: 'REVIEW',
    //         },
    //     });

    //     return {
    //         message: 'NIN verification request sent',
    //     };
    // }

    public async addNames(
        params: Kyc_AddNamesInput & UserInput,
    ): Promise<Kyc_Response> {
        this.logger.info('KYC - Add names');

        await this.prisma.user.update({
            where: {
                id: params.userId,
            },
            data: {
                firstname: params.firstName,
                lastname: params.lastName,
                middlename: params.middleName,
                dob: params.dob,
                dob_status: 'REVIEW',
                gender: params.isMale ? "MALE" : "FEMALE"
            },
        });

        return {
            message: 'Update user names',
        };
    }

    // public async addDob(
    //     params: Kyc_AddDobInput & UserInput,
    // ): Promise<Kyc_Response> {
    //     this.logger.info('KYC - Add Date of Birth');
    //     await this.prisma.user.update({
    //         where: {
    //             id: params.userId,
    //         },
    //         data: {
    //             dob: params.dob,
    //             dob_status: 'REVIEW',
    //         },
    //     });

    //     return {
    //         message: 'Date of Birth added',
    //     };
    // }

    public async addAddressInfo(
        params: Kyc_AddAddressInfoInput & UserInput,
    ): Promise<Kyc_Response> {
        this.logger.info('KYC - Add address info');
        await this.prisma.user.update({
            where: {
                id: params.userId,
            },
            data: {
                street_address: params.street,
                state: params.state,
                country_code: params.country,
                home_address: params.houseAddress,
            },
        });

        return {
            message: 'Address updated',
        };
    }

    public async addAddressProof(
        params: Kyc_AddAddressProofInput & UserInput,
    ): Promise<Kyc_Response> {
        this.logger.info('KYC - Proof of address');
        await this.prisma.user.update({
            where: {
                id: params.userId,
            },
            data: {
                proof_of_address: params.proofOfAddressUrl,
            },
        });

        return {
            message: 'Address updated',
        };
    }
    public async getProfile(
        params: UserInput,
    ): Promise<Kyc_UserResponse> {
        this.logger.info('KYC - Proof of address');
        const user = await this.prisma.user.findFirst({
            where: {
                id: params.userId,
            },

        });

        return {
            ...user
        };
    }

}
