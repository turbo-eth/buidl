import { AccountAddress } from "@/registry/default/buidl/account-address"
import { IsWalletConnected } from "@/registry/default/buidl/is-wallet-connected"
import { IsWalletDisconnected } from "@/registry/default/buidl/is-wallet-disconnected"
import { WalletConnect } from "@/registry/default/buidl/wallet-connect"
import { WalletDisconnect } from "@/registry/default/buidl/wallet-disconnect"

export default function WalletDisconnectDemo() {
  return (
    <>
      <IsWalletConnected>
        <div className="flex flex-col gap-y-2">
          <AccountAddress />
          <WalletDisconnect />
        </div>
      </IsWalletConnected>
      <IsWalletDisconnected>
        <WalletConnect />
      </IsWalletDisconnected>
    </>
  )
}
