import { InputHTMLAttributes, forwardRef, useMemo } from "react"
import { isAddress, type Address } from "viem"
import { useEnsAddress, useEnsName } from "wagmi"

import { cn } from "@/lib/utils"

import { Input } from "../ui/input"
import { BlockExplorerLink } from "./block-explorer-link"
import { EnsAvatar } from "./ens-avatar"

interface AccountInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string
}

const AccountInput = forwardRef<HTMLInputElement, AccountInputProps>(
  ({ value, className, ...props }, ref) => {
    const isValidAddress = useMemo(
      () => typeof value === "string" && isAddress(value),
      [value]
    )

    const { data: ensAddress } = useEnsAddress({
      name: value,
      // Resolve ENS only on mainnet
      chainId: 1,
    })

    const { data: ensName } = useEnsName({
      address: value as Address | undefined,
      chainId: 1,
    })

    return (
      <div
        className={cn(
          "relative flex w-full items-center justify-between rounded-full border border-stone-300",
          isValidAddress && "border-r-0",
          className
        )}
      >
        <Input
          ref={ref}
          className={cn(
            "h-16 w-full rounded-full border-none pl-5 pr-12  text-base focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 dark:focus:ring-0 dark:focus:ring-offset-0",
            isValidAddress && "pr-2"
          )}
          {...props}
        />
        {(isValidAddress || ensAddress) && value && (
          <div className="w-fit rounded-full border border-stone-300 p-0.5">
            <BlockExplorerLink
              data={ensAddress ? ensAddress : (value as Address)}
            >
              <div className="relative h-14 w-14 rounded-full">
                <EnsAvatar
                  className="h-14 w-14 rounded-full  object-cover"
                  name={ensAddress ? value : undefined}
                  address={value as Address}
                />
              </div>
            </BlockExplorerLink>
          </div>
        )}
        {ensAddress && (
          <span className="absolute bottom-1 left-6 text-xs font-light text-neutral-500">
            {ensAddress.slice(0, 8)}...{ensAddress.slice(-6)}
          </span>
        )}
        {ensName && (
          <span className="absolute bottom-1 left-6 text-xs font-light text-neutral-500">
            {ensName}
          </span>
        )}
      </div>
    )
  }
)

AccountInput.displayName = "AccountInput"
export { AccountInput }
