export interface Token {
  name: string
  address: string
  symbol: string
  decimals: number
  chainId: number
  logoURI: string
  tags?: string[]
  extensions?: {
    bridgeInfo?:
      | {
          [key: string]:
            | {
                tokenAddress: string
              }
            | undefined
        }
      | undefined
  }
}

export interface TokenList {
  name: string
  logoURI: string
  keywords: string[]
  tags: {
    [key: string]: {
      name: string
      description: string
    }
  }
  timestamp: string
  tokens: Token[]
  version: {
    major: number
    minor: number
    patch: number
  }
}
