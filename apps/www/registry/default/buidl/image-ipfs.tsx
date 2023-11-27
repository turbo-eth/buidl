import { useMemo } from "react"

import { cn } from "@/lib/utils"

type ImageIpfs = React.HTMLAttributes<HTMLElement> & {
  src: string
  alt: string
  width?: string
  height?: string
}

export const ImageIpfs = ({
  className,
  src,
  alt,
  width,
  height,
}: ImageIpfs) => {
  const classes = cn(className)

  const imgSrc = useMemo(
    () =>
      src?.startsWith("ipfs://")
        ? src.replace("ipfs://", "https://gateway.ipfs.io/ipfs/")
        : src,
    [src]
  )

  if (!imgSrc) return null

  return (
    <img
      src={imgSrc}
      width={width}
      height={height}
      alt={alt}
      className={classes}
    />
  )
}
