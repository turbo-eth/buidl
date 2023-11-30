import * as React from "react"
import { formatUnits } from "viem"
import { useAccount, useContractRead } from "wagmi"

import { cn } from "@/lib/utils"
import { Skeleton } from "@/registry/default/ui/skeleton"

const erc20BalanceOfAbi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const

const erc20DecimalsAbi = [
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const

function trimFormattedBalance(balance: string | undefined, decimals = 4) {
  if (!balance) {
    return "0"
  }
  const [integer, decimal] = balance.split(".")
  if (!decimal) return integer

  const trimmedDecimal = decimal.slice(0, decimals)
  return `${integer}.${trimmedDecimal}`
}

const ErrorMessage = ({ error }: { error: Error | null }) => {
  return (
    <div className={cn("break-words text-sm font-medium text-red-500")}>
      {error?.message ?? "Error while fetching ERC20 data"}
    </div>
  )
}

export type Erc20BalanceProps = React.HTMLAttributes<HTMLSpanElement> & {
  address: `0x${string}`
  chainId?: number
  account?: `0x${string}`
  formatDecimals?: number
}

const Erc20Balance = React.forwardRef<HTMLSpanElement, Erc20BalanceProps>(
  ({ chainId, address, account, formatDecimals = 4, ...props }, ref) => {
    const { address: currentAccount } = useAccount()
    const selectedAccount = account ?? currentAccount

    const {
      data: decimals,
      isLoading: isLoadingDecimals,
      isError: isErrorDecimals,
      error: errorDecimals,
    } = useContractRead({
      address,
      abi: erc20DecimalsAbi,
      functionName: "decimals",
      chainId,
    })

    const {
      data: balance,
      isLoading: isLoadingBalance,
      isError: isErrorBalance,
      error: errorBalance,
    } = useContractRead({
      address,
      abi: erc20BalanceOfAbi,
      functionName: "balanceOf",
      args: selectedAccount ? [selectedAccount] : undefined,
      enabled: !!selectedAccount,
      chainId,
    })

    if (isLoadingDecimals || isLoadingBalance) {
      return <Skeleton className="h-6 w-16" {...props} />
    }

    if (isErrorDecimals || isErrorBalance) {
      return <ErrorMessage error={errorDecimals ?? errorBalance} />
    }

    if (balance === undefined || decimals === undefined) {
      return null
    }

    return (
      <span ref={ref} {...props}>
        {trimFormattedBalance(formatUnits(balance, decimals), formatDecimals)}
      </span>
    )
  }
)

Erc20Balance.displayName = "Erc20Balance"

export { Erc20Balance }
