import { Erc721TokenUri } from "@/registry/default/buidl/erc721/erc721-token-uri"

export default function Erc721TokenUriDemo() {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <h3 className="text-lg font-bold">Default (BAYC)</h3>
      <Erc721TokenUri
        address="0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"
        tokenId={1}
        chainId={1}
      />
    </div>
  )
}
