import { http } from 'viem'
import { sepolia } from 'viem/chains'
import { createPimlicoClient } from 'permissionless/clients/pimlico'
import { entryPoint07Address } from "viem/account-abstraction"
 
export const pimlicoClient = createPimlicoClient({ 
  transport: http("https://api.pimlico.io/v2/sepolia/rpc?apikey=YOUR_API_KEY_HERE"),
  entryPoint: {
    address: entryPoint07Address,
    version: "0.7",
  }
})

async function txn(){
    const userOperationGasPrice = await pimlicoClient.getUserOperationGasPrice()
}