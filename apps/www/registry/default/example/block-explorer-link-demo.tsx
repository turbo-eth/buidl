import { ADDRESS_EXAMPLE } from "@/config/constants"
import { BlockExplorerLink } from "@/registry/default/buidl/block-explorer-link"
import { IsWalletConnected } from "@/registry/default/buidl/is-wallet-connected"
import { IsWalletDisconnected } from "@/registry/default/buidl/is-wallet-disconnected"
import { WalletConnect } from "@/registry/default/buidl/wallet-connect"

export default function BlockExploreLinkDemo() {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <IsWalletDisconnected>
        <WalletConnect />
      </IsWalletDisconnected>
      <IsWalletConnected>
        <BlockExplorerLink address={ADDRESS_EXAMPLE} />
      </IsWalletConnected>
    </div>
  )
}
