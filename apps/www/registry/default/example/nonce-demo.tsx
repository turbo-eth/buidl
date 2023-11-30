import { IsWalletConnected } from "@/registry/default/buidl/is-wallet-connected"
import { IsWalletDisconnected } from "@/registry/default/buidl/is-wallet-disconnected"
import { Nonce } from "@/registry/default/buidl/nonce"
import { WalletConnect } from "@/registry/default/buidl/wallet-connect"

export default function NonceDemo() {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <h3 className="text-lg font-bold">Default</h3>
      <IsWalletConnected>
        <Nonce />
      </IsWalletConnected>
      <IsWalletDisconnected>
        <WalletConnect />
      </IsWalletDisconnected>

      <h3 className="text-lg font-bold">Prop ChainId (ethereum)</h3>
      <IsWalletConnected>
        <Nonce chainId={1} />
      </IsWalletConnected>
      <IsWalletDisconnected>
        <WalletConnect />
      </IsWalletDisconnected>

      <h3 className="text-lg font-bold">Prop Address</h3>
      <Nonce address="0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31" />
    </div>
  )
}
