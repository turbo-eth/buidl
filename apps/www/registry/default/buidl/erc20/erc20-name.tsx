import { useEffect, useState } from "react"
import defaultTokenList from "@/data/uniswap-default.tokenlist.json"
import { useChainId } from "wagmi"

import { cn } from "@/lib/utils"

import { useErc20Name } from "./erc20-wagmi"
import { TokenList } from "./types"
import { findTokenByAddressFromList } from "./utils/find-token-by-address-from-list"

export type Erc20NameProps = React.HTMLAttributes<HTMLElement> & {
  address: `0x${string}`
  tokenList?: TokenList
  chainId?: number
  unavailable?: any
}

export const Erc20Name = ({
  className,
  chainId,
  address,
  tokenList = defaultTokenList,
  unavailable,
}: Erc20NameProps) => {
  const classes = cn(className)
  const chainIdDefault = useChainId()

  const [tokenName, setTokenName] = useState<string | undefined>()
  const [tokenNotInList, setTokenNotInList] = useState<boolean>()
  useEffect(() => {
    const token = findTokenByAddressFromList(tokenList, address)
    if (!token) {
      setTokenNotInList(true)
    }
    if (token) {
      setTokenName(token.name)
    }
  }, [address, tokenList])

  useEffect(() => {}, [])

  const { data, isSuccess } = useErc20Name({
    chainId: chainId || chainIdDefault,
    address,
    watch: true,
    enabled: !!tokenNotInList,
  })

  useEffect(() => {
    if (data && isSuccess) {
      setTokenName(data)
    }
  }, [data, isSuccess])

  if (!tokenName) {
    const Comp = unavailable
    if(!Comp) return null 
    return <Comp />
  }

  return <span className={classes}>{tokenName}</span>
}
