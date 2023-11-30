import {
  GasPrice,
  MaxFeePerGas,
  MaxPriorityFeePerGas,
} from "@/registry/default/buidl/fee-data"

export default function FeeDataDemo() {
  return (
    <div className="flex flex-col gap-y-3">
      <h2 className="text-lg font-bold">Fee Data</h2>
      <div>
        <h3 className="text-base font-bold">Gas Price (gwei):</h3>
        <GasPrice className="mt-1" />
      </div>
      <div>
        <h3 className="text-base font-bold">Max Fee Per Gas (gwei):</h3>
        <MaxFeePerGas className="mt-1" />
      </div>
      <div>
        <h3 className="text-base font-bold">
          Max Priority Fee Per Gas (gwei):
        </h3>
        <MaxPriorityFeePerGas className="mt-1" />
      </div>
    </div>
  )
}
