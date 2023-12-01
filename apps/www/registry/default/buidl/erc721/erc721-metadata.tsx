"use client"

import * as React from "react"
import { useContractRead, useQuery, type Address } from "wagmi"

import { ErrorMessage } from "@/registry/default/buidl/error-message"
import { Skeleton } from "@/registry/default/ui/skeleton"

const erc721TokenUriAbi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const

interface useERC721MetadataProps {
  tokenId: bigint
  ipfsGatewayUrl?: string
  address?: Address
  chainId?: number
}
interface IERC721Metadata {
  name?: string
  description?: string
  image: string
  attributes: Array<{
    trait_type: string
    value: string
  }>
}

function useERC721Metadata({
  address,
  chainId,
  tokenId,
  ipfsGatewayUrl = "https://ipfs.io/ipfs/",
}: useERC721MetadataProps) {
  const { data, isLoading, isError, error } = useContractRead({
    address,
    abi: erc721TokenUriAbi,
    functionName: "tokenURI",
    args: [tokenId],
    chainId,
  })

  const metadataQuery = useQuery(
    ["erc721-metadata", address, chainId, tokenId, data],
    {
      queryFn: async () => {
        if (!data) throw new Error("No tokenUri found")
        const uri = data.replace("ipfs://", "")
        const response = await fetch(`${ipfsGatewayUrl}${uri}`)
        const json = (await response.json()) as IERC721Metadata

        if (!json.image) throw new Error("No image found in metadata")
        if (!json.attributes) throw new Error("No attributes found in metadata")

        json.image = json.image.startsWith("ipfs://")
          ? json.image.replace("ipfs://", `${ipfsGatewayUrl}`)
          : json.image
        return json
      },
      enabled: !!data,
    }
  )

  return {
    isLoading: isLoading || metadataQuery.isLoading,
    isError: isError || metadataQuery.isError,
    error: error || metadataQuery.error,
    data: metadataQuery.data,
  }
}

export type Erc721MetadataProps = React.HTMLAttributes<HTMLElement> & {
  address: `0x${string}`
  tokenId: number | string | bigint
  chainId?: number
  ipfsGatewayUrl?: string
  displayLoading?: boolean
  displayError?: boolean
}

const Erc721MetadataImage = React.forwardRef<
  HTMLImageElement,
  Erc721MetadataProps
>(
  (
    {
      chainId,
      address,
      tokenId,
      ipfsGatewayUrl,
      displayLoading = true,
      displayError = true,
      ...props
    },
    ref
  ) => {
    const { data, isLoading, isError, error } = useERC721Metadata({
      address,
      chainId,
      tokenId: BigInt(tokenId),
      ipfsGatewayUrl,
    })

    if (displayLoading && isLoading) {
      return <Skeleton className="h-6 w-12" {...props} />
    }

    if (displayError && isError) {
      return (
        <ErrorMessage
          defaultErrorMessage="Error while fetching ERC721 data"
          error={error as Error | null}
          {...props}
        />
      )
    }

    if (data?.image === undefined) {
      return null
    }

    return (
      <img alt={`${tokenId} image`} ref={ref} {...props} src={data.image} />
    )
  }
)

Erc721MetadataImage.displayName = "Erc721MetadataImage"

export { Erc721MetadataImage }
