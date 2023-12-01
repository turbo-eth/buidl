"use client"

import * as React from "react"
import { useContractRead } from "wagmi"

import { ErrorMessage } from "@/registry/default/buidl/error-message"
import { Skeleton } from "@/registry/default/ui/skeleton"

const erc20SymbolAbi = [
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const

export type Erc20SymbolProps = React.HTMLAttributes<HTMLDivElement> & {
  address: `0x${string}`
  chainId?: number
  displayLoading?: boolean
  displayError?: boolean
}

const Erc20Symbol = React.forwardRef<HTMLDivElement, Erc20SymbolProps>(
  (
    { chainId, address, displayLoading = true, displayError = true, ...props },
    ref
  ) => {
    const { data, isLoading, isError, error } = useContractRead({
      address,
      abi: erc20SymbolAbi,
      functionName: "symbol",
      chainId,
    })

    if (displayLoading && isLoading) {
      return <Skeleton className="h-6 w-12" {...props} />
    }

    if (displayError && isError) {
      return (
        <ErrorMessage
          defaultErrorMessage="Error while fetching ERC20 data"
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

Erc20Symbol.displayName = "Erc20Symbol"

export { Erc20Symbol }
