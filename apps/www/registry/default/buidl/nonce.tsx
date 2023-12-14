"use client"

import * as React from "react"
import { useQuery } from "@tanstack/react-query"
import type { PublicClient } from "viem"
import { useAccount, useChainId, useTransactionCount } from "wagmi"

import { cn } from "@/lib/utils"
import { ErrorMessage } from "@/registry/default/buidl/error-message"
import { Skeleton } from "@/registry/default/ui/skeleton"

interface NonceProps extends React.HTMLAttributes<HTMLDivElement> {
  address?: `0x${string}`
  chainId?: number
  displayLoading?: boolean
  displayError?: boolean
}

const Nonce = React.forwardRef<HTMLDivElement, NonceProps>(
  (
    {
      className,
      address,
      chainId,
      displayLoading = true,
      displayError = true,
      ...props
    },
    ref
  ) => {
    const { address: connectedAddress } = useAccount()
    const selectedAddress = address ?? connectedAddress
     const {data, isLoading, isError, error} = useTransactionCount({
      chainId,
      address: selectedAddress,
    })


    if (displayLoading && (isLoading || !selectedAddress)) {
      return <Skeleton className={cn("h-6 w-14", className)} {...props} />
    }

    if (displayError && isError) {
      return (
        <ErrorMessage
          defaultErrorMessage="Error while fetching nonce"
          error={error as Error | null}
          {...props}
        />
      )
    }

    return (
      <div ref={ref} className={className} {...props}>
        {data}
      </div>
    )
  }
)

Nonce.displayName = "Nonce"

export { Nonce }
