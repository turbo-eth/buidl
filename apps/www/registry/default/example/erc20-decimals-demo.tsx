import { Erc20Decimals } from "@/registry/default/buidl/erc20/erc20-decimals"

export default function Erc20DecimalsDemo() {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <h3 className="text-lg font-bold">Default (WETH)</h3>
      <Erc20Decimals
        address="0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
        chainId={1}
      />
    </div>
  )
}
