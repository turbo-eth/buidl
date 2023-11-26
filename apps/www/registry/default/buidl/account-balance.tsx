import { HTMLAttributes } from "react"
import { useAccount, useBalance } from "wagmi"

import { trimFormattedBalance } from "@/lib/utils"

interface AccountBalanceProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  decimals?: number
}

export const AccountBalance = ({
  className,
  decimals = 4,
  ...props
}: AccountBalanceProps) => {
  const { address } = useAccount()
  const { data: balance } = useBalance({
    address,
  })

  if (!address || !balance) return null

  return (
    <span className={className} {...props}>
      {trimFormattedBalance(balance.formatted, decimals)}
    </span>
  )
}
