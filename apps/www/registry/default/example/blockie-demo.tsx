import { Blockie } from "@/registry/default/buidl/blockie"
import { IsWalletConnected } from "@/registry/default/buidl/is-wallet-connected"
import { IsWalletDisconnected } from "@/registry/default/buidl/is-wallet-disconnected"
import { WalletConnect } from "@/registry/default/buidl/wallet-connect"

const ADDRESS_EXAMPLE = "0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31"

export default function BlockieDemo() {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <h3 className="text-lg font-bold">Default</h3>
      <Blockie address={ADDRESS_EXAMPLE} />

      <h3 className="text-lg font-bold">Connected Address</h3>
      <IsWalletConnected>
        <Blockie />
      </IsWalletConnected>
      <IsWalletDisconnected>
        <WalletConnect />
      </IsWalletDisconnected>

      <h3 className="text-lg font-bold">Small</h3>
      <Blockie size={"sm"} address={ADDRESS_EXAMPLE} />
      <h3 className="text-lg font-bold">Large</h3>
      <Blockie size={"lg"} address={ADDRESS_EXAMPLE} />
      <h3 className="text-lg font-bold">Curved</h3>
      <Blockie variant={"curved"} size={"lg"} address={ADDRESS_EXAMPLE} />
    </div>
  )
}
