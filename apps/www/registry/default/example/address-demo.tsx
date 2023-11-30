import {
  Address,
  AddressCopy,
  AddressLink,
} from "@/registry/default/buidl/address"
import { IsWalletConnected } from "@/registry/default/buidl/is-wallet-connected"
import { IsWalletDisconnected } from "@/registry/default/buidl/is-wallet-disconnected"
import { WalletConnect } from "@/registry/default/buidl/wallet-connect"

export const ADDRESS_EXAMPLE = "0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31"

export default function AddressDemo() {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <h3 className="text-lg font-bold">Default</h3>
      <Address address={ADDRESS_EXAMPLE} />

      <h3 className="text-lg font-bold">Connected Address</h3>
      <IsWalletConnected>
        <Address />
      </IsWalletConnected>
      <IsWalletDisconnected>
        <WalletConnect />
      </IsWalletDisconnected>

      <h3 className="text-lg font-bold">Link</h3>
      <Address link address={ADDRESS_EXAMPLE} />
      <AddressLink address={ADDRESS_EXAMPLE} />

      <h3 className="text-lg font-bold">Copy</h3>
      <Address copy address={ADDRESS_EXAMPLE} />
      <AddressCopy address={ADDRESS_EXAMPLE} />

      <h3 className="text-lg font-bold">Truncated</h3>
      <Address truncate address={ADDRESS_EXAMPLE} />

      <h3 className="text-lg font-bold">All</h3>
      <Address link copy truncate address={ADDRESS_EXAMPLE} />
    </div>
  )
}
