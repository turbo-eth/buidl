"use client"

import * as React from "react"
import { useBlockNumber } from "wagmi"

import { cn } from "@/lib/utils"
import { ErrorMessage } from "@/registry/default/buidl/error-message"
import { Skeleton } from "@/registry/default/ui/skeleton"

interface BlockNumberProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  chainId?: number
  displayLoading?: boolean
  displayError?: boolean
}

const BlockNumber = React.forwardRef<HTMLDivElement, BlockNumberProps>(
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
    const { data, isLoading, isSuccess, isError, error } = useBlockNumber({
      chainId,
    })

    if (isLoading && displayLoading)
      return <Skeleton className={cn("h-6 w-24", className)} {...props} />

    if (isError && displayError)
      return (
        <ErrorMessage
          defaultErrorMessage="Error while fetching block number data"
          error={error}
        />
      )

    if (isSuccess) {
      return (
        <div ref={ref} className={className} {...props}>
          {data?.toString()}
        </div>
      )
    }

    return null
  }
)

BlockNumber.displayName = "BlockNumber"

export { BlockNumber }
