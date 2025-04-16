
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}




  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  firstname: 'firstname',
  lastname: 'lastname',
  middlename: 'middlename',
  email: 'email',
  password: 'password',
  transaction_pin: 'transaction_pin',
  role: 'role',
  country: 'country',
  created_at: 'created_at',
  updated_at: 'updated_at',
  bvn: 'bvn',
  bvn_status: 'bvn_status',
  nin: 'nin',
  nin_status: 'nin_status',
  home_address: 'home_address',
  phone: 'phone',
  phone_verified: 'phone_verified',
  merchant_success_rate: 'merchant_success_rate',
  merchant_trade_count: 'merchant_trade_count',
  merchant_nickname: 'merchant_nickname',
  merchant_status: 'merchant_status'
};

exports.Prisma.CryptoWalletsScalarFieldEnum = {
  id: 'id',
  address: 'address',
  wallet_id: 'wallet_id',
  chainType: 'chainType',
  minipay: 'minipay',
  created_at: 'created_at',
  updated_at: 'updated_at',
  user_id: 'user_id'
};

exports.Prisma.BankAccountScalarFieldEnum = {
  id: 'id',
  account_name: 'account_name',
  account_no: 'account_no',
  soft_delete: 'soft_delete',
  bank_name: 'bank_name',
  created_at: 'created_at',
  updated_at: 'updated_at',
  user_id: 'user_id'
};

exports.Prisma.AdvertsScalarFieldEnum = {
  id: 'id',
  rateFloat: 'rateFloat',
  rateFixed: 'rateFixed',
  isFloatRate: 'isFloatRate',
  limitUpper: 'limitUpper',
  limitLower: 'limitLower',
  fiatAmountPerCrypto: 'fiatAmountPerCrypto',
  tradeType: 'tradeType',
  currency_crypto: 'currency_crypto',
  currency_fiat: 'currency_fiat',
  instructions: 'instructions',
  wallet_address: 'wallet_address',
  status: 'status',
  duration: 'duration',
  created_at: 'created_at',
  updated_at: 'updated_at',
  merchant_id: 'merchant_id'
};

exports.Prisma.OrdersScalarFieldEnum = {
  id: 'id',
  amount_fiat: 'amount_fiat',
  amount_crypto: 'amount_crypto',
  wallet_customer: 'wallet_customer',
  wallet_merchant: 'wallet_merchant',
  estimated_duration: 'estimated_duration',
  bank_account_name: 'bank_account_name',
  bank_account_no: 'bank_account_no',
  bank_name: 'bank_name',
  currency_crypto: 'currency_crypto',
  currency_fiat: 'currency_fiat',
  trade_type: 'trade_type',
  status: 'status',
  action_user: 'action_user',
  action_merchant: 'action_merchant',
  sell_txn_hash_customer_lock_crypto: 'sell_txn_hash_customer_lock_crypto',
  sell_txn_hash_customer_release_crypto: 'sell_txn_hash_customer_release_crypto',
  sell_time2_customer_lock_crypto: 'sell_time2_customer_lock_crypto',
  sell_time1_customer_request: 'sell_time1_customer_request',
  sell_time3_merchant_send_fiat: 'sell_time3_merchant_send_fiat',
  sell_time4_customer_release_crypto: 'sell_time4_customer_release_crypto',
  buy_time1_customer_request: 'buy_time1_customer_request',
  buy_time2_merchant_lock_crypto: 'buy_time2_merchant_lock_crypto',
  buy_time3_customer_send_fiat: 'buy_time3_customer_send_fiat',
  buy_time4_merchant_release_crypto: 'buy_time4_merchant_release_crypto',
  buy_txn_hash_merchant_lock_crypto: 'buy_txn_hash_merchant_lock_crypto',
  buy_txn_hash_merchant_release_crypto: 'buy_txn_hash_merchant_release_crypto',
  created_at: 'created_at',
  updated_at: 'updated_at',
  customer_id: 'customer_id',
  merchant_id: 'merchant_id'
};

exports.Prisma.ExchangeRatesScalarFieldEnum = {
  id: 'id',
  rates: 'rates',
  exchangeratesapi: 'exchangeratesapi',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.AccessTokensScalarFieldEnum = {
  id: 'id',
  token: 'token',
  platform: 'platform',
  purpose: 'purpose',
  response_data: 'response_data',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.TransactionsScalarFieldEnum = {
  id: 'id',
  amount: 'amount',
  note: 'note',
  category: 'category',
  mode: 'mode',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at',
  user_id: 'user_id'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.MerchantStatus = exports.$Enums.MerchantStatus = {
  Online: 'Online',
  Offline: 'Offline',
  Wait: 'Wait'
};

exports.UserRole = exports.$Enums.UserRole = {
  Regular: 'Regular',
  P2pMerchant: 'P2pMerchant',
  CustomeSupport: 'CustomeSupport'
};

exports.Country = exports.$Enums.Country = {
  Nigeria: 'Nigeria',
  Ghana: 'Ghana',
  Kenya: 'Kenya'
};

exports.ChainType = exports.$Enums.ChainType = {
  Ethereum: 'Ethereum',
  Solana: 'Solana',
  Cosmos: 'Cosmos'
};

exports.CredentialsStatus = exports.$Enums.CredentialsStatus = {
  REVIEW: 'REVIEW',
  VALID: 'VALID',
  FAILED: 'FAILED',
  NONE: 'NONE'
};

exports.TradeType = exports.$Enums.TradeType = {
  BUY: 'BUY',
  SELL: 'SELL'
};

exports.CurrencyCrypto = exports.$Enums.CurrencyCrypto = {
  BTC: 'BTC',
  CUSD: 'CUSD',
  ETH_USDT: 'ETH_USDT',
  BASE_USDT: 'BASE_USDT',
  ETH: 'ETH'
};

exports.CurrencyFiat = exports.$Enums.CurrencyFiat = {
  NGN: 'NGN',
  GHS: 'GHS',
  KES: 'KES'
};

exports.AdvertStatus = exports.$Enums.AdvertStatus = {
  OPEN: 'OPEN',
  CLOSE: 'CLOSE'
};

exports.OrderStatus = exports.$Enums.OrderStatus = {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  CANCEL: 'CANCEL',
  APPEAL: 'APPEAL'
};

exports.OrderActions = exports.$Enums.OrderActions = {
  LockCrypto: 'LockCrypto',
  FaitSent: 'FaitSent',
  FaitReceived: 'FaitReceived',
  ReleaseCrypto: 'ReleaseCrypto',
  Appeal: 'Appeal',
  Cancel: 'Cancel'
};

exports.BankName = exports.$Enums.BankName = {
  NG_ZENITH: 'NG_ZENITH',
  NG_GTB: 'NG_GTB',
  NG_UBA: 'NG_UBA',
  NG_FIDELITY: 'NG_FIDELITY',
  NG_OPAY: 'NG_OPAY',
  NG_MONIEPOINT: 'NG_MONIEPOINT',
  NG_WEMA: 'NG_WEMA',
  NG_UNITY: 'NG_UNITY',
  NG_STERLING: 'NG_STERLING',
  NG_STANBIC: 'NG_STANBIC',
  NG_LOTUS: 'NG_LOTUS',
  NG_KEYSTONE: 'NG_KEYSTONE',
  NG_JAIZ: 'NG_JAIZ',
  NG_KUDA: 'NG_KUDA',
  NG_PALMPAY: 'NG_PALMPAY',
  NG_ACCESS: 'NG_ACCESS',
  NG_FCMB: 'NG_FCMB',
  NG_ECOBANK: 'NG_ECOBANK',
  NG_FIRST: 'NG_FIRST'
};

exports.CurrencyType = exports.$Enums.CurrencyType = {
  FIAT: 'FIAT',
  CRYPTO: 'CRYPTO'
};

exports.CurrencyName = exports.$Enums.CurrencyName = {
  NGN: 'NGN',
  BTC: 'BTC',
  CUSD: 'CUSD',
  USDT: 'USDT',
  USDTx: 'USDTx',
  ETH: 'ETH'
};

exports.AccessTokenPlatform = exports.$Enums.AccessTokenPlatform = {
  RELOADLY: 'RELOADLY'
};

exports.TransactionCategory = exports.$Enums.TransactionCategory = {
  AIRTIME: 'AIRTIME',
  DATA_BUNDLE: 'DATA_BUNDLE',
  GIFT_CARD: 'GIFT_CARD'
};

exports.TransactionsMode = exports.$Enums.TransactionsMode = {
  CREDIT: 'CREDIT',
  DEBIT: 'DEBIT'
};

exports.TransactionStatus = exports.$Enums.TransactionStatus = {
  COMPLETED: 'COMPLETED',
  PENDING: 'PENDING'
};

exports.Prisma.ModelName = {
  User: 'User',
  CryptoWallets: 'CryptoWallets',
  BankAccount: 'BankAccount',
  Adverts: 'Adverts',
  Orders: 'Orders',
  ExchangeRates: 'ExchangeRates',
  AccessTokens: 'AccessTokens',
  Transactions: 'Transactions'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Volumes/philix-sata-ssd/Mobarter/server/src/lib/gen/prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "/Volumes/philix-sata-ssd/Mobarter/server/prisma/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../../.env"
  },
  "relativePath": "../../../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": true,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"../src/lib/gen/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel User {\n  id                    Int                @id @default(autoincrement())\n  firstname             String?\n  lastname              String?\n  middlename            String?\n  email                 String?            @unique\n  password              String?\n  transaction_pin       String?\n  // minipay_wallet    String?\n  // minipay           Boolean?           @default(false)\n  role                  UserRole?          @default(Regular)\n  country               Country?\n  created_at            DateTime?          @default(now())\n  updated_at            DateTime?          @updatedAt\n  bvn                   String?\n  bvn_status            CredentialsStatus? @default(NONE)\n  nin                   String?\n  nin_status            CredentialsStatus? @default(NONE)\n  home_address          String?\n  phone                 String?\n  phone_verified        Boolean?           @default(false)\n  crypto_wallets        CryptoWallets[]\n  bank_accounts         BankAccount[]\n  //* Vendor\n  merchant_success_rate Int?\n  merchant_trade_count  Int?               @default(0)\n  merchant_nickname     String?\n  merchant_status       MerchantStatus?    @default(Offline)\n  adverts               Adverts[]\n  orders                Orders[]\n  transactions          Transactions[]\n  // orders_buy        OrdersBuy[]\n}\n\nenum MerchantStatus {\n  Online\n  Offline\n  Wait\n}\n\nenum UserRole {\n  Regular\n  P2pMerchant\n  CustomeSupport\n}\n\nenum Country {\n  Nigeria\n  Ghana\n  Kenya\n}\n\nmodel CryptoWallets {\n  id         Int       @id @default(autoincrement())\n  address    String    @unique\n  wallet_id  String?\n  chainType  ChainType\n  minipay    Boolean?  @default(false)\n  created_at DateTime? @default(now())\n  updated_at DateTime? @updatedAt\n  user_id    Int?\n  user       User?     @relation(fields: [user_id], references: [id])\n}\n\nenum ChainType {\n  Ethereum\n  Solana\n  Cosmos\n}\n\nenum CredentialsStatus {\n  REVIEW\n  VALID\n  FAILED\n  NONE\n}\n\nmodel BankAccount {\n  id           Int       @id @default(autoincrement())\n  account_name String\n  account_no   String\n  soft_delete  Boolean?  @default(false)\n  bank_name    BankName\n  created_at   DateTime? @default(now())\n  updated_at   DateTime? @updatedAt\n  user_id      Int\n  user         User?     @relation(fields: [user_id], references: [id])\n  advert       Adverts[]\n}\n\nenum TradeType {\n  BUY\n  SELL\n}\n\nenum CurrencyCrypto {\n  BTC\n  CUSD\n  ETH_USDT\n  BASE_USDT\n  ETH\n}\n\nenum CurrencyFiat {\n  NGN\n  GHS\n  KES\n}\n\n// Buy and sell is always dependent on the crypto value\nmodel Adverts {\n  id                  Int            @id @default(autoincrement())\n  rateFloat           Float?\n  rateFixed           Float?\n  isFloatRate         Boolean        @default(true)\n  limitUpper          Float\n  limitLower          Float\n  fiatAmountPerCrypto Int\n  tradeType           TradeType\n  currency_crypto     CurrencyCrypto\n  currency_fiat       CurrencyFiat\n  instructions        String\n  wallet_address      String\n  status              AdvertStatus?  @default(OPEN)\n  duration            String\n  created_at          DateTime?      @default(now())\n  updated_at          DateTime?      @updatedAt\n  bank_accounts       BankAccount[]\n  merchant_id         Int\n  merchant            User?          @relation(fields: [merchant_id], references: [id])\n}\n\nenum AdvertStatus {\n  OPEN\n  CLOSE\n}\n\nmodel Orders {\n  id                                    Int            @id @default(autoincrement())\n  amount_fiat                           Float\n  amount_crypto                         Float\n  wallet_customer                       String\n  wallet_merchant                       String\n  estimated_duration                    String\n  bank_account_name                     String\n  bank_account_no                       String\n  bank_name                             BankName\n  currency_crypto                       CurrencyCrypto\n  currency_fiat                         CurrencyFiat\n  trade_type                            TradeType\n  status                                OrderStatus    @default(PENDING)\n  action_user                           OrderActions?\n  action_merchant                       OrderActions?\n  // ! fiat\n  sell_txn_hash_customer_lock_crypto    String?\n  sell_txn_hash_customer_release_crypto String?\n  // ! fiat\n  sell_time2_customer_lock_crypto       DateTime?\n  sell_time1_customer_request           DateTime?\n  sell_time3_merchant_send_fiat         DateTime?\n  sell_time4_customer_release_crypto    DateTime?\n  // ! open\n  buy_time1_customer_request            DateTime?\n  buy_time2_merchant_lock_crypto        DateTime?\n  buy_time3_customer_send_fiat          DateTime?\n  buy_time4_merchant_release_crypto     DateTime?\n  buy_txn_hash_merchant_lock_crypto     String?\n  buy_txn_hash_merchant_release_crypto  String?\n  // ! open\n  created_at                            DateTime?      @default(now())\n  updated_at                            DateTime?      @updatedAt\n  customer_id                           Int\n  customer                              User?          @relation(fields: [customer_id], references: [id])\n  merchant_id                           Int\n}\n\nenum OrderStatus {\n  PENDING\n  COMPLETED\n  CANCEL\n  APPEAL\n}\n\nenum OrderActions {\n  LockCrypto\n  FaitSent\n  FaitReceived\n  ReleaseCrypto\n  Appeal\n  Cancel\n}\n\nenum BankName {\n  NG_ZENITH\n  NG_GTB\n  NG_UBA\n  NG_FIDELITY\n  NG_OPAY\n  NG_MONIEPOINT\n  NG_WEMA\n  NG_UNITY\n  NG_STERLING\n  NG_STANBIC\n  NG_LOTUS\n  NG_KEYSTONE\n  NG_JAIZ\n  NG_KUDA\n  NG_PALMPAY\n  NG_ACCESS\n  NG_FCMB\n  NG_ECOBANK\n  NG_FIRST\n}\n\nenum CurrencyType {\n  FIAT\n  CRYPTO\n}\n\nenum CurrencyName {\n  NGN\n  BTC\n  CUSD\n  USDT\n  USDTx\n  ETH\n}\n\nmodel ExchangeRates {\n  id               Int       @id @default(autoincrement())\n  rates            String?\n  exchangeratesapi String?\n  created_at       DateTime? @default(now())\n  updated_at       DateTime? @updatedAt\n}\n\nenum AccessTokenPlatform {\n  RELOADLY\n}\n\nmodel AccessTokens {\n  id            Int                 @id @default(autoincrement())\n  token         String\n  platform      AccessTokenPlatform\n  purpose       String?\n  response_data String?\n  created_at    DateTime?           @default(now())\n  updated_at    DateTime?           @updatedAt\n}\n\nenum TransactionCategory {\n  AIRTIME\n  DATA_BUNDLE\n  GIFT_CARD\n}\n\nenum TransactionsMode {\n  CREDIT\n  DEBIT\n}\n\nenum TransactionStatus {\n  COMPLETED\n  PENDING\n}\n\nmodel Transactions {\n  id         Int                 @id @default(autoincrement())\n  amount     Float\n  note       String\n  category   TransactionCategory\n  mode       TransactionsMode\n  status     TransactionStatus\n  created_at DateTime?           @default(now())\n  updated_at DateTime?           @updatedAt\n  user_id    Int?\n  user       User?               @relation(fields: [user_id], references: [id])\n}\n",
  "inlineSchemaHash": "b96bc8c91f4391963691c68c1a719846bf40262bf4010e294a840172fce794a2",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "src/lib/gen/prisma",
    "lib/gen/prisma",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"firstname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"middlename\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transaction_pin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"UserRole\",\"nativeType\":null,\"default\":\"Regular\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"country\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Country\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"bvn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bvn_status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"CredentialsStatus\",\"nativeType\":null,\"default\":\"NONE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nin_status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"CredentialsStatus\",\"nativeType\":null,\"default\":\"NONE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"home_address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone_verified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"crypto_wallets\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CryptoWallets\",\"nativeType\":null,\"relationName\":\"CryptoWalletsToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bank_accounts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BankAccount\",\"nativeType\":null,\"relationName\":\"BankAccountToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"merchant_success_rate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"merchant_trade_count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"merchant_nickname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"merchant_status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"MerchantStatus\",\"nativeType\":null,\"default\":\"Offline\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"adverts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Adverts\",\"nativeType\":null,\"relationName\":\"AdvertsToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orders\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Orders\",\"nativeType\":null,\"relationName\":\"OrdersToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transactions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Transactions\",\"nativeType\":null,\"relationName\":\"TransactionsToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CryptoWallets\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wallet_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chainType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ChainType\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"minipay\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"CryptoWalletsToUser\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"BankAccount\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"account_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"account_no\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"soft_delete\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bank_name\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BankName\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"BankAccountToUser\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"advert\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Adverts\",\"nativeType\":null,\"relationName\":\"AdvertsToBankAccount\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Adverts\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rateFloat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rateFixed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isFloatRate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"limitUpper\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"limitLower\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fiatAmountPerCrypto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tradeType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TradeType\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency_crypto\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CurrencyCrypto\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency_fiat\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CurrencyFiat\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"instructions\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wallet_address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"AdvertStatus\",\"nativeType\":null,\"default\":\"OPEN\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"duration\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"bank_accounts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BankAccount\",\"nativeType\":null,\"relationName\":\"AdvertsToBankAccount\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"merchant_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"merchant\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"AdvertsToUser\",\"relationFromFields\":[\"merchant_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Orders\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount_fiat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount_crypto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wallet_customer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wallet_merchant\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estimated_duration\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bank_account_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bank_account_no\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bank_name\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BankName\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency_crypto\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CurrencyCrypto\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency_fiat\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CurrencyFiat\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trade_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TradeType\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"OrderStatus\",\"nativeType\":null,\"default\":\"PENDING\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"action_user\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OrderActions\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"action_merchant\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OrderActions\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sell_txn_hash_customer_lock_crypto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sell_txn_hash_customer_release_crypto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sell_time2_customer_lock_crypto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sell_time1_customer_request\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sell_time3_merchant_send_fiat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sell_time4_customer_release_crypto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"buy_time1_customer_request\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"buy_time2_merchant_lock_crypto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"buy_time3_customer_send_fiat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"buy_time4_merchant_release_crypto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"buy_txn_hash_merchant_lock_crypto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"buy_txn_hash_merchant_release_crypto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"customer_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"OrdersToUser\",\"relationFromFields\":[\"customer_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"merchant_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ExchangeRates\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rates\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exchangeratesapi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"AccessTokens\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"platform\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AccessTokenPlatform\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"purpose\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"response_data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Transactions\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"note\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TransactionCategory\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mode\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TransactionsMode\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TransactionStatus\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"TransactionsToUser\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"MerchantStatus\":{\"values\":[{\"name\":\"Online\",\"dbName\":null},{\"name\":\"Offline\",\"dbName\":null},{\"name\":\"Wait\",\"dbName\":null}],\"dbName\":null},\"UserRole\":{\"values\":[{\"name\":\"Regular\",\"dbName\":null},{\"name\":\"P2pMerchant\",\"dbName\":null},{\"name\":\"CustomeSupport\",\"dbName\":null}],\"dbName\":null},\"Country\":{\"values\":[{\"name\":\"Nigeria\",\"dbName\":null},{\"name\":\"Ghana\",\"dbName\":null},{\"name\":\"Kenya\",\"dbName\":null}],\"dbName\":null},\"ChainType\":{\"values\":[{\"name\":\"Ethereum\",\"dbName\":null},{\"name\":\"Solana\",\"dbName\":null},{\"name\":\"Cosmos\",\"dbName\":null}],\"dbName\":null},\"CredentialsStatus\":{\"values\":[{\"name\":\"REVIEW\",\"dbName\":null},{\"name\":\"VALID\",\"dbName\":null},{\"name\":\"FAILED\",\"dbName\":null},{\"name\":\"NONE\",\"dbName\":null}],\"dbName\":null},\"TradeType\":{\"values\":[{\"name\":\"BUY\",\"dbName\":null},{\"name\":\"SELL\",\"dbName\":null}],\"dbName\":null},\"CurrencyCrypto\":{\"values\":[{\"name\":\"BTC\",\"dbName\":null},{\"name\":\"CUSD\",\"dbName\":null},{\"name\":\"ETH_USDT\",\"dbName\":null},{\"name\":\"BASE_USDT\",\"dbName\":null},{\"name\":\"ETH\",\"dbName\":null}],\"dbName\":null},\"CurrencyFiat\":{\"values\":[{\"name\":\"NGN\",\"dbName\":null},{\"name\":\"GHS\",\"dbName\":null},{\"name\":\"KES\",\"dbName\":null}],\"dbName\":null},\"AdvertStatus\":{\"values\":[{\"name\":\"OPEN\",\"dbName\":null},{\"name\":\"CLOSE\",\"dbName\":null}],\"dbName\":null},\"OrderStatus\":{\"values\":[{\"name\":\"PENDING\",\"dbName\":null},{\"name\":\"COMPLETED\",\"dbName\":null},{\"name\":\"CANCEL\",\"dbName\":null},{\"name\":\"APPEAL\",\"dbName\":null}],\"dbName\":null},\"OrderActions\":{\"values\":[{\"name\":\"LockCrypto\",\"dbName\":null},{\"name\":\"FaitSent\",\"dbName\":null},{\"name\":\"FaitReceived\",\"dbName\":null},{\"name\":\"ReleaseCrypto\",\"dbName\":null},{\"name\":\"Appeal\",\"dbName\":null},{\"name\":\"Cancel\",\"dbName\":null}],\"dbName\":null},\"BankName\":{\"values\":[{\"name\":\"NG_ZENITH\",\"dbName\":null},{\"name\":\"NG_GTB\",\"dbName\":null},{\"name\":\"NG_UBA\",\"dbName\":null},{\"name\":\"NG_FIDELITY\",\"dbName\":null},{\"name\":\"NG_OPAY\",\"dbName\":null},{\"name\":\"NG_MONIEPOINT\",\"dbName\":null},{\"name\":\"NG_WEMA\",\"dbName\":null},{\"name\":\"NG_UNITY\",\"dbName\":null},{\"name\":\"NG_STERLING\",\"dbName\":null},{\"name\":\"NG_STANBIC\",\"dbName\":null},{\"name\":\"NG_LOTUS\",\"dbName\":null},{\"name\":\"NG_KEYSTONE\",\"dbName\":null},{\"name\":\"NG_JAIZ\",\"dbName\":null},{\"name\":\"NG_KUDA\",\"dbName\":null},{\"name\":\"NG_PALMPAY\",\"dbName\":null},{\"name\":\"NG_ACCESS\",\"dbName\":null},{\"name\":\"NG_FCMB\",\"dbName\":null},{\"name\":\"NG_ECOBANK\",\"dbName\":null},{\"name\":\"NG_FIRST\",\"dbName\":null}],\"dbName\":null},\"CurrencyType\":{\"values\":[{\"name\":\"FIAT\",\"dbName\":null},{\"name\":\"CRYPTO\",\"dbName\":null}],\"dbName\":null},\"CurrencyName\":{\"values\":[{\"name\":\"NGN\",\"dbName\":null},{\"name\":\"BTC\",\"dbName\":null},{\"name\":\"CUSD\",\"dbName\":null},{\"name\":\"USDT\",\"dbName\":null},{\"name\":\"USDTx\",\"dbName\":null},{\"name\":\"ETH\",\"dbName\":null}],\"dbName\":null},\"AccessTokenPlatform\":{\"values\":[{\"name\":\"RELOADLY\",\"dbName\":null}],\"dbName\":null},\"TransactionCategory\":{\"values\":[{\"name\":\"AIRTIME\",\"dbName\":null},{\"name\":\"DATA_BUNDLE\",\"dbName\":null},{\"name\":\"GIFT_CARD\",\"dbName\":null}],\"dbName\":null},\"TransactionsMode\":{\"values\":[{\"name\":\"CREDIT\",\"dbName\":null},{\"name\":\"DEBIT\",\"dbName\":null}],\"dbName\":null},\"TransactionStatus\":{\"values\":[{\"name\":\"COMPLETED\",\"dbName\":null},{\"name\":\"PENDING\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-darwin-arm64.dylib.node");
path.join(process.cwd(), "src/lib/gen/prisma/libquery_engine-darwin-arm64.dylib.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/lib/gen/prisma/schema.prisma")
