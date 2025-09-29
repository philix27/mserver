import { Para as ParaServer, Wallet, WalletType } from "@getpara/server-sdk";
import { encrypt } from "./encryption-utils";
import { PARA_API_KEY, PARA_ENVIRONMENT, } from "./const";


async function getWallet(email: string) {
  const para = new ParaServer(PARA_ENVIRONMENT, PARA_API_KEY);

  const walletExists = await para.hasPregenWallet({ "pregenIdentifierType": "EMAIL", "pregenIdentifier": email });

  if (!walletExists) {
    return {
      success: false,
      wallets: undefined,
      message: "No pre-generated wallet found"
    }
  }

  const wallets = await para.getPregenWallets({ "pregenIdentifierType": "EMAIL", "pregenIdentifier": email });

  return {
    success: true,
    wallets: wallets,
    message: "No pre-generated wallet found"
  }
}


async function createWallet(email: string): Promise<{
  success: boolean;
  message: string;
  encryptedKeyShare?: string;
  wallets?: Wallet[] | undefined;
}> {

  try {
    const para = new ParaServer(PARA_ENVIRONMENT, PARA_API_KEY);

    const walletExists = await para.hasPregenWallet({ "pregenIdentifierType": "EMAIL", "pregenIdentifier": email });

    if (walletExists) {
      return { success: false, message: "A pre-generated wallet already exists for this email" }
    }

    const wallets = await para.createPregenWalletPerType({
      types: [WalletType.EVM],
      pregenIdentifierType: "EMAIL",
      pregenIdentifier: email
    });

    if (!wallets) {
      throw new Error("Failed to create pre-generated wallet instance")
    }

    const keyShare = para.getUserShare();

    if (!keyShare) {
      throw new Error("Failed to retrieve user share after wallet creation")
    }

    const encryptedKeyShare = await encrypt(keyShare);

    return {
      success: true,
      message: "Pre-generated wallets created successfully",
      encryptedKeyShare,
      wallets
    }


  } catch (error) {
    console.error("Error creating pre-generated wallet:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to create pre-generated wallet",
    }
  }
}


export const Para = { createWallet, getWallet }