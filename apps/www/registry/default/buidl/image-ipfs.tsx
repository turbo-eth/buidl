import * as React from "react"

import { cn } from "@/lib/utils"
import { Skeleton } from "@/registry/default/ui/skeleton"

const ErrorMessage = ({ error }: { error: Error | null }) => {
  return (
    <div className={cn("break-words text-sm font-medium text-red-500")}>
      {error?.message ?? "Error while fetching image"}
    </div>
  )
}

interface ImageIpfsProps extends React.HTMLAttributes<HTMLImageElement> {
  ipfsGatewayUrl?: string
  src: string
  alt: string
}

const ImageIpfs = React.forwardRef<HTMLImageElement, ImageIpfsProps>(
  (
    { className, src, alt, ipfsGatewayUrl = "https://ipfs.io/ipfs/", ...props },
    ref
  ) => {
    const [isLoading, setIsLoading] = React.useState(true)
    const [isError, setIsError] = React.useState(false)

    const imgSrc = React.useMemo(
      () =>
        src?.startsWith("ipfs://")
          ? src.replace("ipfs://", ipfsGatewayUrl)
          : src,
      [src, ipfsGatewayUrl]
    )

    return (
      <>
        {isError ? (
          <ErrorMessage error={null} />
        ) : isLoading ? (
          <Skeleton className={className} {...props} />
        ) : null}
        <img
          ref={ref}
          alt={alt}
          src={imgSrc}
          onLoad={() => setIsLoading(false)}
          onError={() => setIsError(true)}
          className={cn((isLoading || isError) && "hidden", className)}
          {...props}
        />
      </>
    )
  }
)

ImageIpfs.displayName = "ImageIpfs"

export { ImageIpfs }
