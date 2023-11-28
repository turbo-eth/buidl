import { ADDRESS_EXAMPLE } from "@/config/constants"
import {
  Address,
  AddressCopy,
  AddressLink,
} from "@/registry/default/buidl/address"

export default function AddressDemo() {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <h3 className="text-lg font-bold">Default</h3>
      <Address address={ADDRESS_EXAMPLE} />

      <h3 className="text-lg font-bold">Link</h3>
      <Address link address={ADDRESS_EXAMPLE} />
      <AddressLink address={ADDRESS_EXAMPLE} />

      <h3 className="text-lg font-bold">Copy</h3>
      <Address copy address={ADDRESS_EXAMPLE} />
      <AddressCopy address={ADDRESS_EXAMPLE} />

      <h3 className="text-lg font-bold">Truncated</h3>
      <Address truncate address={ADDRESS_EXAMPLE} />

      <h3 className="text-lg font-bold">All</h3>
      <Address link copy truncate address={ADDRESS_EXAMPLE} />
    </div>
  )
}
