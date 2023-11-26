"use client"

import { ReactNode } from "react"
import { WagmiConfig, createConfig } from "wagmi"

import { connectors } from "@/config/connectors"
import { publicClient, webSocketPublicClient } from "@/config/networks"

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: connectors,
  publicClient,
  webSocketPublicClient,
})

export function WagmiProvider({ children }: { children: ReactNode }) {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
}
