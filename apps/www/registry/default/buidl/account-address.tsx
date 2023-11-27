"use client"

import { HTMLAttributes } from "react"
import { useAccount } from "wagmi"

import { Address, AddressProps } from "./address"

export interface AccountAddress
  extends Omit<HTMLAttributes<HTMLElement>, "children">,
    Omit<AddressProps, "address"> {
  unavailable?: any
}

export const AccountAddress = ({
  className,
  truncate,
  truncateAmount,
  linkEnabled,
  unavailable,
  ...props
}: AccountAddress) => {
  const { address } = useAccount()
  const Comp = unavailable || null
  if (!address) return Comp

  return (
    <Address
      address={address}
      className={className}
      linkEnabled={linkEnabled}
      truncate={truncate}
      truncateAmount={truncateAmount}
      {...props}
    />
  )
}
