"use client"

import * as React from "react"
import { useContractRead } from "wagmi"

import { ErrorMessage } from "@/registry/default/buidl/error-message"
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

export type Erc721OwnerOfProps = React.HTMLAttributes<HTMLDivElement> & {
  address: `0x${string}`
  tokenId: number | string | bigint
  chainId?: number
  displayLoading?: boolean
  displayError?: boolean
}

const Erc721OwnerOf = React.forwardRef<HTMLDivElement, Erc721OwnerOfProps>(
  (
    {
      chainId,
      address,
      tokenId,
      displayLoading = true,
      displayError = true,
      ...props
    },
    ref
  ) => {
    const { data, isLoading, isError, error } = useContractRead({
      address,
      abi: erc721OwnerOfAbi,
      functionName: "ownerOf",
      args: [BigInt(tokenId)],
      chainId,
    })

    if (displayLoading && isLoading) {
      return <Skeleton className="h-6 w-[420px]" {...props} />
    }

    if (displayError && isError) {
      return (
        <ErrorMessage
          defaultErrorMessage="Error while fetching ERC721 data"
          error={error}
          {...props}
        />
      )
    }

    if (data === undefined) {
      return null
    }

    return (
      <div ref={ref} {...props}>
        {data}
      </div>
    )
  }
)

Erc721OwnerOf.displayName = "Erc721OwnerOf"

export { Erc721OwnerOf }
