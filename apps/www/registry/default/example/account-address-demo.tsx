import { AccountAddress } from "@/registry/default/buidl/account-address"
import { IsWalletConnected } from "@/registry/default/buidl/is-wallet-connected"
import { IsWalletDisconnected } from "@/registry/default/buidl/is-wallet-disconnected"
import { WalletConnect } from "@/registry/default/buidl/wallet-connect"

export default function AccountAddressDemo() {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <IsWalletDisconnected>
        <WalletConnect />
      </IsWalletDisconnected>
      <IsWalletConnected>
        <h3 className="text-lg font-bold">Default</h3>
        <AccountAddress />
        <h3 className="text-lg font-bold">Link</h3>
        <AccountAddress linkEnabled />
        <h3 className="text-lg font-bold">Copy</h3>
        <AccountAddress copyEnabled />
        <h3 className="text-lg font-bold">Truncated</h3>
        <AccountAddress truncate />
        <h3 className="text-lg font-bold">All</h3>
        <AccountAddress linkEnabled copyEnabled truncate />
      </IsWalletConnected>
    </div>
  )
}
