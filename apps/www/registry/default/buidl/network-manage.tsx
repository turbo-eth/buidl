import * as React from "react"

import { cn } from "@/lib/utils"

type NetworkManage = React.HTMLAttributes<HTMLElement>

export const NetworkManage = ({ children, className }: NetworkManage) => {
  const classes = cn(className)

  return <div className={classes}>{children}</div>
}
