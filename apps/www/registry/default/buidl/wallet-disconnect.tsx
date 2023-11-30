"use client"

import * as React from "react"
import { useDisconnect } from "wagmi"

import { Button, type ButtonProps } from "@/registry/default/ui/button"

const WalletDisconnect = React.forwardRef<
  HTMLButtonElement,
  Omit<ButtonProps, "onClick">
>(({ children, ...props }, ref) => {
  const { disconnect } = useDisconnect()

  return (
    <Button
      ref={ref}
      onClick={() => {
        disconnect()
      }}
      {...props}
    >
      {children ?? "Disconnect"}
    </Button>
  )
})

WalletDisconnect.displayName = "WalletDisconnect"

export { WalletDisconnect }
