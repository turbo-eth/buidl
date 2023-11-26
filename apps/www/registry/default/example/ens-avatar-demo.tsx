import { ADDRESS_EXAMPLE } from "@/config/constants"

import { EnsAvatar } from "../buidl/ens-avatar"

export default function BlockieDemo() {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <h3 className="text-lg font-bold">Default</h3>
      <EnsAvatar address={ADDRESS_EXAMPLE} />

      <h3 className="text-lg font-bold">Small</h3>
      <EnsAvatar size={"sm"} address={ADDRESS_EXAMPLE} />

      <h3 className="text-lg font-bold">Large</h3>
      <EnsAvatar size={"lg"} address={ADDRESS_EXAMPLE} />

      <h3 className="text-lg font-bold">Curved</h3>
      <EnsAvatar variant={"curved"} address={ADDRESS_EXAMPLE} />
    </div>
  )
}
