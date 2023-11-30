import { Balance } from "@/registry/default/buidl/balance"
import { IsWalletConnected } from "@/registry/default/buidl/is-wallet-connected"
import { IsWalletDisconnected } from "@/registry/default/buidl/is-wallet-disconnected"
import { WalletConnect } from "@/registry/default/buidl/wallet-connect"

export default function BalanceDemo() {
  return (
    <div className="flex flex-col gap-y-3">
      <h2 className="text-lg font-bold">Balance</h2>
      <div>
        <h3 className="mb-1 text-base font-bold">Connected address balance:</h3>
        <IsWalletConnected>
          <Balance />
        </IsWalletConnected>
        <IsWalletDisconnected>
          <WalletConnect />
        </IsWalletDisconnected>
      </div>
      <div>
        <h3 className="text-base font-bold">Prop address balance</h3>
        <Balance
          address="0x0000000000000000000000000000000000000000"
          className="mt-1"
        />
      </div>
    </div>
  )
}
