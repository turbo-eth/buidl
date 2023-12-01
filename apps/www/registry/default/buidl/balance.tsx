"use client"

import * as React from "react"
import { useAccount, useBalance, type Address } from "wagmi"

import { cn } from "@/lib/utils"
import { ErrorMessage } from "@/registry/default/buidl/error-message"
import { Skeleton } from "@/registry/default/ui/skeleton"

interface BalanceProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  address?: Address
  chainId?: number
  decimals?: number
  displayLoading?: boolean
  displayError?: boolean
}

function trimFormattedBalance(balance: string | undefined, decimals = 4) {
  if (!balance) {
    return "0"
  }
  const [integer, decimal] = balance.split(".")
  if (!decimal) return integer

  const trimmedDecimal = decimal.slice(0, decimals)
  return `${integer}.${trimmedDecimal}`
}

const Balance = React.forwardRef<HTMLDivElement, BalanceProps>(
  (
    {
      address,
      chainId,
      className,
      decimals = 4,
      displayError = true,
      displayLoading = true,
      ...props
    },
    ref
  ) => {
    const { address: connectedAddress } = useAccount()

    const selectedAddress = address ? address : connectedAddress

    const { data, isLoading, isSuccess, isError, error } = useBalance({
      chainId,
      address: selectedAddress,
    })

    if ((isLoading && displayLoading) || !selectedAddress)
      return <Skeleton className={cn("h-6 w-24", className)} {...props} />

    if (isError && displayError)
      return (
        <ErrorMessage
          ref={ref}
          error={error}
          defaultErrorMessage="Error while fetching fee data"
          {...props}
        />
      )

    if (isSuccess) {
      return (
        <div ref={ref} className={className} {...props}>
          {trimFormattedBalance(data?.formatted, decimals)}
        </div>
      )
    }

    return null
  }
)

Balance.displayName = "Balance"

export { Balance }
