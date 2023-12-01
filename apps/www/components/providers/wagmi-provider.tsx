"use client"

import { ReactNode } from "react"
import {
  WagmiProvider as WagmiProviderNative,
  createConfig, http
} from "wagmi"

import {
  arbitrum,
  base,
  gnosis,
  mainnet,
  optimism,
  polygon,
} from "wagmi/chains"


const wagmiConfig = createConfig({
  chains: [mainnet, polygon, arbitrum, optimism, gnosis, base],
  ssr: true,
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [arbitrum.id]: http(),
    [optimism.id]: http(),
    [gnosis.id]: http(),
    [base.id]: http(),
  }
})

export function WagmiProvider({ children }: { children: ReactNode }) {
  return <WagmiProviderNative config={wagmiConfig}>{children}</WagmiProviderNative>
}
