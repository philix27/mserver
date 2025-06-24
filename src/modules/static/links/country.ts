import { $Enums } from '@prisma/client';
import { Assets } from '../Assets';
import { publicPath } from '../publicPath';

export type ICountriesData = {
    isoName: $Enums.CountryCode;
    name: string;
    continent: string;
    currencyCode: string;
    currencyName: string;
    currencySymbol: string;
    flag: string;
    callingCodes: string;
};

export const countriesDataList: ICountriesData[] = [
    {
        isoName: $Enums.CountryCode.NG,
        name: 'Nigeria',
        continent: 'Africa',
        currencyCode: 'NGN',
        currencyName: 'Nigerian Naira',
        currencySymbol: '₦',
        flag: publicPath(Assets.flags.ng),
        // flag: "https://s3.amazonaws.com/rld-flags/ng.svg",
        callingCodes: '+234',
    },
    {
        isoName: $Enums.CountryCode.GH,
        name: 'Ghana',
        continent: 'Africa',
        currencyCode: 'GHS',
        currencyName: 'Ghanaian Cedi',
        currencySymbol: 'GH₵',
        flag: publicPath(Assets.flags.gh),
        // flag: "https://s3.amazonaws.com/rld-flags/gh.svg",
        callingCodes: '+233',
    },
    {
        isoName: $Enums.CountryCode.KE,
        name: 'Kenya',
        continent: 'Africa',
        currencyCode: 'KES',
        currencyName: 'Kenyan Shilling',
        currencySymbol: 'Ksh',
        // flag: "https://s3.amazonaws.com/rld-flags/ke.svg",
        flag: publicPath(Assets.flags.ke),
        callingCodes: '+254',
    },
    {
        isoName: $Enums.CountryCode.MW,
        name: 'Malawi',
        continent: 'Africa',
        currencyCode: 'MWK',
        currencyName: 'Malawian Kwacha',
        currencySymbol: 'MWK',
        // flag: "https://s3.amazonaws.com/rld-flags/mw.svg",
        flag: publicPath(Assets.flags.mw),
        callingCodes: '+265',
    },
    {
        isoName: $Enums.CountryCode.RW,
        name: 'Rwanda',
        continent: 'Africa',
        currencyCode: 'RWF',
        currencyName: 'Rwandan Franc',
        currencySymbol: 'FR',
        // flag: "https://s3.amazonaws.com/rld-flags/rw.svg",
        flag: publicPath(Assets.flags.rw),
        callingCodes: '+250',
    },
    {
        isoName: $Enums.CountryCode.TZ,
        name: 'Tanzania',
        continent: 'Africa',
        currencyCode: 'TZS',
        currencyName: 'Tanzanian Shilling',
        currencySymbol: 'TSh',
        flag: publicPath(Assets.flags.tz),
        // flag: "https://s3.amazonaws.com/rld-flags/tz.svg",
        callingCodes: '+255',
    },
    {
        isoName: $Enums.CountryCode.UG,
        name: 'Uganda',
        continent: 'Africa',
        currencyCode: 'UGX',
        currencyName: 'Ugandan Shilling',
        currencySymbol: 'USh',
        // flag: "https://s3.amazonaws.com/rld-flags/ug.svg",
        flag: publicPath(Assets.flags.ug),
        callingCodes: '+256',
    },
    {
        isoName: $Enums.CountryCode.ZA,
        name: 'South Africa',
        continent: 'Africa',
        currencyCode: 'ZAR',
        currencyName: 'South African Rand',
        currencySymbol: 'R',
        flag: publicPath(Assets.flags.za),
        // flag: "https://s3.amazonaws.com/rld-flags/za.svg",
        callingCodes: '+27',
    },
];
