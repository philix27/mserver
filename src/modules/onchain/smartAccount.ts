import { http } from "viem"
import { sepolia } from "viem/chains"
import { createSmartAccountClient } from "permissionless"
// import { simpleSmartAccount } from "./simpleSmartAccount"; // created elsewhere
import { pimlicoClient } from "./pimlicoClient"; // created elsewhere
import { toSimple7702SmartAccount } from "viem/_types/account-abstraction";

const pimlicoBundlerUrl = `https://api.pimlico.io/v2/sepolia/rpc?apikey=<PIMLICO_API_KEY>`

const smartAccountClient = createSmartAccountClient({
    account: toSimple7702SmartAccount({
        client: [],
        owner: undefined
    }),
    // account: simpleSmartAccount,
    chain: sepolia,
    bundlerTransport: http(pimlicoBundlerUrl),
    paymaster: pimlicoClient, // optional
    userOperation: {
        estimateFeesPerGas: async () => {
            return (await pimlicoClient.getUserOperationGasPrice()).fast // only when using pimlico bundler
        },
    }
})


const smartAccountAddress = async () => await smartAccountClient.account.address