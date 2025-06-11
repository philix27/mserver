// import { ThirdwebAuthHandler } from '@thirdweb-dev/auth';
import { Injectable } from '@nestjs/common';

const domain = 'your-app-domain.com'; // must match what's used on frontend

@Injectable()
export class ThirdwebService {
    // private thirdwebAuth = ThirdwebAuthHandler({
    //     domain,
    //     wallet: null, // no wallet needed for verifying Google logins
    // });

    async verifyThirdwebToken(token: string) {
        // const payload = await this.thirdwebAuth.verify(token);
        // return payload; // payload.sub contains wallet address
        return 'Valid';
    }
}
//
