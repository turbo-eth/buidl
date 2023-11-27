import { AccountEnsAvatar } from "../buidl/account-ens-avatar"
import { IsWalletConnected } from "../buidl/is-wallet-connected"
import { IsWalletDisconnected } from "../buidl/is-wallet-disconnected"
import { WalletConnect } from "../buidl/wallet-connect"

export default function AccountEnsAvatarDemo() {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <IsWalletDisconnected>
        <WalletConnect />
      </IsWalletDisconnected>
      <IsWalletConnected>
      <h3 className="text-lg font-bold">Default</h3>
      <AccountEnsAvatar />

      <h3 className="text-lg font-bold">Small</h3>
      <AccountEnsAvatar size={"sm"} />

      <h3 className="text-lg font-bold">Large</h3>
      <AccountEnsAvatar size={"lg"} />

      <h3 className="text-lg font-bold">Curved</h3>
      <AccountEnsAvatar variant={"curved"} />
      </IsWalletConnected>
    </div>
  )
}
