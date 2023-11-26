import * as React from "react"
import { useEffect, useState } from "react"
import defaultTokenList from "@/data/uniswap-default.tokenlist.json"
import { formatUnits } from "viem"
import { useChainId } from "wagmi"

import { cn } from "@/lib/utils"

import { useErc20BalanceOf, useErc20Decimals } from "./erc20-wagmi"
import { TokenList } from "./types"
import { findTokenByAddressFromList } from "./utils/find-token-by-address-from-list"

export type Erc20BalanceProps = React.HTMLAttributes<HTMLElement> & {
  address: `0x${string}`
  account: `0x${string}`
  tokenList?: TokenList
  chainId?: number
}

export const Erc20Balance = ({
  className,
  chainId,
  address,
  account,
  tokenList = defaultTokenList,
}: Erc20BalanceProps) => {
  const classes = cn(className)
  const chainIdDefault = useChainId()

  const [decimals, setDecimals] = React.useState<number | undefined>()
  const [tokenNotInList, setTokenNotInList] = useState<boolean>()
  React.useEffect(() => {
    const token = findTokenByAddressFromList(tokenList, address)
    if (!token) {
      setTokenNotInList(true)
    }
    if (token) {
      setDecimals(token.decimals)
    }
  }, [address, tokenList])

  useEffect(() => {}, [])

  const { data: dataErc20Decimals, isSuccess: isSuccessErc20Decimals } =
    useErc20Decimals({
      chainId: chainId || chainIdDefault,
      address,
      enabled: tokenNotInList,
    })

  useEffect(() => {
    if (isSuccessErc20Decimals && dataErc20Decimals) {
      setDecimals(dataErc20Decimals)
    }
  }, [dataErc20Decimals, isSuccessErc20Decimals])

  const { data, isSuccess } = useErc20BalanceOf({
    chainId: chainId || chainIdDefault,
    address,
    // @ts-ignore
    args: account,
    watch: true,
    enabled: !!decimals,
  })

  if (!data || !isSuccess || !decimals)
    return <span className={className}>0</span>

  return <div className={classes}>{formatUnits(data, decimals).toString()}</div>
}
