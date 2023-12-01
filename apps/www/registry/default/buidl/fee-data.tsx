"use client"

import * as React from "react"
import { useFeeData } from "wagmi"

import { cn } from "@/lib/utils"
import { ErrorMessage } from "@/registry/default/buidl/error-message"
import { Skeleton } from "@/registry/default/ui/skeleton"

interface FeeDataProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  chainId?: number
  displayLoading?: boolean
  displayError?: boolean
}

const GasPrice = React.forwardRef<HTMLDivElement, FeeDataProps>(
  (
    {
      chainId,
      className,
      displayError = true,
      displayLoading = true,
      ...props
    },
    ref
  ) => {
    const { data, isLoading, isSuccess, isError, error } = useFeeData({
      chainId,
    })

    if (isLoading && displayLoading)
      return <Skeleton className={cn("h-6 w-16", className)} {...props} />

    if (isError && displayError)
      return (
        <ErrorMessage
          error={error}
          defaultErrorMessage="Error while fetching fee data"
          {...props}
        />
      )

    if (isSuccess) {
      return (
        <div ref={ref} className={className} {...props}>
          {data?.formatted.gasPrice}
        </div>
      )
    }

    return null
  }
)

GasPrice.displayName = "GasPrice"

const MaxPriorityFeePerGas = React.forwardRef<HTMLDivElement, FeeDataProps>(
  (
    {
      chainId,
      className,
      displayError = true,
      displayLoading = true,
      ...props
    },
    ref
  ) => {
    const { data, isLoading, isSuccess, isError, error } = useFeeData({
      chainId,
    })

    if (isLoading && displayLoading)
      return <Skeleton className={cn("h-6 w-16", className)} {...props} />

    if (isError && displayError) return <ErrorMessage error={error} />

    if (isSuccess) {
      return (
        <div ref={ref} className={className} {...props}>
          {data?.formatted.maxPriorityFeePerGas}
        </div>
      )
    }

    return null
  }
)

MaxPriorityFeePerGas.displayName = "MaxPriorityFeePerGas"

const MaxFeePerGas = React.forwardRef<HTMLDivElement, FeeDataProps>(
  (
    {
      chainId,
      className,
      displayError = true,
      displayLoading = true,
      ...props
    },
    ref
  ) => {
    const { data, isLoading, isSuccess, isError, error } = useFeeData({
      chainId,
    })

    if (isLoading && displayLoading)
      return <Skeleton className={cn("h-6 w-16", className)} {...props} />

    if (isError && displayError) return <ErrorMessage error={error} />

    if (isSuccess) {
      return (
        <div ref={ref} className={className} {...props}>
          {data?.formatted.maxFeePerGas}
        </div>
      )
    }

    return null
  }
)

MaxFeePerGas.displayName = "MaxFeePerGas"

export { GasPrice, MaxFeePerGas, MaxPriorityFeePerGas }
