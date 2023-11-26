import { TokenList } from "../types"

export function findTokenByAddressFromList(
  tokenList: TokenList,
  address: string
) {
  const token = tokenList.tokens.find((token) => {
    return token.address === address
  })

  return token
}
