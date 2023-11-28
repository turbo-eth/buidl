"use client"

import * as React from "react"
import { useAccount } from "wagmi"

const IsWalletDisconnected = ({ children }: { children: React.ReactNode }) => {
  const { isConnected } = useAccount()

  if (!isConnected) return <>{children}</>

  return null
}

export { IsWalletDisconnected }
