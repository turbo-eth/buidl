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
import { Skeleton } from "@/registry/default/ui/skeleton"

interface NonceProps extends React.HTMLAttributes<HTMLDivElement> {
  address?: `0x${string}`
  chainId?: number
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
  ({ className, address, chainId, ...props }, ref) => {
    const connectedChainId = useChainId()
    const selectedChainId = chainId ?? connectedChainId

    const publicClient = usePublicClient({
      chainId: selectedChainId,
    })

    const { address: connectedAddress } = useAccount()
    const selectedAddress = address ?? connectedAddress

    const { data, isLoading } = useNonce({
      publicClient,
      address: selectedAddress,
    })

    if (isLoading) {
      return <Skeleton className={cn("h-6 w-14", className)} {...props} />
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
