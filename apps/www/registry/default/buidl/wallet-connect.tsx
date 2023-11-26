import * as React from "react"
import Image from "next/image"
import { connect } from "@wagmi/core"
import { CoinbaseWalletConnector } from "@wagmi/core/dist/connectors/coinbaseWallet"
import { MetaMaskConnector } from "@wagmi/core/dist/connectors/metaMask"
import { ChevronRight } from "lucide-react"

import { connectors } from "@/config/connectors"
import { cn } from "@/lib/utils"
import { WagmiProvider } from "@/components/providers/wagmi-provider"

import { Button } from "../ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"

type WalletConnect = React.HTMLAttributes<HTMLElement>

export const WalletConnect = ({ children, className }: WalletConnect) => {
  console.log(connectors, "connectors")
  const classes = cn(className)
  const [isError, setIsError] = React.useState()
  const [selectedConnectorId, setSelectedConnectorId] = React.useState<
    string | undefined
  >()

  const handleReset = () => {
    setSelectedConnectorId(undefined)
    setIsError(undefined)
  }

  const handleBack = () => {
    setSelectedConnectorId(undefined)
    setIsError(undefined)
  }

  return (
    <Dialog onOpenChange={handleReset}>
      <DialogTrigger>
        <Button className={classes}>Connect Wallet</Button>
      </DialogTrigger>
      <DialogContent>
        <WagmiProvider>
          <DialogHeader>
            <DialogTitle>Connect Wallet</DialogTitle>
            <hr className="my-6 mb-10" />
            {selectedConnectorId && (
              <>
                <div className="flex items-center gap-x-2">
                  <ChevronRight />
                  <span className="text-xs">Back</span>
                </div>
                <WalletConnectionStatus
                  connector={connectors.find(
                    (connector) => connector.id === selectedConnectorId
                  )}
                  selectedConnectorId={selectedConnectorId}
                  isError={isError}
                  setIsError={setIsError}
                />
              </>
            )}
            {!selectedConnectorId && (
              <div className="mt-6 grid gap-y-3 py-3">
                {connectors.map((connector, index) => (
                  <WalletPreview
                    key={index}
                    connector={connector}
                    selectConnector={() =>
                      setSelectedConnectorId(connector?.id)
                    }
                    setIsError={setIsError}
                  />
                ))}
              </div>
            )}
          </DialogHeader>
        </WagmiProvider>
      </DialogContent>
    </Dialog>
  )
}

const WalletIdToIcon = {
  metaMask: "/images/wallets/metaMask.svg",
  coinbaseWallet: "/images/wallets/coinbaseWallet.webp",
} as {
  [key: string]: string
}

type WalletPreview = React.HTMLAttributes<HTMLElement> & {
  connector: MetaMaskConnector | CoinbaseWalletConnector
  selectConnector: () => void
  setIsError: (error: any) => void
}

export const WalletPreview = ({
  className,
  connector,
  selectConnector,
  setIsError,
}: WalletPreview) => {
  const classes = cn(
    "flex cursor-pointer items-center gap-x-2 rounded-md border-2 p-2 hover:bg-neutral-100",
    className
  )
  const WalletImage = WalletIdToIcon[connector.id]
  const handleConnect = async () => {
    selectConnector()
    try {
      await connect({
        connector: connector,
      })
    } catch (error) {
      console.log(error)
      setIsError(error)
    }
  }

  return (
    <div className={classes} onClick={handleConnect}>
      <Image
        alt={`${connector.name}`}
        width={18}
        height={18}
        src={WalletImage}
        className="h-8 w-8"
      />
      <h3 className="text-lg font-normal">{connector.name}</h3>
    </div>
  )
}

type WalletConnectionStatus = React.HTMLAttributes<HTMLElement> & {
  connector?: MetaMaskConnector | CoinbaseWalletConnector
  selectedConnectorId: string
  isError?: boolean
  setIsError: (error: any) => void
}

export const WalletConnectionStatus = ({
  className,
  connector,
  selectedConnectorId,
  isError,
  setIsError,
}: WalletConnectionStatus) => {
  const classes = cn(className)
  const WalletImage = WalletIdToIcon[connector?.id || "default"]

  const handleConnect = async () => {
    try {
      if (!connector) return
      await connect({
        connector: connector,
      })
    } catch (error) {
      console.log(error)
      setIsError(error)
    }
  }

  return (
    <div className="flex flex-col items-center gap-y-2 py-10">
      <Image
        alt={`${selectedConnectorId}`}
        width={48}
        height={48}
        src={WalletIdToIcon[selectedConnectorId]}
        className="h-16 w-16"
      />
      <h3 className="text-lg font-medium uppercase">{selectedConnectorId}</h3>
      {isError && (
        <div className="flex items-center gap-x-2 text-red-500">
          <span className="text-xs">Error connecting to wallet</span>
        </div>
      )}
      <p className="text-xs">Accept the connection request in your wallet</p>
      <Button size="sm" rounded="xl" className="mt-2" onClick={handleConnect}>
        <Icons.retry className="mr-2" />
        <span className="">Try Again</span>
      </Button>
    </div>
  )
}
