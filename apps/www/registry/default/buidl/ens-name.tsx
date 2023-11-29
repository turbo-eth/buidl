"use client"

import * as React from "react"
import { useAccount, useEnsName } from "wagmi"

import { cn } from "@/lib/utils"
import { Address } from "@/registry/default/buidl/address"

import { Skeleton } from "../ui/skeleton"

interface EnsNameProps extends React.HTMLAttributes<HTMLSpanElement> {
  address?: `0x${string}`
}

const EnsName = React.forwardRef<HTMLSpanElement, EnsNameProps>(
  ({ address, className, ...props }, ref) => {
    const { address: connectedAddress } = useAccount()
    const selectedAddress = address ?? connectedAddress

    const { data, isLoading, isSuccess } = useEnsName({
      chainId: 1,
      address: selectedAddress,
      enabled: !!selectedAddress,
    })

    if (isSuccess && data) {
      return (
        <span ref={ref} className={className} {...props}>
          {data}
        </span>
      )
    }

    if (isLoading) {
      return <Skeleton className={cn("h-6 w-32", className)} {...props} />
    }

    return (
      <Address address={selectedAddress} className={className} {...props} />
    )
  }
)

EnsName.displayName = "EnsName"

export { EnsName }
