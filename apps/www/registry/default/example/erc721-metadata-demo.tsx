import { Erc721MetadataImage } from "@/registry/default/buidl/erc721/erc721-metadata"

export default function Erc721MetadataDemo() {
  return (
    <div className="flex flex-col gap-y-3">
      <h2 className="text-lg font-bold">ERC721 Metadata</h2>
      <div>
        <h3 className="text-base font-bold">Image:</h3>
        <Erc721MetadataImage
          className="mt-1 h-[250px] w-[250px]"
          address="0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"
          tokenId={1}
          chainId={1}
        />
      </div>
    </div>
  )
}
