import { TokenList } from "../types"

export function findTokenFromList(
  tokenList: TokenList,
  symbol: string,
  chainId: number
) {
  const token = tokenList.tokens.find((token) => {
    return token.symbol === symbol && token.chainId === chainId
  })

  return token
}
