"use client"

import * as React from "react"
import { useAccount } from "wagmi"

const IsWalletDisconnected = ({ children }: { children: React.ReactNode }) => {
  const { isDisconnected } = useAccount()

  if (isDisconnected) return <>{children}</>

  return null
}

export { IsWalletDisconnected }
