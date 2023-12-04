"use client"

import { customL2Chains } from "@/config/l2-chains"
import { useSimulateWithdrawETH } from "op-wagmi"
import * as React from "react"
import { useConfig } from "wagmi"

interface BalanceProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
    to: `0x${string}`
    amount: bigint
    l2ChainId: number
    displayLoading?: boolean
    displayError?: boolean
}



const SimulateDepositETH = React.forwardRef<HTMLDivElement, BalanceProps>(
  (
    {
      className,
      to,
      amount,
      l2ChainId,
      displayLoading = true,
      displayError = true,
      ...props
    },
    ref
  ) => {
    const config = useConfig()
const {data, isLoading, error, isSuccess, isError, fetchStatus, refetch} = useSimulateWithdrawETH({

  account: {address:"0xa726cc7fb443eb15ee8c512281887723b24a9073"} as any,
  args:{
    
    to,
    amount,
    minGasLimit: 500000,
    extraData: "0x",
  },
  chainId: 8453,
  gas: BigInt(500000),
  config: {
    ...config,
    l2chains: customL2Chains,
    
  }

})
 
React.useEffect(() => {
  refetch()
}, [])

  console.log(data, isLoading, error,  fetchStatus, isSuccess, isError)
  console.log("data", data)
  
 
 return <div {...props}>result</div>
  }
)

SimulateDepositETH.displayName = "SimulateDepositETH"

export { SimulateDepositETH }
