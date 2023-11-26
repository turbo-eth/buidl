import * as React from "react"
import { useAccount } from "wagmi"

import { BlockieProps } from "./blockie"
import { EnsAvatar } from "./ens-avatar"

export interface AccountEnNameProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "children">,
    Omit<BlockieProps, "address"> {
  unavailable?: any
}

export const AccountEnName = ({
  className,
  unavailable,
  variant,
  size,
  ...props
}: AccountEnNameProps) => {
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
