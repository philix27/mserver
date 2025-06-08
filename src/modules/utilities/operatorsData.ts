import { $Enums } from '@prisma/client';

export type IOperator = {
    name: string;
    logo: string;
    operatorId: number;
    maxAmount: number;
    minAmount: number;
};
type IPurpose = 'AIRTIME' | 'DATA_PLAN' | 'DATA_BUNDLE';
type IOperators = {
    purpose: IPurpose;
    dataPlan: IOperator[];
    dataBundles: IOperator[];
    airtime: IOperator[];
};
export const operatorsData: Record<$Enums.CountryCode, IOperators> = {
    NG: {
        purpose: 'AIRTIME',
        dataPlan: [],
        dataBundles: [],
        airtime: [],
    },
    GH: {
        purpose: 'AIRTIME',
        dataPlan: [],
        dataBundles: [],
        airtime: [],
    },
    KE: {
        purpose: 'AIRTIME',
        dataPlan: [],
        dataBundles: [],
        airtime: [],
    },
    MW: {
        purpose: 'AIRTIME',
        dataPlan: [],
        dataBundles: [],
        airtime: [],
    },
    RW: {
        purpose: 'AIRTIME',
        dataPlan: [],
        dataBundles: [],
        airtime: [],
    },
    TZ: {
        purpose: 'AIRTIME',
        dataPlan: [],
        dataBundles: [],
        airtime: [],
    },
    UG: {
        purpose: 'AIRTIME',
        dataPlan: [],
        dataBundles: [],
        airtime: [],
    },
    ZA: {
        purpose: 'AIRTIME',
        dataPlan: [],
        dataBundles: [],
        airtime: [],
    },
};
