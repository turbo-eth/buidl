"use client"

import { useCallback, useMemo, useState } from "react"

import { cn } from "@/lib/utils"
import { ImageIpfs } from "@/registry/default/buidl/image-ipfs"
import {
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/default/ui/command"

import { Token, TokenList } from "./types"

interface Erc20SelectorProps {
  disabled?: boolean
  selectedToken?: Token
  setSelectedToken: (token: Token) => void
  className?: string
  tokenList?: TokenList
}

export function Erc20Selector({
  disabled,
  selectedToken,
  setSelectedToken,
  className,
  tokenList,
}: Erc20SelectorProps) {
  const [open, setOpen] = useState(false)
  const [searchValue, setSearchValue] = useState("")

  const filteredTokenList = useMemo(() => {
    if (tokenList?.tokens && tokenList.tokens.length > 0) {
      return tokenList.tokens.filter((token: Token) => {
        const tokenName = token.name.toLowerCase()
        const tokenSymbol = token.symbol.toLowerCase()
        const tokenAddress = token.address.toLowerCase()
        const isTokenMatch =
          tokenName.includes(searchValue.toLowerCase()) ||
          tokenSymbol.includes(searchValue.toLowerCase()) ||
          tokenAddress.includes(searchValue.toLowerCase())

        return isTokenMatch
      })
    } else {
      return [] as Token[]
    }
  }, [tokenList?.tokens, searchValue])

  const handleSelect = useCallback(
    (token: Token) => {
      setSelectedToken(token)
      setOpen(false)
      setSearchValue("")
    },
    [setSelectedToken]
  )

  return (
    <>
      <button
        className={(cn("w-fit rounded-full"), className)}
        onClick={() => (!disabled ? setOpen(true) : undefined)}
      >
        {selectedToken && (
          <div className="flex items-center gap-x-2">
            <ImageIpfs
              alt={`${selectedToken?.name} logo`}
              className="h-6 w-6 rounded-full"
              src={selectedToken?.logoURI}
            />
            <span className="text-sm font-medium">
              {selectedToken.name} ({selectedToken.symbol})
            </span>
          </div>
        )}
        {!selectedToken && (
          <span className="text-md font-medium">Select Token</span>
        )}
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <h2 className="ml-6 mt-4 text-sm font-bold">Select a token</h2>
        <CommandInput
          placeholder="Search name or paste address"
          value={searchValue}
          onValueChange={(value: string) => setSearchValue(value)}
        />
        <CommandList>
          <CommandEmpty>No tokens found.</CommandEmpty>
          {filteredTokenList &&
            filteredTokenList.length > 0 &&
            filteredTokenList.map((token) => (
              <CommandItem
                key={token.address}
                value={token.name}
                className="flex cursor-pointer gap-2"
                onSelect={() => handleSelect(token)}
              >
                <ImageIpfs
                  alt={`${token.name} logo`}
                  className="h-6 w-6 rounded-full"
                  src={token.logoURI}
                />
                <div className="space-y-0.5">
                  <h3 className="text-base font-medium">{token.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {token.symbol}
                  </p>
                </div>
              </CommandItem>
            ))}
        </CommandList>
      </CommandDialog>
    </>
  )
}
