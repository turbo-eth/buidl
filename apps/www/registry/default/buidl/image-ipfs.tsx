import { useEffect, useState } from "react"
import { cn } from '@/lib/utils';

type ImageIpfs = React.HTMLAttributes<HTMLElement> & {
    src: string;
    alt: string;
}

export const ImageIpfs = ({ className, src, alt }: ImageIpfs) => { 
 const classes = cn(className);

 const [imgSrc, setImgSrc] = useState<string | undefined>()
 useEffect(() => {
    if(src?.startsWith("ipfs://")) {
     setImgSrc(src.replace("ipfs://", "https://gateway.ipfs.io/ipfs/"))
    } else {
     setImgSrc(src)
    }
 }, [src])

 if (!imgSrc) return null

 return(
  // eslint-disable-next-line @next/next/no-img-element
  <img src={imgSrc} alt={alt} className={classes} />
)}