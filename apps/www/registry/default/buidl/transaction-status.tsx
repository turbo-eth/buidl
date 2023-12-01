"use client"

import * as React from "react"
import { useChainId, useWaitForTransaction } from "wagmi"

import { cn } from "@/lib/utils"
import { ErrorMessage } from "@/registry/default/buidl/error-message"
import { Skeleton } from "@/registry/default/ui/skeleton"

const TransactionStatus = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    hash: `0x${string}`
    chainId?: number
    displayLoading?: boolean
    displayError?: boolean
  }
>(
  (
    {
      chainId: selectedChainId,
      children,
      className,
      hash,
      displayLoading = true,
      displayError = true,
      ...props
    },
    ref
  ) => {
    const currentChainId = useChainId()

    const { isLoading, isSuccess, isError, error, isFetching } =
      useWaitForTransaction({
        hash: hash,
        chainId: selectedChainId ?? currentChainId,
      })

    if (displayLoading && isFetching)
      return <Skeleton className={cn("h-6 w-52", className)} {...props} />

    if (displayError && isError)
      return (
        <ErrorMessage
          defaultErrorMessage="Error while fetching transaction status data"
          error={error}
          {...props}
        />
      )

    return (
      <div
        ref={ref}
        className={cn("flex flex-col items-center", className)}
        {...props}
      >
        {isLoading && "Processing transaction..."}
        {isSuccess && "Transaction successful!"}
        {children}
      </div>
    )
  }
)

TransactionStatus.displayName = "TransactionStatus"

export { TransactionStatus }
