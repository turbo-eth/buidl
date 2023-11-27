"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

type WalletManage = React.HTMLAttributes<HTMLElement>

export const WalletManage = ({ children, className }: WalletManage) => {
  const classes = cn(className)

  return <div className={classes}>{children}</div>
}
