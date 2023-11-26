import { ADDRESS_EXAMPLE } from "@/config/constants"

import { Blockie } from "../buidl/blockie"
import { Card } from "../ui/card"

export default function BlockieDemo() {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <h3 className="text-lg font-bold">Default</h3>
      <Blockie address={ADDRESS_EXAMPLE} />
      <h3 className="text-lg font-bold">Small</h3>
      <Blockie size={"sm"} address={ADDRESS_EXAMPLE} />
      <h3 className="text-lg font-bold">Large</h3>
      <Blockie size={"lg"} address={ADDRESS_EXAMPLE} />
      <h3 className="text-lg font-bold">Curved</h3>
      <Blockie variant={"curved"} size={"lg"} address={ADDRESS_EXAMPLE} />
    </div>
  )
}
