"use client"

import * as React from "react"
import { useAccount, useConnect, type Connector } from "wagmi"

import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "@/registry/default/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog"

const WalletConnect = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...props }, ref) => {
    const { address } = useAccount()
    const { connectors } = useConnect()

    if (address) {
      return <div className={className}>{address}</div>
    }

    return (
      <Dialog>
        <DialogTrigger>
          <Button ref={ref} className={className} {...props}>
            {children ?? "Connect Wallet"}
          </Button>
        </DialogTrigger>
        <DialogContent className="flex w-full flex-col">
          <DialogHeader>
            <DialogTitle>Connect Wallet</DialogTitle>
            <hr className="my-6" />
          </DialogHeader>
          <div className="flex max-w-full flex-col items-center gap-y-3 py-3">
            {connectors.map((connector, index) => (
              <WalletPreview key={index} connector={connector} />
            ))}
          </div>
        </DialogContent>
      </Dialog>
    )
  }
)

WalletConnect.displayName = "WalletConnect"

const WalletPreview = React.forwardRef<
  HTMLButtonElement,
  Omit<ButtonProps, "onClick"> & {
    connector: Connector
  }
>(({ className, connector, ...props }, ref) => {
  const { connect, isLoading, isError, error } = useConnect()

  const handleConnect = () => {
    connect({ connector })
  }

  return (
    <Button
      ref={ref}
      className={cn("flex h-16 w-full flex-col justify-center", className)}
      variant={"outline"}
      disabled={isLoading}
      onClick={handleConnect}
      {...props}
    >
      <h3 className="text-lg font-normal">{connector.name}</h3>
      {isLoading && (
        <p className="text-sm text-neutral-400">
          Accept the connection request in your wallet
        </p>
      )}
      {isError && (
        <div className="w-full items-center gap-x-2 overflow-auto break-words text-xs text-red-500">
          {error?.message ?? "Error while connecting wallet"}
        </div>
      )}
    </Button>
  )
})

WalletPreview.displayName = "WalletPreview"

export { WalletConnect, WalletPreview }
