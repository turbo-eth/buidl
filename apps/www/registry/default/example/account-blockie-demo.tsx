import { AccountBlockie } from "@/registry/default/buidl/account-blockie"
import { IsWalletConnected } from "@/registry/default/buidl/is-wallet-connected"
import { IsWalletDisconnected } from "@/registry/default/buidl/is-wallet-disconnected"
import { WalletConnect } from "@/registry/default/buidl/wallet-connect"

export default function AccountBlockieDemo() {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <IsWalletDisconnected>
        <WalletConnect />
      </IsWalletDisconnected>
      <IsWalletConnected>
        <h3 className="text-lg font-bold">Default</h3>
        <AccountBlockie />
        <h3 className="text-lg font-bold">Small</h3>
        <AccountBlockie size={"sm"} />
        <h3 className="text-lg font-bold">Large</h3>
        <AccountBlockie size={"lg"} />
        <h3 className="text-lg font-bold">Curved</h3>
        <AccountBlockie variant={"curved"} size={"lg"} />
      </IsWalletConnected>
    </div>
  )
}
