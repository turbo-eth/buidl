import * as React from "react"
import { formatUnits } from "viem"
import { useAccount, useContractRead } from "wagmi"

import { ErrorMessage } from "@/registry/default/buidl/error-message"
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

export type Erc20BalanceProps = React.HTMLAttributes<HTMLDivElement> & {
  address: `0x${string}`
  chainId?: number
  account?: `0x${string}`
  formatDecimals?: number
  displayLoading?: boolean
  displayError?: boolean
}

const Erc20Balance = React.forwardRef<HTMLDivElement, Erc20BalanceProps>(
  (
    {
      chainId,
      address,
      account,
      formatDecimals = 4,
      displayLoading = true,
      displayError = true,
      ...props
    },
    ref
  ) => {
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

    if (displayLoading && (isLoadingDecimals || isLoadingBalance)) {
      return <Skeleton className="h-6 w-16" {...props} />
    }

    if (displayError && (isErrorDecimals || isErrorBalance)) {
      return (
        <ErrorMessage
          defaultErrorMessage="Error while fetching ERC20 data"
          error={errorDecimals ?? errorBalance}
          {...props}
        />
      )
    }

    if (balance === undefined || decimals === undefined) {
      return null
    }

    return (
      <div ref={ref} {...props}>
        {trimFormattedBalance(formatUnits(balance, decimals), formatDecimals)}
      </div>
    )
  }
)

Erc20Balance.displayName = "Erc20Balance"

export { Erc20Balance }
