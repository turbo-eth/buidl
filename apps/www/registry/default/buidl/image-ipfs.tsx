import * as React from "react"

import { cn } from "@/lib/utils"
import { ErrorMessage } from "@/registry/default/buidl/error-message"
import { Skeleton } from "@/registry/default/ui/skeleton"

interface ImageIpfsProps extends React.HTMLAttributes<HTMLImageElement> {
  ipfsGatewayUrl?: string
  src: string
  alt: string
  displayLoading?: boolean
  displayError?: boolean
}

const ImageIpfs = React.forwardRef<HTMLImageElement, ImageIpfsProps>(
  (
    {
      className,
      src,
      alt,
      ipfsGatewayUrl = "https://ipfs.io/ipfs/",
      displayLoading = true,
      displayError = true,
      ...props
    },
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
        {displayError && isError ? (
          <ErrorMessage
            defaultErrorMessage="Error while fetching image"
            error={null}
            {...props}
          />
        ) : displayLoading && isLoading ? (
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
