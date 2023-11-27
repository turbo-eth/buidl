import { AccountBalance } from "@/registry/default/buidl/account-balance"
import { IsWalletConnected } from "@/registry/default/buidl/is-wallet-connected"
import { IsWalletDisconnected } from "@/registry/default/buidl/is-wallet-disconnected"
import { WalletConnect } from "@/registry/default/buidl/wallet-connect"

export default function AccountBalanceDemo() {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <IsWalletDisconnected>
        <WalletConnect />
      </IsWalletDisconnected>
      <IsWalletConnected>
        <h3 className="text-lg font-bold">Default</h3>
        <AccountBalance />
        <h3 className="text-lg font-bold">Custom Decimals</h3>
        <AccountBalance decimals={2} />
      </IsWalletConnected>
    </div>
  )
}
