import * as React from "react"
import { useEffect, useState } from "react"
import defaultTokenList from "@/data/uniswap-default.tokenlist.json"
import { useChainId } from "wagmi"

import { cn } from "@/lib/utils"

import { Erc20Selector } from "./erc20-selector"
import { Token, TokenList } from "./types"
import { filterTokenListByChainId } from "./utils/filter-token-list-by-chain-id"

type Erc20SelectProps = React.HTMLAttributes<HTMLElement> & {
  tokenList?: TokenList
  chainId?: number
  onTokenSelect?: (token: Token) => void
}

export const Erc20Select = ({
  className,
  chainId,
  tokenList = defaultTokenList,
  onTokenSelect,
}: Erc20SelectProps) => {
  const classes = cn(className)
  const chainIdDefault = useChainId()

  const [selectedToken, setSelectedToken] = useState<Token | undefined>()
  useEffect(() => {
    if (selectedToken) {
      onTokenSelect?.(selectedToken)
    }
  }, [selectedToken, onTokenSelect])

  const [tokenListFiltered, setTokenListFiltered] = useState<
    TokenList | undefined
  >()
  useEffect(() => {
    const tokenListFilteredByChainId = filterTokenListByChainId(
      tokenList,
      chainId || chainIdDefault
    )
    setTokenListFiltered(tokenListFilteredByChainId)
  }, [chainId, chainIdDefault, tokenList])

  return (
    <div className={classes}>
      <div className="group relative flex items-center gap-2 rounded-md border p-2">
        <Erc20Selector
          tokenList={tokenListFiltered}
          selectedToken={selectedToken}
          setSelectedToken={setSelectedToken}
          className=""
        />
      </div>
    </div>
  )
}
