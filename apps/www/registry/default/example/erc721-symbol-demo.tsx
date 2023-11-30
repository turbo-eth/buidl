import { Erc721Symbol } from "@/registry/default/buidl/erc721/erc721-symbol"

export default function Erc721SymbolDemo() {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <h3 className="text-lg font-bold">Default (CryptoPunks)</h3>
      <Erc721Symbol
        address="0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB"
        chainId={1}
      />
    </div>
  )
}
