"use client"

import * as React from "react"
import { useContractRead } from "wagmi"

import { ErrorMessage } from "@/registry/default/buidl/error-message"
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

export type Erc721TotalSupplyProps = React.HTMLAttributes<HTMLDivElement> & {
  address: `0x${string}`
  chainId?: number
  displayLoading?: boolean
  displayError?: boolean
}

const Erc721TotalSupply = React.forwardRef<
  HTMLDivElement,
  Erc721TotalSupplyProps
>(
  (
    { chainId, address, displayLoading = true, displayError = true, ...props },
    ref
  ) => {
    const { data, isLoading, isError, error } = useContractRead({
      address,
      abi: erc721TotalSupplyAbi,
      functionName: "totalSupply",
      chainId,
    })

    if (displayLoading && isLoading) {
      return <Skeleton className="h-6 w-16" {...props} />
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
        {data.toString()}
      </div>
    )
  }
)

Erc721TotalSupply.displayName = "Erc721TotalSupply"

export { Erc721TotalSupply }
