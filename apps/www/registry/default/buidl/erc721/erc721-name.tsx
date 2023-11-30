"use client"

import * as React from "react"
import { useContractRead } from "wagmi"

import { cn } from "@/lib/utils"
import { Skeleton } from "@/registry/default/ui/skeleton"

const erc721NameAbi = [
  {
    inputs: [],
    name: "name",
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

export type Erc721NameProps = React.HTMLAttributes<HTMLSpanElement> & {
  address: `0x${string}`
  chainId?: number
}

const Erc721Name = React.forwardRef<HTMLSpanElement, Erc721NameProps>(
  ({ chainId, address, ...props }, ref) => {
    const { data, isLoading, isError, error } = useContractRead({
      address,
      abi: erc721NameAbi,
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

Erc721Name.displayName = "Erc721Name"

export { Erc721Name }
