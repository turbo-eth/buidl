import { IsWalletConnected } from "@/registry/default/buidl/is-wallet-connected"
import { IsWalletDisconnected } from "@/registry/default/buidl/is-wallet-disconnected"
import { WalletConnect } from "@/registry/default/buidl/wallet-connect"
import { WalletDisconnect } from "@/registry/default/buidl/wallet-disconnect"

export default function IsWalletDisconnectedDemo() {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <IsWalletDisconnected>
        Wallet is disconnected
        <WalletConnect />
      </IsWalletDisconnected>
      <IsWalletConnected>
        <WalletDisconnect />
      </IsWalletConnected>
    </div>
  )
}
