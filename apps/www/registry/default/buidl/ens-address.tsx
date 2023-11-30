"use client"

import * as React from "react"
import { useEnsAddress } from "wagmi"

import { cn } from "@/lib/utils"
import { Address, AddressProps } from "@/registry/default/buidl/address"
import { Skeleton } from "@/registry/default/ui/skeleton"

const ErrorMessage = ({ error }: { error: Error | null }) => {
  return (
    <div className={cn("break-words text-sm font-medium text-red-500")}>
      {error?.message ?? "Error while fetching fee data"}
    </div>
  )
}

interface EnsAddressProps extends Omit<AddressProps, "address"> {
  name: string
}

const EnsAddress = React.forwardRef<HTMLDivElement, EnsAddressProps>(
  ({ name, className, ...props }, ref) => {
    const { data, isLoading, isSuccess, isError, error } = useEnsAddress({
      chainId: 1,
      name,
    })

    if (isError) {
      return <ErrorMessage error={error} />
    }

    if (isLoading || !data) {
      return (
        <Skeleton
          className={cn(
            "h-6",
            props.truncate ? "w-32" : "w-[420px]",
            className
          )}
          {...props}
        />
      )
    }

    if (isSuccess && data) {
      return (
        <Address ref={ref} address={data} className={className} {...props} />
      )
    }

    return null
  }
)

EnsAddress.displayName = "EnsAddress"

export { EnsAddress }
