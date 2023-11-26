import * as React from "react"
import { useAccount } from "wagmi"

import { Blockie, BlockieProps } from "./blockie"

export interface AccountBlockie
  extends Omit<React.HTMLAttributes<HTMLElement>, "children">,
    Omit<BlockieProps, "address"> {
  unavailable?: any
}

export const AccountBlockie = ({
  className,
  unavailable,
  variant,
  size,
  ...props
}: AccountBlockie) => {
  const { address } = useAccount()
  const Comp = unavailable || null
  if (!address) return Comp

  return (
    <Blockie
      address={address}
      variant={variant}
      size={size}
      className={className}
    />
  )
}
