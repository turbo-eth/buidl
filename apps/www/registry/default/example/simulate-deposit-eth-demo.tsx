import { SimulateDepositETH } from "@/registry/default/buidl/op-wagmi/simulate-deposit-eth"

export default function SimulateDepositETHDemo() {
  return (
    <div className="flex flex-col gap-y-3">
      <h2 className="text-lg font-bold">Simulate Deposit  ETH</h2>
      <div>
        <h3 className="text-base font-bold">Default:</h3>
        <SimulateDepositETH
          to={"0x4200000000000000000000000000000000000016"}
          amount={BigInt(1000)}
          l2ChainId={8453}
        />
      </div>
    </div>
  )
}
