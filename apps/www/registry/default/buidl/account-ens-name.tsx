"use client"

import * as React from "react"
import { useAccount } from "wagmi"

import { BlockieProps } from "./blockie"
import { EnsName } from "./ens-name"

export interface AccountEnsNameProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "children">,
    Omit<BlockieProps, "address"> {
  unavailable?: any
}

export const AccountEnsName = ({
  className,
  unavailable,
  variant,
  size,
  ...props
}: AccountEnsNameProps) => {
  const { address } = useAccount()
  const Comp = unavailable || null
  if (!address) return Comp

  return <EnsName address={address} className={className} />
}
