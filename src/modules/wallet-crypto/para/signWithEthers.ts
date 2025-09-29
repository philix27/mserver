import { Para as ParaServer, } from "@getpara/server-sdk";
import { ParaEthersSigner } from "@getpara/ethers-v6-integration";
import { ethers } from "ethers";
import { decrypt } from "./encryption-utils"
import { PARA_API_KEY, PARA_ENVIRONMENT } from "./const";

export async function ethersPregenSigner(email: string, keyShare: string) {

  const para = new ParaServer(PARA_ENVIRONMENT, PARA_API_KEY);

  const hasPregenWallet = await para.hasPregenWallet({
    pregenIdentifierType: "EMAIL",
    pregenIdentifier: email
  });

  if (!hasPregenWallet) {
    throw new Error("No pre-generated wallet found for this email")
  }

  const decryptedKeyShare = await decrypt(keyShare);
  await para.setUserShare(decryptedKeyShare);

  const ethersProvider = new ethers.JsonRpcProvider("https://ethereum-sepolia-rpc.publicnode.com");
  const paraEthersSigner = new ParaEthersSigner(para, ethersProvider as ethers.Provider);

  return { signer: paraEthersSigner, provider: ethersProvider }
}

export async function signHandler(email: string, keyShare: string) {
  try {
    const { signer, provider } = await ethersPregenSigner(email, keyShare);

    const address = await signer.getAddress();
    const feeData = await provider.getFeeData();
    const nonce = await provider.getTransactionCount(address);

    const tx = {
      to: address,
      value: ethers.parseEther("0.0001"),
      nonce: nonce,
      gasLimit: 21000,
      gasPrice: feeData.gasPrice,
    };

    await signer.signTransaction(tx);

    return {
      success: true,
      message: "Transaction signed using Ethers + Para (pre-generated wallet)",
    }
  } catch (error) {
    console.error("Error in ethersPregenSignHandler:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to sign transaction",
    }
  }
}
