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
        <h3 className="text-lg font-bold">Address Link</h3>
        <BlockExplorerLink address={ADDRESS_EXAMPLE} />
        <h3 className="text-lg font-bold">Transaction Link</h3>
        <BlockExplorerLink
          type="tx"
          address="0x827069d50d3a5ec0d19327f4b1bb1ecfbe939ef26bc3b6cc2dae5a1574f1e6f8"
        />
      </IsWalletConnected>
    </div>
  )
}
