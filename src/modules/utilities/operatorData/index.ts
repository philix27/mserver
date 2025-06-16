import { $Enums } from '@prisma/client';
import { opsInfo } from './opsInfo';
import { IOperators } from './types';
import { NG_Operators } from './NG';

export const operatorsData: Record<$Enums.CountryCode, IOperators> = {
    NG: NG_Operators,
    GH: {
        dataPlan: [],
        dataBundles: [],
        airtime: [],
    },
    KE: {
        dataPlan: [],
        dataBundles: [],
        airtime: [],
    },
    MW: {
        dataPlan: [],
        dataBundles: [],
        airtime: [],
    },
    RW: {
        dataPlan: [],
        dataBundles: [],
        airtime: [],
    },
    TZ: {
        dataPlan: [],
        dataBundles: [],
        airtime: [],
    },
    UG: {
        dataPlan: [],
        dataBundles: [],
        airtime: [],
    },
    ZA: {
        dataPlan: [],
        dataBundles: [],
        airtime: [],
    },
};
