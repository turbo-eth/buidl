"use client"

import * as React from "react"
import { useBlockNumber } from "wagmi"

import { cn } from "@/lib/utils"
import { Skeleton } from "@/registry/default/ui/skeleton"

interface BlockNumberProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  chainId?: number
  displayLoading?: boolean
  displayError?: boolean
}

const ErrorMessage = ({ error }: { error: Error | null }) => {
  return (
    <div className={cn("break-words text-sm font-medium text-red-500")}>
      {error?.message ?? "Error while fetching block number data"}
    </div>
  )
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

    if (isError && displayError) return <ErrorMessage error={error} />

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
