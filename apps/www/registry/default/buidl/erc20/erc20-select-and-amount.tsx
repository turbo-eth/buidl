import { useEffect, useState, type Dispatch, type SetStateAction } from "react"
import defaultTokenList from "@/data/uniswap-default.tokenlist.json"
import { useChainId } from "wagmi"

import { cn } from "@/lib/utils"

import { Erc20Selector } from "./erc20-selector"
import { Token, TokenList } from "./types"
import { filterTokenListByChainId } from "./utils/filter-token-list-by-chain-id"

type Erc20SelectAndAmountProps = React.HTMLAttributes<HTMLElement> & {
  chainId?: number
  disabled?: boolean
  tokenList: TokenList
  onTokenSelectUpdate?: (token: Token) => void
  onAmountUpdate?: (token: Token) => void
}

export function Erc20SelectAndAmount({
  className,
  chainId,
  disabled,
  tokenList = defaultTokenList,
  onAmountUpdate,
  onTokenSelectUpdate,
}: Erc20SelectAndAmountProps) {
  const classes = cn(
    "group relative flex items-center justify-between gap-2 rounded-md border p-2",
    className
  )
  const chainIdDefault = useChainId()

  // Select Token
  const [selectedToken, setSelectedToken] = useState<Token | undefined>()
  useEffect(() => {
    if (selectedToken) {
      onTokenSelectUpdate?.(selectedToken)
    }
  }, [selectedToken, onTokenSelectUpdate])

  // Amount Update
  const [amount, setAmount] = useState<string | undefined>()
  useEffect(() => {
    if (selectedToken) {
      onTokenSelectUpdate?.(selectedToken)
    }
  }, [selectedToken, onTokenSelectUpdate])

  // Filter Token List
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
      <div className="flex items-center gap-x-2">
        <Erc20Selector
          disabled={disabled}
          tokenList={tokenListFiltered}
          selectedToken={selectedToken}
          setSelectedToken={setSelectedToken}
        />
      </div>
      <input
        disabled={disabled}
        id="amount"
        type="number"
        className="block w-full flex-1 bg-transparent px-3 py-1 text-right text-sm font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-transparent"
        placeholder="0.0"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
    </div>
  )
}
