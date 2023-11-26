import { TokenList } from "../types"

export function filterTokenListByChainId(
  tokenList: TokenList,
  chainId: number
) {
  const _tokenList = { ...tokenList }

  _tokenList.tokens = tokenList?.tokens?.filter((token) => {
    return token.chainId === chainId
  })

  return _tokenList
}
