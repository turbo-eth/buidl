"use client"

import * as React from "react"
import { useNetwork, type Address, type Chain } from "wagmi"
import { mainnet } from "wagmi/chains"

import { cn } from "@/lib/utils"

interface BlockExplorerLinkProps
  extends React.HTMLAttributes<HTMLAnchorElement> {
  chain?: Chain
  data: Address | undefined
  showBlockExplorerName?: boolean
  type?: "address" | "tx"
}

const BlockExplorerLink = React.forwardRef<
  HTMLAnchorElement,
  BlockExplorerLinkProps
>(
  (
    {
      chain: selectedChain,
      data,
      children,
      className,
      showBlockExplorerName,
      type = "address",
      ...props
    },
    ref
  ) => {
    const { chain: currentChain } = useNetwork()

    // Use mainnet as default chain
    const chain =
      selectedChain ?? (currentChain && !currentChain.unsupported)
        ? currentChain
        : mainnet
    const blockExplorer = chain?.blockExplorers?.default

    if (!data || !blockExplorer) return null

    return (
      <a
        ref={ref}
        className={cn(
          "overflow-x-auto font-medium underline-offset-2 hover:underline",
          className
        )}
        href={`${blockExplorer.url}/${type}/${data}`}
        rel="noreferrer"
        target="_blank"
        {...props}
      >
        {showBlockExplorerName ? blockExplorer.name : children ?? data}
      </a>
    )
  }
)

BlockExplorerLink.displayName = "BlockExplorerLink"

export { BlockExplorerLink }
