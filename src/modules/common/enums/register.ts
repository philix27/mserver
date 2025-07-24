import { registerEnumType } from '@nestjs/graphql';
import { $Enums } from '@prisma/client';

export enum OtpPurpose {
    SignUp,
    Verification,
}

export enum OrderParticipant {
    MERCHANT = 'MERCHANT',
    CUSTOMER = 'CUSTOMER',
}

registerEnumType(OrderParticipant, {
    name: 'OtpPurpose',
});
registerEnumType(OtpPurpose, {
    name: 'OtpPurpose',
});
registerEnumType($Enums.CountryCode, {
    name: 'country',
});

registerEnumType($Enums.ChainType, {
    name: 'ChainType',
});


registerEnumType($Enums.CredentialsStatus, {
    name: 'CredentialsStatus',
});


registerEnumType($Enums.CountryCode, {
    name: 'CountryCode',
});

registerEnumType($Enums.MerchantStatus, {
    name: 'MerchantStatus',
});

registerEnumType($Enums.OrderActions, {
    name: 'OrderActions',
});

registerEnumType($Enums.OrderStatus, {
    name: 'OrderStatus',
});

registerEnumType($Enums.OrderMode, {
    name: 'OrderMode',
});

registerEnumType($Enums.TradeType, {
    name: 'TradeType',
});

registerEnumType($Enums.UserRole, {
    name: 'UserRole',
});

registerEnumType($Enums.TransactionCategory, {
    name: 'TransactionCategory',
});

registerEnumType($Enums.TransactionsMode, {
    name: 'TransactionsMode',
});

registerEnumType($Enums.TransactionStatus, {
    name: 'TransactionStatus',
});
