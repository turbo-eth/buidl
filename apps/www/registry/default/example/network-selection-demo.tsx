import { IsWalletConnected } from "@/registry/default/buidl/is-wallet-connected"
import { IsWalletDisconnected } from "@/registry/default/buidl/is-wallet-disconnected"
import { WalletConnect } from "@/registry/default/buidl/wallet-connect"

import { NetworkSelection } from "../buidl/network-selection"

export default function NetworkSelectionDemo() {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <IsWalletConnected>
        <NetworkSelection />
      </IsWalletConnected>
      <IsWalletDisconnected>
        <WalletConnect />
      </IsWalletDisconnected>
    </div>
  )
}
