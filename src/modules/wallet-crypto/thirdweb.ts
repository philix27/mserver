import { secrets } from "../../modules/common";
import { Engine, createThirdwebClient } from "thirdweb";

const client = createThirdwebClient({
    secretKey: "8i41uU37rbhUWJjf2sklUoNmO_jNv4CqzSdWO0qW6lJ6b4PCPUNWWOp5Am8yOQJMw6K2bEaM_c"
    // secretKey: secrets.THIRDWEB_SECRET_KEY
});

// const walletS = Engine.serverWallet({
//   client,
//   address: "0x...", // your server wallet address
// });


export async function createWalletThirdweb() {

    try {
        const wallet = await Engine.createServerWallet({
            client,
            label: "pharmoprep@gmail.com",
        });
        return wallet;
    } catch (error) {
        throw error;
    }


}


