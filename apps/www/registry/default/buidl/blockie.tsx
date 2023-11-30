"use client"

import * as React from "react"
import { VariantProps, cva } from "class-variance-authority"
import makeBlockie from "ethereum-blockies-base64"
import { useAccount } from "wagmi"

import { cn } from "@/lib/utils"
import { Skeleton } from "@/registry/default/ui/skeleton"

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

export type BlockieProps = React.HTMLAttributes<HTMLImageElement> &
  VariantProps<typeof blockieVariants> & {
    address?: `0x${string}`
  }

const Blockie = React.forwardRef<HTMLImageElement, BlockieProps>(
  ({ className, address, variant, size, ...props }, ref) => {
    const [isLoading, setIsLoading] = React.useState(true)
    const { address: connectedAddress, isConnecting } = useAccount()
    const selectedAddress = address ?? connectedAddress ?? "0x0"

    return (
      <>
        {isLoading || isConnecting ? (
          <Skeleton
            className={cn(blockieVariants({ variant, size, className }))}
            {...props}
          />
        ) : null}
        <img
          ref={ref}
          alt={`${address} blockie`}
          onLoad={() => setIsLoading(false)}
          className={cn(
            blockieVariants({ variant, size, className }),
            (isLoading || isConnecting) && "hidden"
          )}
          src={makeBlockie(selectedAddress)}
          {...props}
        />
      </>
    )
  }
)

Blockie.displayName = "Blockie"

export { Blockie }
