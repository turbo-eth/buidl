import { useEffect, useState } from "react"
import Image from "next/image"
import defaultTokenList from "@/data/uniswap-default.tokenlist.json"

import { cn } from "@/lib/utils"

import { TokenList } from "./types"
import { findTokenByAddressFromList } from "./utils/find-token-by-address-from-list"

export type Erc20ImageProps = React.HTMLAttributes<HTMLElement> & {
  address: `0x${string}`
  tokenList?: TokenList
  chainId?: number
  logoURIDefault?: string
}

export const Erc20Image = ({
  className,
  address,
  logoURIDefault = "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png",
  tokenList = defaultTokenList,
}: Erc20ImageProps) => {
  const classes = cn(className)

  const [tokenImage, setTokenImage] = useState<string | undefined>()
  const [tokenName, setTokenName] = useState<string | undefined>()
  useEffect(() => {
    const token = findTokenByAddressFromList(tokenList, address)
    if (!token) {
      setTokenImage(logoURIDefault)
      setTokenName("Unknown Token")
    }
    if (token) {
      let tokenImage = token.logoURI
      if(tokenImage?.startsWith("ipfs://")) {
        tokenImage= tokenImage.replace("ipfs://", "https://gateway.ipfs.io/ipfs/")
      }
      setTokenImage(tokenImage)
      setTokenName(token.name)
    }
  }, [address, logoURIDefault, tokenList])

  if (!tokenImage || !tokenName) return null

  return (
    <Image
      alt={tokenName}
      height={48}
      width={48}
      className={classes}
      src={tokenImage}
    />
  )
}
