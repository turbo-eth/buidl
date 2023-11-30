import { EnsName } from "@/registry/default/buidl/ens-name"
import { IsWalletConnected } from "@/registry/default/buidl/is-wallet-connected"
import { IsWalletDisconnected } from "@/registry/default/buidl/is-wallet-disconnected"
import { WalletConnect } from "@/registry/default/buidl/wallet-connect"

export default function EnsNameDemo() {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <h3 className="text-lg font-bold">Default</h3>
      <EnsName address="0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31" />

      <h3 className="text-lg font-bold">Fallback Address</h3>
      <EnsName address="0x4596039A69602b115752006Ef8425f43d6E80a6f" />

      <h3 className="text-lg font-bold">Connected Address</h3>
      <IsWalletConnected>
        <EnsName />
      </IsWalletConnected>
      <IsWalletDisconnected>
        <WalletConnect />
      </IsWalletDisconnected>
    </div>
  )
}
