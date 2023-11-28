"use client"

import * as React from "react"
import { Copy } from "lucide-react"
import { useNetwork, type Address as AddressType } from "wagmi"
import { mainnet } from "wagmi/chains"

import { cn } from "@/lib/utils"
import { toast } from "@/registry/default/ui/use-toast"

export interface AddressProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
  address: AddressType
  truncate?: boolean
  truncateAmount?: number
  link?: boolean
  copy?: boolean
}

const AddressCopy = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & {
    address: AddressType
  }
>(({ address, className, children, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn("flex cursor-pointer items-center gap-x-2", className)}
      onClick={async () => {
        await navigator.clipboard.writeText(address)
        toast({
          title: "Copied address",
          description: "The address has been copied to your clipboard.",
        })
      }}
      {...props}
    >
      {children ?? address}
      <span className="sr-only">Copy address</span>
      <Copy size={12} />
    </span>
  )
})

AddressCopy.displayName = "AddressCopy"

const AddressLink = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & {
    address: AddressType
  }
>(({ address, className, children, ...props }, ref) => {
  const { chain: currentChain } = useNetwork()

  // Use mainnet as default chain
  const chain = currentChain ?? mainnet

  return (
    <span
      ref={ref}
      className={cn(
        "cursor-pointer underline-offset-2 hover:underline",
        className
      )}
      {...props}
    >
      {chain.blockExplorers?.default.url ? (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`${chain.blockExplorers?.default.url}/address/${address}`}
        >
          {children ?? address}
        </a>
      ) : (
        <>{children ?? address}</>
      )}
    </span>
  )
})

AddressLink.displayName = "AddressLink"

const Address = React.forwardRef<HTMLElement, AddressProps>(
  (
    { address, className, truncate, truncateAmount = 4, link, copy, ...props },
    ref
  ) => {
    const formattedAddress = React.useMemo(
      () =>
        truncate
          ? `${address.slice(0, truncateAmount + 2)}...${address.slice(
              -Number(truncateAmount)
            )}`
          : address,
      [address, truncate, truncateAmount]
    )

    if (link) {
      return (
        <AddressLink
          ref={ref}
          address={address}
          className={className}
          {...props}
        >
          {copy ? (
            <AddressCopy address={address}>{formattedAddress}</AddressCopy>
          ) : (
            <>{formattedAddress}</>
          )}
        </AddressLink>
      )
    }

    if (copy) {
      return (
        <AddressCopy ref={ref} address={address} {...props}>
          {formattedAddress}
        </AddressCopy>
      )
    }

    return (
      <span ref={ref} className={className} {...props}>
        {formattedAddress}
      </span>
    )
  }
)

Address.displayName = "Address"

export { Address, AddressCopy, AddressLink }
