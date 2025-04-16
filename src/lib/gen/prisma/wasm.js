
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


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

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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

exports.CredentialsStatus = exports.$Enums.CredentialsStatus = {
  REVIEW: 'REVIEW',
  VALID: 'VALID',
  FAILED: 'FAILED',
  NONE: 'NONE'
};

exports.MerchantStatus = exports.$Enums.MerchantStatus = {
  Online: 'Online',
  Offline: 'Offline',
  Wait: 'Wait'
};

exports.ChainType = exports.$Enums.ChainType = {
  Ethereum: 'Ethereum',
  Solana: 'Solana',
  Cosmos: 'Cosmos'
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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
