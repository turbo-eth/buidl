"use client"

import * as React from "react"
import { useChainId, useWaitForTransaction } from "wagmi"

import { cn } from "@/lib/utils"
import { Skeleton } from "@/registry/default/ui/skeleton"

const ErrorMessage = ({ error }: { error: Error | null }) => {
  return (
    <div className={cn("break-words text-sm font-medium text-red-500")}>
      {error?.message ?? "Error while fetching ERC721 data"}
    </div>
  )
}

const TransactionStatus = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    hash: `0x${string}`
    chainId?: number
  }
>(({ chainId: selectedChainId, children, className, hash, ...props }, ref) => {
  const currentChainId = useChainId()

  const { isLoading, isSuccess, isError, error, isFetching } =
    useWaitForTransaction({
      hash: hash,
      chainId: selectedChainId ?? currentChainId,
    })

  if (isFetching)
    return <Skeleton className={cn("h-6 w-52", className)} {...props} />

  if (isError) return <ErrorMessage error={error} />

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
})

TransactionStatus.displayName = "TransactionStatus"

export { TransactionStatus }
