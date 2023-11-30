import { Erc20Balance } from "@/registry/default/buidl/erc20/erc20-balance"
import { IsWalletConnected } from "@/registry/default/buidl/is-wallet-connected"
import { IsWalletDisconnected } from "@/registry/default/buidl/is-wallet-disconnected"
import { WalletConnect } from "@/registry/default/buidl/wallet-connect"

export default function Erc20BalanceDemo() {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <h3 className="text-lg font-bold">Default (WETH)</h3>
      <IsWalletConnected>
        <Erc20Balance
          address="0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
          chainId={1}
        />
      </IsWalletConnected>
      <IsWalletDisconnected>
        <WalletConnect />
      </IsWalletDisconnected>

      <h3 className="text-lg font-bold">Prop Account (WETH)</h3>
      <Erc20Balance
        address="0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
        account="0x27F23c710dD3d878FE9393d93465FeD1302f2EbD"
        chainId={1}
      />
    </div>
  )
}
