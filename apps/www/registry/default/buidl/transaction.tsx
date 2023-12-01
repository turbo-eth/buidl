"use client"

import * as React from "react"
import { useTransaction } from "wagmi"

import { cn } from "@/lib/utils"
import { ErrorMessage } from "@/registry/default/buidl/error-message"
import { Skeleton } from "@/registry/default/ui/skeleton"

interface TransactionProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  hash: `0x${string}`
  chainId?: number
  displayLoading?: boolean
  displayError?: boolean
}

const TransactionBlockHash = React.forwardRef<HTMLDivElement, TransactionProps>(
  (
    {
      chainId,
      hash,
      className,
      displayError = true,
      displayLoading = true,
      ...props
    },
    ref
  ) => {
    const { data, isSuccess, isLoading, isError, error } = useTransaction({
      hash,
      chainId,
    })

    if (isLoading && displayLoading)
      return <Skeleton className={cn("h-6 w-[620px]", className)} {...props} />

    if (isError && displayError)
      return (
        <ErrorMessage
          defaultErrorMessage="Error while fetching transaction data"
          error={error}
          {...props}
        />
      )

    if (isSuccess) {
      return (
        <div ref={ref} className={className} {...props}>
          {data?.blockHash}
        </div>
      )
    }

    return null
  }
)

TransactionBlockHash.displayName = "TransactionBlockHash"

const TransactionBlockNumber = React.forwardRef<
  HTMLDivElement,
  TransactionProps
>(
  (
    {
      chainId,
      hash,
      className,
      displayError = true,
      displayLoading = true,
      ...props
    },
    ref
  ) => {
    const { data, isSuccess, isLoading, isError, error } = useTransaction({
      hash,
      chainId,
    })

    if (isLoading && displayLoading)
      return <Skeleton className={cn("h-6 w-24", className)} {...props} />

    if (isError && displayError)
      return (
        <ErrorMessage
          defaultErrorMessage="Error while fetching transaction data"
          error={error}
          {...props}
        />
      )

    if (isSuccess) {
      return (
        <div ref={ref} className={className} {...props}>
          {data?.blockNumber.toString()}
        </div>
      )
    }

    return null
  }
)

TransactionBlockNumber.displayName = "TransactionBlockNumber"

const TransactionFrom = React.forwardRef<HTMLDivElement, TransactionProps>(
  (
    {
      chainId,
      hash,
      className,
      displayError = true,
      displayLoading = true,
      ...props
    },
    ref
  ) => {
    const { data, isSuccess, isLoading, isError, error } = useTransaction({
      hash,
      chainId,
    })

    if (isLoading && displayLoading)
      return <Skeleton className={cn("h-6 w-[400px]", className)} {...props} />

    if (isError && displayError)
      return (
        <ErrorMessage
          defaultErrorMessage="Error while fetching transaction data"
          error={error}
          {...props}
        />
      )

    if (isSuccess) {
      return (
        <div ref={ref} className={className} {...props}>
          {data?.from}
        </div>
      )
    }

    return null
  }
)

TransactionFrom.displayName = "TransactionFrom"

const TransactionTo = React.forwardRef<HTMLDivElement, TransactionProps>(
  (
    {
      chainId,
      hash,
      className,
      displayError = true,
      displayLoading = true,
      ...props
    },
    ref
  ) => {
    const { data, isSuccess, isLoading, isError, error } = useTransaction({
      hash,
      chainId,
    })

    if (isLoading && displayLoading)
      return <Skeleton className={cn("h-6 w-[400px]", className)} {...props} />

    if (isError && displayError)
      return (
        <ErrorMessage
          defaultErrorMessage="Error while fetching transaction data"
          error={error}
          {...props}
        />
      )

    if (isSuccess) {
      return (
        <div ref={ref} className={className} {...props}>
          {data?.from}
        </div>
      )
    }

    return null
  }
)

TransactionTo.displayName = "TransactionTo"

const TransactionGas = React.forwardRef<HTMLDivElement, TransactionProps>(
  (
    {
      chainId,
      hash,
      className,
      displayError = true,
      displayLoading = true,
      ...props
    },
    ref
  ) => {
    const { data, isSuccess, isLoading, isError, error } = useTransaction({
      hash,
      chainId,
    })

    if (isLoading && displayLoading)
      return <Skeleton className={cn("h-6 w-24", className)} {...props} />

    if (isError && displayError)
      return (
        <ErrorMessage
          defaultErrorMessage="Error while fetching transaction data"
          error={error}
          {...props}
        />
      )

    if (isSuccess) {
      return (
        <div ref={ref} className={className} {...props}>
          {data?.gas.toString()}
        </div>
      )
    }

    return null
  }
)

TransactionGas.displayName = "TransactionGas"

const TransactionGasPrice = React.forwardRef<HTMLDivElement, TransactionProps>(
  (
    {
      chainId,
      hash,
      className,
      displayError = true,
      displayLoading = true,
      ...props
    },
    ref
  ) => {
    const { data, isSuccess, isLoading, isError, error } = useTransaction({
      hash,
      chainId,
    })

    if (isLoading && displayLoading)
      return <Skeleton className={cn("h-6 w-12", className)} {...props} />

    if (isError && displayError)
      return (
        <ErrorMessage
          defaultErrorMessage="Error while fetching transaction data"
          error={error}
          {...props}
        />
      )

    if (isSuccess) {
      return (
        <div ref={ref} className={className} {...props}>
          {data?.gasPrice?.toString()}
        </div>
      )
    }

    return null
  }
)

TransactionGasPrice.displayName = "TransactionGasPrice"

const TransactionNonce = React.forwardRef<HTMLDivElement, TransactionProps>(
  (
    {
      chainId,
      hash,
      className,
      displayError = true,
      displayLoading = true,
      ...props
    },
    ref
  ) => {
    const { data, isSuccess, isLoading, isError, error } = useTransaction({
      hash,
      chainId,
    })

    if (isLoading && displayLoading)
      return <Skeleton className={cn("h-6 w-16", className)} {...props} />

    if (isError && displayError)
      return (
        <ErrorMessage
          defaultErrorMessage="Error while fetching transaction data"
          error={error}
          {...props}
        />
      )

    if (isSuccess) {
      return (
        <div ref={ref} className={className} {...props}>
          {data?.nonce.toString()}
        </div>
      )
    }
    return null
  }
)

TransactionNonce.displayName = "TransactionNonce"

export {
  TransactionBlockHash,
  TransactionBlockNumber,
  TransactionFrom,
  TransactionGas,
  TransactionGasPrice,
  TransactionNonce,
  TransactionTo,
}
