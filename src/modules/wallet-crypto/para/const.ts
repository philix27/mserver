import { Environment } from "@getpara/server-sdk";

export const PARA_API_KEY = process.env.PARA_API_KEY;
export const PARA_ENVIRONMENT = (process.env.PARA_ENVIRONMENT as Environment) || Environment.BETA;

// export async function setKeyShareInDB(email: string, encryptedKeyShare: string) { }
// export async function getKeyShareInDB(email: string): Promise<string | undefined> {
//     return ""
// }
