import { HTMLAttributes } from "react"
import Link from "next/link"
import { Copy } from "lucide-react"
import { useNetwork, type Address as AddressType } from "wagmi"

import { cn } from "@/lib/utils"

import { toast } from "../ui/use-toast"

export interface AddressProps
  extends Omit<HTMLAttributes<HTMLElement>, "children"> {
  address: AddressType
  truncate?: boolean
  truncateAmount?: number
  linkEnabled?: boolean
  copyEnabled?: boolean
}

export const Address = ({
  address,
  className,
  truncate,
  truncateAmount = 4,
  linkEnabled,
  copyEnabled,
  ...props
}: AddressProps) => {
  const { chain } = useNetwork()
  const blockExplorerUrl = chain?.blockExplorers?.default.url
  const formattedAddress = truncate
    ? `${address.slice(0, truncateAmount + 2)}...${address.slice(
        -Number(truncateAmount)
      )}`
    : address

  if (linkEnabled && blockExplorerUrl) {
    const classes = cn("text-link", className)

    if (copyEnabled) {
      return (
        <span className="flex items-center">
          <Link
            className={classes}
            href={`${blockExplorerUrl}/address/${address}`}
            {...props}
          >
            {formattedAddress}
          </Link>
          {copyEnabled && (
            <button
              className="ml-2 opacity-70 transition-opacity hover:opacity-100"
              onClick={async () => {
                await navigator.clipboard.writeText(address)
                toast({
                  title: "Copied address",
                  description: "The address has been copied to your clipboard.",
                })
              }}
            >
              <span className="sr-only">Copy address</span>
              <Copy size={12} />
            </button>
          )}
        </span>
      )
    }

    return (
      <Link
        className={classes}
        href={`${blockExplorerUrl}/address/${address}`}
        {...props}
      >
        {formattedAddress}
      </Link>
    )
  }
  const classes = cn(className)

  if (copyEnabled) {
    return (
      <span className="">
        <span className={classes}>{formattedAddress}</span>
        {copyEnabled && (
          <button
            className="ml-2 opacity-70 transition-opacity hover:opacity-100"
            onClick={async () => {
              await navigator.clipboard.writeText(address)
              toast({
                title: "Copied address",
                description: "The address has been copied to your clipboard.",
              })
            }}
          >
            <span className="sr-only">Copy address</span>
            <Copy size={12} />
          </button>
        )}
      </span>
    )
  }

  return <span className={classes}>{formattedAddress}</span>
}
