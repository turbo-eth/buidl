/* eslint-disable @typescript-eslint/no-unsafe-call */
import { CoinbaseWalletConnector } from "@wagmi/core/connectors/coinbaseWallet"
import { InjectedConnector } from "@wagmi/core/connectors/injected"
import { MetaMaskConnector } from "@wagmi/core/connectors/metaMask"

export const connectors = [
  new MetaMaskConnector(),
  new CoinbaseWalletConnector({
    options: {
      appName: "wagmi.sh",
      jsonRpcUrl: "https://eth-mainnet.alchemyapi.io/v2/yourAlchemyId",
    },
  }),
]
