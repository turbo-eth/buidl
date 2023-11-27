import { AccountAddress } from "../buidl/account-address"
import { IsWalletConnected } from "../buidl/is-wallet-connected"
import { IsWalletDisconnected } from "../buidl/is-wallet-disconnected"
import { RainbowKitWalletConnect } from "../buidl/rainbowkit-wallet-connect"
import { WalletConnect } from "../buidl/wallet-connect"

export default function AddressDemo() {
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
