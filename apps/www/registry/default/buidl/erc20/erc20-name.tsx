"use client"

import * as React from "react"
import { useContractRead } from "wagmi"

import { cn } from "@/lib/utils"
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

const ErrorMessage = ({ error }: { error: Error | null }) => {
  return (
    <div className={cn("break-words text-sm font-medium text-red-500")}>
      {error?.message ?? "Error while fetching ERC20 data"}
    </div>
  )
}

export type Erc20NameProps = React.HTMLAttributes<HTMLSpanElement> & {
  address: `0x${string}`
  chainId?: number
}

const Erc20Name = React.forwardRef<HTMLSpanElement, Erc20NameProps>(
  ({ chainId, address, ...props }, ref) => {
    const { data, isLoading, isError, error } = useContractRead({
      address,
      abi: erc20NameAbi,
      functionName: "name",
      chainId,
    })

    if (isLoading) {
      return <Skeleton className="h-6 w-36" {...props} />
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

Erc20Name.displayName = "Erc20Name"

export { Erc20Name }
