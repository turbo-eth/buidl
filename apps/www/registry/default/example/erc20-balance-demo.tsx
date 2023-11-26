import { ADDRESS_EXAMPLE } from "@/config/constants"

import { Erc20Balance } from "../buidl/erc20/erc20-balance"

export default function Erc20BalanceDemo() {
  // WETH Balance
  return (
    <Erc20Balance
      address="0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
      account={ADDRESS_EXAMPLE}
    />
  )
}
