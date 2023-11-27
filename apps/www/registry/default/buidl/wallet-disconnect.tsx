"use client"

import * as React from "react"
import { useDisconnect } from "wagmi"

import { cn } from "@/lib/utils"

import { Button, type ButtonProps } from "../ui/button"

export interface WalletDisconnectProps extends ButtonProps {
  label?: string
}

export const WalletDisconnect = ({
  children,
  className,
  size,
  variant,
  label = "Disconnect",
}: WalletDisconnectProps) => {
  const classes = cn(className)
  const { disconnect } = useDisconnect()
  return (
    <Button
      className={classes}
      onClick={() => disconnect()}
      size={size}
      variant={variant}
    >
      {label}
    </Button>
  )
}
