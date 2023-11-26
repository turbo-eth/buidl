import * as React from "react"
import Image from "next/image"
import { VariantProps, cva } from "class-variance-authority"
import { useEnsAvatar, useEnsName } from "wagmi"

import { cn } from "@/lib/utils"

const ensAvatarVariants = cva("inline-block", {
  variants: {
    variant: {
      default:
        "rounded-full border-2 border-primary-foreground shadow-sm hover:shadow-md",
      curved:
        "rounded-md border-2 border-primary-foreground shadow-sm hover:shadow-md",
    },
    size: {
      default: "h-10 w-10",
      sm: "h-7 w-7",
      lg: "h-12 w-12",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

type EnsAvatar = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof ensAvatarVariants> & {
    address: `0x${string}`
  }

export const EnsAvatar = ({ className, address, variant, size }: EnsAvatar) => {
  const {
    data: dataEnsName,
    isError: isErrorEnsName,
    isLoading: isLoadingEnsName,
    isSuccess: isSuccessEnsName,
  } = useEnsName({
    address: address,
  })

  const {
    data: dataEnsAvatar,
    isError: isErrorEnsAvatar,
    isLoading: isLoadingEnsAvatar,
    isSuccess: isSuccessEnsAvatar,
  } = useEnsAvatar({
    name: dataEnsName,
  })

  if (!isSuccessEnsName || !isSuccessEnsAvatar || !dataEnsAvatar) {
    return <span className="">😀</span>
  }

  return (
    <Image
      width={32}
      height={32}
      alt={`${address} EnsAvatar`}
      className={cn(ensAvatarVariants({ variant, size, className }))}
      src={dataEnsAvatar}
    />
  )
}
