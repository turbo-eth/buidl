"use client"

import * as React from "react"
import { useContractRead } from "wagmi"

import { ErrorMessage } from "@/registry/default/buidl/error-message"
import { Skeleton } from "@/registry/default/ui/skeleton"

const erc20NameAbi = [
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const

export type Erc20NameProps = React.HTMLAttributes<HTMLDivElement> & {
  address: `0x${string}`
  chainId?: number
  displayLoading?: boolean
  displayError?: boolean
}

const Erc20Name = React.forwardRef<HTMLDivElement, Erc20NameProps>(
  (
    { chainId, address, displayLoading = true, displayError = true, ...props },
    ref
  ) => {
    const { data, isLoading, isError, error } = useContractRead({
      address,
      abi: erc20NameAbi,
      functionName: "name",
      chainId,
    })

    if (displayLoading && isLoading) {
      return <Skeleton className="h-6 w-36" {...props} />
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

Erc20Name.displayName = "Erc20Name"

export { Erc20Name }
