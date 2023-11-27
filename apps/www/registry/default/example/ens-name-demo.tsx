import { ADDRESS_EXAMPLE } from "@/config/constants"
import { EnsName } from "@/registry/default/buidl/ens-name"

export default function EnsNameDemo() {
  return <EnsName address={ADDRESS_EXAMPLE} />
}
