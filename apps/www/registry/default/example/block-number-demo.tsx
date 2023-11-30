import { BlockNumber } from "@/registry/default/buidl/block-number"

export default function BlockNumberDemo() {
  return (
    <div className="flex flex-col gap-y-1">
      <h3 className="text-lg font-bold">Block Number:</h3>
      <BlockNumber />
    </div>
  )
}
