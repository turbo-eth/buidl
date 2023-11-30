import { ImageIpfs } from "@/registry/default/buidl/image-ipfs"

export default function ImageIpfsDemo() {
  return (
    <ImageIpfs
      className="h-[250px] w-[250px]"
      src="ipfs://QmPbxeGcXhYQQNgsC6a36dDyYUcHgMLnGKnF8pVFmGsvqi"
      alt="ipfs"
    />
  )
}
