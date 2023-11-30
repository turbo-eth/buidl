"use client"

import * as React from "react"
import { useAccount } from "wagmi"

const IsWalletConnected = ({ children }: { children: React.ReactNode }) => {
  const { isConnected, isConnecting } = useAccount()

  if (isConnected || isConnecting) return <>{children}</>

  return null
}

export { IsWalletConnected }
