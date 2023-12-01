import { EnsAvatar } from "@/registry/default/buidl/ens-avatar"
import { IsWalletConnected } from "@/registry/default/buidl/is-wallet-connected"

const ADDRESS_EXAMPLE = "0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31"

export default function EnsAvatarDemo() {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <h3 className="text-lg font-bold">Default</h3>
      <EnsAvatar address={ADDRESS_EXAMPLE} />

      <h3 className="text-lg font-bold">Connected Address</h3>
      <IsWalletConnected>
        <EnsAvatar />
      </IsWalletConnected>
      {/* <IsWalletDisconnected>
        <WalletConnect />
      </IsWalletDisconnected> */}

      <h3 className="text-lg font-bold">Input ENS name (vitalik.eth)</h3>
      <EnsAvatar name="vitalik.eth" />

      <h3 className="text-lg font-bold">Small</h3>
      <EnsAvatar size={"sm"} address={ADDRESS_EXAMPLE} />

      <h3 className="text-lg font-bold">Large</h3>
      <EnsAvatar size={"lg"} address={ADDRESS_EXAMPLE} />

      <h3 className="text-lg font-bold">Curved</h3>
      <EnsAvatar variant={"curved"} address={ADDRESS_EXAMPLE} />
    </div>
  )
}
