"use client"

import * as React from "react"
import { useAccount } from "wagmi"

import { BlockieProps } from "./blockie"
import { EnsAvatar } from "./ens-avatar"

export interface AccountEnsAvatarProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "children">,
    Omit<BlockieProps, "address"> {
  unavailable?: any
}

export const AccountEnsAvatar = ({
  className,
  unavailable,
  variant,
  size,
  ...props
}: AccountEnsAvatarProps) => {
  const { address } = useAccount()
  const Comp = unavailable || null
  if (!address) return Comp

  return (
    <EnsAvatar
      address={address}
      variant={variant}
      size={size}
      className={className}
    />
  )
}
