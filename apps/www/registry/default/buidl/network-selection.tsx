import { useState, type HTMLAttributes } from "react"
import { ChevronDown } from "lucide-react"
import { Chain, useNetwork, useSwitchNetwork } from "wagmi"
import {
  arbitrum,
  base,
  gnosis,
  mainnet,
  optimism,
  polygon,
} from "wagmi/chains"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/default/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu"

const defaultChains = [arbitrum, base, gnosis, mainnet, optimism, polygon]

interface NetworkSelectionProps extends HTMLAttributes<HTMLElement> {
  chainId?: number
  useCurrentNetwork?: boolean
  initialChainId?: number
  selectNetworkLabel?: string
  chains?: Chain[]
  onValueChange?: (chainId: number) => void
}

export const NetworkSelection = ({
  className,
  selectNetworkLabel = "Select Network",
  useCurrentNetwork = true,
  chains = defaultChains,
  initialChainId,
  onValueChange,
  ...props
}: NetworkSelectionProps) => {
  const [selectedChain, setSelectedChain] = useState<Chain>(
    chains.find((chain) => chain.id === initialChainId) || chains[0]
  )
  const { chain } = useNetwork()
  const { switchNetwork } = useSwitchNetwork()

  const handleSwitchNetwork = (chain: Chain) => {
    if (useCurrentNetwork) {
      switchNetwork?.(chain.id)
    } else {
      setSelectedChain(chain)
    }
    onValueChange?.(chain.id)
  }

  return (
    <div className={cn(className)} {...props}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="gap-x-2">
            {useCurrentNetwork ? (
              chain ? (
                <span className="text-sm font-semibold">{chain?.name}</span>
              ) : (
                <> {selectNetworkLabel}</>
              )
            ) : selectedChain ? (
              <span className="text-sm font-semibold">
                {selectedChain?.name}
              </span>
            ) : (
              <>{selectNetworkLabel}</>
            )}
            <ChevronDown className="text-gray-400" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{selectNetworkLabel}</DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-neutral-200" />
          {chains.length > 0 &&
            chains.map((chain) => (
              <DropdownMenuItem
                key={chain.id}
                className="flex gap-x-2 focus:bg-neutral-300/80 dark:focus:bg-neutral-800"
                onClick={() => handleSwitchNetwork(chain)}
              >
                <span>
                  {chain.name} (<span className="text-xs">{chain.id}</span>)
                </span>
              </DropdownMenuItem>
            ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
