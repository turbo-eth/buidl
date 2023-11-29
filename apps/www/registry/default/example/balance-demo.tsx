import { Balance } from "@/registry/default/buidl/balance"

export default function BalanceDemo() {
  return (
    <div className="flex flex-col gap-y-3">
      <h2 className="text-lg font-bold">Balance</h2>
      <div>
        <h3 className="text-base font-bold">Connected address balance:</h3>
        <Balance className="mt-1" />
      </div>
      <div>
        <h3 className="text-base font-bold">Prop address balance</h3>
        <Balance
          address="0x0000000000000000000000000000000000000000"
          className="mt-1"
        />
      </div>
    </div>
  )
}
