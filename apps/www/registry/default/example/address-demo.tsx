import { ADDRESS_EXAMPLE } from "@/config/constants"

import { Address } from "@/registry/default/buidl/address"

export default function AddressDemo() {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <h3 className="text-lg font-bold">Default</h3>
      <Address address={ADDRESS_EXAMPLE} />

      <h3 className="text-lg font-bold">Link</h3>
      <Address linkEnabled address={ADDRESS_EXAMPLE} />

      <h3 className="text-lg font-bold">Copy</h3>
      <Address copyEnabled address={ADDRESS_EXAMPLE} />

      <h3 className="text-lg font-bold">Truncated</h3>
      <Address truncate address={ADDRESS_EXAMPLE} />

      <h3 className="text-lg font-bold">All</h3>
      <Address linkEnabled copyEnabled truncate address={ADDRESS_EXAMPLE} />
    </div>
  )
}
