"use client"

import * as React from "react"
import { useContractRead } from "wagmi"

import { cn } from "@/lib/utils"
import { Skeleton } from "@/registry/default/ui/skeleton"

const erc721SymbolAbi = [
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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

export type Erc721SymbolProps = React.HTMLAttributes<HTMLSpanElement> & {
  address: `0x${string}`
  chainId?: number
}

const Erc721Symbol = React.forwardRef<HTMLSpanElement, Erc721SymbolProps>(
  ({ chainId, address, ...props }, ref) => {
    const { data, isLoading, isError, error } = useContractRead({
      address,
      abi: erc721SymbolAbi,
      functionName: "symbol",
      chainId,
    })

    if (isLoading) {
      return <Skeleton className="h-6 w-12" {...props} />
    }

    if (isError) {
      return <ErrorMessage error={error} />
    }

    if (data === undefined) {
      return null
    }

    return (
      <span ref={ref} {...props}>
        {data}
      </span>
    )
  }
)

Erc721Symbol.displayName = "Erc721Symbol"

export { Erc721Symbol }
