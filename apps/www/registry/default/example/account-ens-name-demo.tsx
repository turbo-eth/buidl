import { AccountEnsName } from "../buidl/account-ens-name"

import { IsWalletConnected } from "../buidl/is-wallet-connected";
import { IsWalletDisconnected } from "../buidl/is-wallet-disconnected";
import { WalletConnect } from "../buidl/wallet-connect";

export default function AccountEnsNameDemo() {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <IsWalletDisconnected>
        <WalletConnect />
      </IsWalletDisconnected>
      <IsWalletConnected>
        <AccountEnsName />
      </IsWalletConnected>
    </div>
  )
}
