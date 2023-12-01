"use client"

import * as React from "react"
import {
  useAccount,
  useChainId,
  usePublicClient,
  useQuery,
  type PublicClient,
} from "wagmi"

import { cn } from "@/lib/utils"
import { ErrorMessage } from "@/registry/default/buidl/error-message"
import { Skeleton } from "@/registry/default/ui/skeleton"

interface NonceProps extends React.HTMLAttributes<HTMLDivElement> {
  address?: `0x${string}`
  chainId?: number
  displayLoading?: boolean
  displayError?: boolean
}

const useNonce = ({
  address,
  publicClient,
}: Pick<NonceProps, "address"> & { publicClient: PublicClient }) => {
  return useQuery(["wallet-nonce", address, publicClient.chain.id], {
    queryFn: () => {
      if (!address) return
      return publicClient?.getTransactionCount({
        address,
      })
    },
    enabled: !!address && !!publicClient,
  })
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
    const connectedChainId = useChainId()
    const selectedChainId = chainId ?? connectedChainId

    const publicClient = usePublicClient({
      chainId: selectedChainId,
    })

    const { address: connectedAddress } = useAccount()
    const selectedAddress = address ?? connectedAddress

    const { data, isLoading, isError, error } = useNonce({
      publicClient,
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
