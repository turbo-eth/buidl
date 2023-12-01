"use client"

import * as React from "react"
import { useContractRead } from "wagmi"

import { ErrorMessage } from "@/registry/default/buidl/error-message"
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

export type Erc721SymbolProps = React.HTMLAttributes<HTMLDivElement> & {
  address: `0x${string}`
  chainId?: number
  displayLoading?: boolean
  displayError?: boolean
}

const Erc721Symbol = React.forwardRef<HTMLDivElement, Erc721SymbolProps>(
  (
    { chainId, address, displayLoading = true, displayError = true, ...props },
    ref
  ) => {
    const { data, isLoading, isError, error } = useContractRead({
      address,
      abi: erc721SymbolAbi,
      functionName: "symbol",
      chainId,
    })

    if (displayLoading && isLoading) {
      return <Skeleton className="h-6 w-12" {...props} />
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

Erc721Symbol.displayName = "Erc721Symbol"

export { Erc721Symbol }
