"use client"

import * as React from "react"
import { useChainId, useWaitForTransaction } from "wagmi"

import { cn } from "@/lib/utils"

const TransactionStatus = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    hash: `0x${string}`
    chainId?: number
  }
>(({ chainId: selectedChainId, children, className, hash, ...props }, ref) => {
  const currentChainId = useChainId()

  const { isLoading, isSuccess, isError, error } = useWaitForTransaction({
    hash: hash,
    chainId: selectedChainId ?? currentChainId,
  })

  return (
    <>
      <div
        ref={ref}
        className={cn("flex flex-col items-center", className)}
        {...props}
      >
        {(isLoading || isSuccess) && (
          <>
            {isLoading && "Processing transaction..."}
            {isSuccess && "Transaction successful!"}
            {children}
          </>
        )}
      </div>
      {isError && (
        <div className="break-words font-medium text-red-500">
          Error: {error?.message ?? "Error processing transaction"}
        </div>
      )}
    </>
  )
})

TransactionStatus.displayName = "TransactionStatus"

export { TransactionStatus }
