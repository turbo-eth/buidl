"use client"

import * as React from "react"
import { useEnsAddress } from "wagmi"

import { cn } from "@/lib/utils"
import { Address, AddressProps } from "@/registry/default/buidl/address"
import { ErrorMessage } from "@/registry/default/buidl/error-message"
import { Skeleton } from "@/registry/default/ui/skeleton"

interface EnsAddressProps extends Omit<AddressProps, "address"> {
  name: string
  displayLoading?: boolean
  displayError?: boolean
}

const EnsAddress = React.forwardRef<HTMLDivElement, EnsAddressProps>(
  (
    { name, className, displayLoading = true, displayError = true, ...props },
    ref
  ) => {
    const { data, isLoading, isSuccess, isError, error } = useEnsAddress({
      chainId: 1,
      name,
    })

    if (displayError && isError) {
      return (
        <ErrorMessage
          defaultErrorMessage="Error while fetching ens address"
          error={error}
          {...props}
        />
      )
    }

    if (displayLoading && (isLoading || !data)) {
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
