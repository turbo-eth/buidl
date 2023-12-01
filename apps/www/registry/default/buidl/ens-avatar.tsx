"useClient"

import * as React from "react"
import { VariantProps, cva } from "class-variance-authority"
import { useAccount, useEnsAvatar, useEnsName } from "wagmi"

import { cn } from "@/lib/utils"
import { Blockie } from "@/registry/default/buidl/blockie"
import { Skeleton } from "@/registry/default/ui/skeleton"

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

interface EnsAvatarProps
  extends React.HTMLAttributes<HTMLImageElement>,
    VariantProps<typeof ensAvatarVariants> {
  address?: `0x${string}`
  name?: string
  displayLoading?: boolean
}

const EnsAvatar = React.forwardRef<HTMLImageElement, EnsAvatarProps>(
  (
    {
      className,
      address,
      name,
      variant,
      size,
      displayLoading = true,
      ...props
    },
    ref
  ) => {
    const [isLoadingImg, setIsLoadingImg] = React.useState(true)

    const { address: connectedAddress } = useAccount()
    const selectedAddress = address ?? connectedAddress

    const { data: dataEnsName, isLoading: isLoadingEnsName } = useEnsName({
      chainId: 1,
      address: selectedAddress,
      enabled: !name && !!selectedAddress,
    })

    const ensName = name ?? dataEnsName

    const { data: dataEnsAvatar, isLoading: isLoadingEnsAvatar } = useEnsAvatar(
      {
        chainId: 1,
        name: ensName,
        enabled: !!ensName,
      }
    )

    if (
      displayLoading &&
      (isLoadingEnsName || isLoadingEnsAvatar || !selectedAddress)
    ) {
      return (
        <Skeleton
          className={cn(
            "h-10 w-10",
            ensAvatarVariants({ variant, size, className })
          )}
        />
      )
    }

    if (dataEnsAvatar) {
      return (
        <>
          {isLoadingImg ? (
            <Skeleton
              className={cn(ensAvatarVariants({ variant, size, className }))}
              {...props}
            />
          ) : null}
          <img
            ref={ref}
            alt={`${selectedAddress} EnsAvatar`}
            className={cn(
              ensAvatarVariants({ variant, size, className }),
              isLoadingImg && "hidden"
            )}
            onLoad={() => {
              setIsLoadingImg(false)
            }}
            src={dataEnsAvatar}
            {...props}
          />
        </>
      )
    }

    return (
      <Blockie
        address={selectedAddress}
        className={cn("w-10", ensAvatarVariants({ variant, size }), className)}
      />
    )
  }
)

EnsAvatar.displayName = "EnsAvatar"

export { EnsAvatar }
