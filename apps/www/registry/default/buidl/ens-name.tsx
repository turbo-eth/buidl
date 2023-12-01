"use client"

import * as React from "react"
import { useAccount, useEnsName } from "wagmi"

import { cn } from "@/lib/utils"
import { Address } from "@/registry/default/buidl/address"
import { Skeleton } from "@/registry/default/ui/skeleton"

interface EnsNameProps extends React.HTMLAttributes<HTMLDivElement> {
  address?: `0x${string}`
}

const EnsName = React.forwardRef<HTMLDivElement, EnsNameProps>(
  ({ address, className, ...props }, ref) => {
    const { address: connectedAddress } = useAccount()
    const selectedAddress = address ?? connectedAddress

    const { data, isLoading, isSuccess } = useEnsName({
      chainId: 1,
      address: selectedAddress,
      enabled: !!selectedAddress,
    })

    if (isLoading || !selectedAddress) {
      return <Skeleton className={cn("h-6 w-32", className)} {...props} />
    }

    if (isSuccess && data) {
      return (
        <div ref={ref} className={className} {...props}>
          {data}
        </div>
      )
    }

    return (
      <Address address={selectedAddress} className={className} {...props} />
    )
  }
)

EnsName.displayName = "EnsName"

export { EnsName }
