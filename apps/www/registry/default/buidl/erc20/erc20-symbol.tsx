import { useEffect, useState } from "react"
import defaultTokenList from "@/data/uniswap-default.tokenlist.json"
import { useChainId } from "wagmi"

import { cn } from "@/lib/utils"

import { useErc20Symbol } from "./erc20-wagmi"
import { TokenList } from "./types"
import { findTokenByAddressFromList } from "./utils/find-token-by-address-from-list"

export type Erc20SymbolProps = React.HTMLAttributes<HTMLElement> & {
  address: `0x${string}`
  tokenList?: TokenList
  chainId?: number
  unavailable?: any
}

export const Erc20Symbol = ({
  className,
  chainId,
  address,
  tokenList = defaultTokenList,
  unavailable,
}: Erc20SymbolProps) => {
  const classes = cn(className)
  const chainIdDefault = useChainId()

  const [tokenSymbol, setTokenSymbol] = useState<string | undefined>()
  const [tokenNotInList, setTokenNotInList] = useState<boolean>()
  useEffect(() => {
    const token = findTokenByAddressFromList(tokenList, address)
    if (!token) {
      setTokenNotInList(true)
    }
    if (token) {
      setTokenSymbol(token.symbol)
    }
  }, [address, tokenList])

  useEffect(() => {}, [])

  const { data, isSuccess } = useErc20Symbol({
    chainId: chainId || chainIdDefault,
    address,
    watch: true,
    enabled: !!tokenNotInList,
  })

  useEffect(() => {
    if (data && isSuccess) {
      setTokenSymbol(data)
    }
  }, [data, isSuccess])

  if (!tokenSymbol) {
    const Comp = unavailable
    if(!Comp) return null
    return <Comp />
  }

  return <span className={classes}>{tokenSymbol}</span>
}
