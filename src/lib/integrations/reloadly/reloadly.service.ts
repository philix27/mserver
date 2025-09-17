import { Injectable } from '@nestjs/common';
import { localOperators } from './localOperators';
import axios from 'axios';
import { LoggerService, secrets } from '../../../modules/common';
import { ITopUpAirtime } from './t.topUpAirtime';
import { $Enums } from '@prisma/client';

export type IReloadlyOperatorId = 'MTN' | 'AIRTEL' | 'GLO' | 'ETISALAT';
// export const OperatorId: Record<IReloadlyOperatorId, string> = {
//     ETISALAT: '340',
//     MTN: '341',
//     AIRTEL: '342',
//     GLO: '344',
// };

@Injectable()
export class ReloadlyTopUpService {
    baseURL = 'https://topups.reloadly.com';
    token: string;
    header: any;

    constructor(readonly accessToken: string, private logger: LoggerService) {
        this.token = accessToken;
        this.header = {
            'Content-Type': 'application/json',
            Accept: 'application/com.reloadly.topups-v1+json',
            Authorization: `Bearer ${accessToken}`,
        };
    }

    getOperators(props: { iso: 'NG' | 'KE' | 'GH' }) {
        return localOperators.filter(
            (val) => val.country.isoName === props.iso,
        );
    }

    async lookUpNumber(props: { phone: string; countryCode: string; }) {
        console.log("Look up number called" + JSON.stringify(props))
        const url = `https://topups.reloadly.com/operators/mnp-lookup/phone/${props.phone}/countries/${props.countryCode}`;
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/com.reloadly.topups-v1+json',
                Authorization: `Bearer ${this.token}`,
            }
        };


        try {
            const result = await axios.get(url, this.header)
            console.log("Look up response", JSON.stringify(result.data))
        } catch (err) {
            console.error('Look Up error:' + JSON.stringify(err))
        }

        // fetch(url, options)
        //     .then(res => {
        //         console.log("Look up response", res)
        //         return res.json()
        //     })
        //     .then(json => {
        //         this.logger.info(
        //             'Look up...' + JSON.stringify(json),
        //         );
        //         return json
        //     })
        //     .catch(err => {
        //         console.error('Look Up error:' + err)
        //     });

    }


    async topUpAirtime(props: {
        //  amount should have 2 place decimal number
        amount: string;
        operatorId: number;
        customIdentifier: string;
        useLocalAmount: boolean;
        recipientPhone: {
            /** 2 values isoName */
            countryCode: $Enums.CountryCode;
            /** should include country phone no. code without the +
             * e.g2348101234567
             */
            number: string;
        };
        senderPhone?: { countryCode: $Enums.CountryCode; number: string };
    }) {
        let payload: Object;

        if (typeof props.operatorId === 'number') {
            payload = {
                ...props,
                operatorId: props.operatorId,
            };
        } else {
            payload = { ...props, operatorId: props.operatorId };
        }

        this.logger.info('Header: ' + JSON.stringify(this.header));
        this.logger.info(
            'Sending topup request to reloadly...' + JSON.stringify(payload),
        );

        const url = 'https://topups.reloadly.com/topups';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/com.reloadly.topups-v1+json',
                Authorization: `Bearer ${this.token}`,
            },
            body: JSON.stringify(payload),
        };

        let result: ITopUpAirtime;
        fetch(url, options)
            .then((res) => res.json())
            .then((json) => {
                result = json as ITopUpAirtime;
                this.logger.info(
                    'Airtime result...' + JSON.stringify(json),
                );
                return json as ITopUpAirtime;
            })
            .catch((err) => {
                this.logger.info('Airtime ...' + JSON.stringify(err));

                throw Error("Could not topup: " + err);
            }

            );
        return result;

    }

    async createAccessToken() {
        const res = await axios.post('https://auth.reloadly.com/oauth/token', {
            client_id: secrets.RELOADLY_CLIENT_ID,
            client_secret: secrets.RELOADLY_CLIENT_SECRET,
            grant_type: 'client_credentials',
            audience: this.baseURL,
        });
        return res.data;
    }
}
