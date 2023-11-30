"use client"

import * as React from "react"
import { useContractRead } from "wagmi"

import { cn } from "@/lib/utils"
import { Skeleton } from "@/registry/default/ui/skeleton"

const erc721TokenUriAbi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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

export type Erc721TokenUriProps = React.HTMLAttributes<HTMLSpanElement> & {
  address: `0x${string}`
  tokenId: number | string | bigint
  chainId?: number
}

const Erc721TokenUri = React.forwardRef<HTMLSpanElement, Erc721TokenUriProps>(
  ({ chainId, address, tokenId, ...props }, ref) => {
    const { data, isLoading, isError, error } = useContractRead({
      address,
      abi: erc721TokenUriAbi,
      functionName: "tokenURI",
      args: [BigInt(tokenId)],
      chainId,
    })

    if (isLoading) {
      return <Skeleton className="h-6 w-[500px]" {...props} />
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

Erc721TokenUri.displayName = "Erc721TokenUri"

export { Erc721TokenUri }
