"use client"

import "@rainbow-me/rainbowkit/styles.css"
import { ReactNode } from "react"
import { RainbowKitProvider } from "@rainbow-me/rainbowkit"

import { chains, publicClient, webSocketPublicClient } from "@/config/networks"

export function RainbowKitInitializedProvider({
  children,
}: {
  children: ReactNode
}) {
  return <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
}
