import { EnsAddress } from "@/registry/default/buidl/ens-address"

export default function EnsNameDemo() {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <h3 className="text-lg font-bold">Default</h3>
      <EnsAddress name="vitalik.eth" />

      <h3 className="text-lg font-bold">Link</h3>
      <EnsAddress name="vitalik.eth" link />

      <h3 className="text-lg font-bold">Truncate</h3>
      <EnsAddress name="vitalik.eth" truncate />

      <h3 className="text-lg font-bold">Copy</h3>
      <EnsAddress name="vitalik.eth" truncate />
    </div>
  )
}
