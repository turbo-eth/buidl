"use client"

import * as React from "react"
import { formatUnits } from "viem"
import { useContractRead } from "wagmi"

import { cn } from "@/lib/utils"
import { Skeleton } from "@/registry/default/ui/skeleton"

const erc20TotalSupplyAbi = [
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
] as const

const erc20DecimalsAbi = [
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const

function trimFormattedBalance(balance: string | undefined, decimals = 4) {
  if (!balance) {
    return "0"
  }
  const [integer, decimal] = balance.split(".")
  if (!decimal) return integer

  const trimmedDecimal = decimal.slice(0, decimals)
  return `${integer}.${trimmedDecimal}`
}

const ErrorMessage = ({ error }: { error: Error | null }) => {
  return (
    <div className={cn("break-words text-sm font-medium text-red-500")}>
      {error?.message ?? "Error while fetching ERC20 data"}
    </div>
  )
}

export type Erc20TotalSupplyProps = React.HTMLAttributes<HTMLSpanElement> & {
  address: `0x${string}`
  chainId?: number
  formatDecimals?: number
}

const Erc20TotalSupply = React.forwardRef<
  HTMLSpanElement,
  Erc20TotalSupplyProps
>(({ chainId, address, formatDecimals = 4, ...props }, ref) => {
  const {
    data: totalSupply,
    isLoading: isLoadingTotalSupply,
    isError: isErrorTotalSupply,
    error: errorTotalSupply,
  } = useContractRead({
    address,
    abi: erc20TotalSupplyAbi,
    functionName: "totalSupply",
    chainId,
  })

  const {
    data: decimals,
    isLoading: isLoadingDecimals,
    isError: isErrorDecimals,
    error: errorDecimals,
  } = useContractRead({
    address,
    abi: erc20DecimalsAbi,
    functionName: "decimals",
    chainId,
  })

  if (isLoadingTotalSupply || isLoadingDecimals) {
    return <Skeleton className="h-6 w-12" {...props} />
  }

  if (isErrorTotalSupply || isErrorDecimals) {
    return <ErrorMessage error={errorTotalSupply ?? errorDecimals} />
  }

  if (totalSupply === undefined || decimals === undefined) {
    return null
  }

  return (
    <span ref={ref} {...props}>
      {trimFormattedBalance(formatUnits(totalSupply, decimals), formatDecimals)}
    </span>
  )
})

Erc20TotalSupply.displayName = "Erc20TotalSupply"

export { Erc20TotalSupply }
