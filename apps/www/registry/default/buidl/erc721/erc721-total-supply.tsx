"use client"

import * as React from "react"
import { useContractRead } from "wagmi"

import { cn } from "@/lib/utils"
import { Skeleton } from "@/registry/default/ui/skeleton"

const erc721TotalSupplyAbi = [
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const

const ErrorMessage = ({ error }: { error: Error | null }) => {
  return (
    <div className={cn("break-words text-sm font-medium text-red-500")}>
      {error?.message ?? "Error while fetching ERC721 data"}
    </div>
  )
}

export type Erc721TotalSupplyProps = React.HTMLAttributes<HTMLSpanElement> & {
  address: `0x${string}`
  chainId?: number
}

const Erc721TotalSupply = React.forwardRef<
  HTMLSpanElement,
  Erc721TotalSupplyProps
>(({ chainId, address, ...props }, ref) => {
  const { data, isLoading, isError, error } = useContractRead({
    address,
    abi: erc721TotalSupplyAbi,
    functionName: "totalSupply",
    chainId,
  })

  if (isLoading) {
    return <Skeleton className="h-6 w-16" {...props} />
  }

  if (isError) {
    return <ErrorMessage error={error} />
  }

  if (data === undefined) {
    return null
  }

  return (
    <span ref={ref} {...props}>
      {data.toString()}
    </span>
  )
})

Erc721TotalSupply.displayName = "Erc721TotalSupply"

export { Erc721TotalSupply }
