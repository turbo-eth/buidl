"use client"

import * as React from "react"
import { useContractRead } from "wagmi"

import { cn } from "@/lib/utils"
import { Skeleton } from "@/registry/default/ui/skeleton"

const erc721OwnerOfAbi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const

const ErrorMessage = ({
  error,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { error: Error | null }) => {
  return (
    <div
      className={cn("break-words text-sm font-medium text-red-500", className)}
      {...props}
    >
      {error?.message ?? "Error while fetching ERC721 data"}
    </div>
  )
}

export type Erc721OwnerOfProps = React.HTMLAttributes<HTMLSpanElement> & {
  address: `0x${string}`
  tokenId: number | string | bigint
  chainId?: number
}

const Erc721OwnerOf = React.forwardRef<HTMLSpanElement, Erc721OwnerOfProps>(
  ({ chainId, address, tokenId, ...props }, ref) => {
    const { data, isLoading, isError, error } = useContractRead({
      address,
      abi: erc721OwnerOfAbi,
      functionName: "ownerOf",
      args: [BigInt(tokenId)],
      chainId,
    })

    if (isLoading) {
      return <Skeleton className="h-6 w-[420px]" {...props} />
    }

    if (isError) {
      return <ErrorMessage error={error} {...props} />
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

Erc721OwnerOf.displayName = "Erc721OwnerOf"

export { Erc721OwnerOf }
