import * as React from "react"
import Image from "next/image"
import { VariantProps, cva } from "class-variance-authority"
import makeBlockie from "ethereum-blockies-base64"

import { ADDRESS_ZERO } from "@/config/constants"
import { cn } from "@/lib/utils"

const blockieVariants = cva("inline-block", {
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

export type BlockieProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof blockieVariants> & {
    address: `0x${string}`
  }

export const Blockie = ({
  className,
  address,
  variant,
  size,
}: BlockieProps) => {
  const classes = cn(className)

  return (
    <Image
      width={32}
      height={32}
      alt={`${address} blockie`}
      className={cn(blockieVariants({ variant, size, className }))}
      src={makeBlockie(address || ADDRESS_ZERO)}
    />
  )
}
