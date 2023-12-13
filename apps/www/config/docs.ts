import { MainNavItem, SidebarNavItem } from "types/nav"

interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Components",
      href: "/docs/components/wallet-connect",
    },
    {
      title: "GitHub",
      href: "https://github.com/turboeth/buidl",
      external: true,
    },
    {
      title: "Twitter",
      href: "https://twitter.com/districtFi",
      external: true,
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        },
        {
          title: "components.json",
          href: "/docs/components-json",
          items: [],
        },
        {
          title: "CLI",
          href: "/docs/cli",
          items: [],
        },
      ],
    },
    {
      title: "Installation",
      items: [
        {
          title: "Next.js",
          href: "/docs/installation/next",
          items: [],
        },
        {
          title: "Vite",
          href: "/docs/installation/vite",
          items: [],
        },
        {
          title: "Remix",
          href: "/docs/installation/remix",
          items: [],
        },
        {
          title: "Gatsby",
          href: "/docs/installation/gatsby",
          items: [],
        },
        {
          title: "Astro",
          href: "/docs/installation/astro",
          items: [],
        },
        {
          title: "Laravel",
          href: "/docs/installation/laravel",
          items: [],
        },
        {
          title: "Manual",
          href: "/docs/installation/manual",
          items: [],
        },
      ],
    },
    {
      title: "Wallet/Network",
      items: [
        {
          title: "Wallet Connect",
          href: "/docs/components/wallet-connect",
          items: [],
        },
        {
          title: "Wallet Disconnect",
          href: "/docs/components/wallet-disconnect",
          items: [],
        },
        {
          title: "Is Wallet Connected",
          href: "/docs/components/is-wallet-connected",
          items: [],
        },
        {
          title: "Is Wallet Disconnected",
          href: "/docs/components/is-wallet-disconnected",
          items: [],
        },
        {
          title: "Network Selection",
          href: "/docs/components/network-selection",
          items: [],
        },
      ],
    },
    {
      title: "Primitives",
      items: [
        {
          title: "Address",
          href: "/docs/components/address",
          items: [],
        },
        {
          title: "Balance",
          href: "/docs/components/balance",
          items: [],
        },
        {
          title: "Block Explorer Link",
          href: "/docs/components/block-explorer-link",
          items: [],
        },
        {
          title: "Block Number",
          href: "/docs/components/block-number",
          items: [],
        },
        {
          title: "Nonce",
          href: "/docs/components/nonce",
          items: [],
        },
        {
          title: "Transaction",
          href: "/docs/components/transaction",
          items: [],
        },
        {
          title: "Transaction Status",
          href: "/docs/components/transaction-status",
          items: [],
        },
        {
          title: "Fee Data",
          href: "/docs/components/fee-data",
          items: [],
        },
        {
          title: "Sign Message Button",
          href: "/docs/components/sign-message-button",
          items: [],
        },
        {
          title: "Blockie",
          href: "/docs/components/blockie",
          items: [],
        },
        {
          title: "ENS Avatar",
          href: "/docs/components/ens-avatar",
          items: [],
        },
        {
          title: "ENS Name",
          href: "/docs/components/ens-name",
          items: [],
        },
        {
          title: "ENS Address",
          href: "/docs/components/ens-address",
          items: [],
        },
        {
          title: "Image IPFS",
          href: "/docs/components/image-ipfs",
          items: [],
        },
      ],
    },
    {
      title: "ERC20",
      items: [
        {
          title: "ERC20 Balance",
          href: "/docs/components/erc20-balance",
          items: [],
        },
        {
          title: "ERC20 Decimals",
          href: "/docs/components/erc20-decimals",
          items: [],
        },
        {
          title: "ERC20 Name",
          href: "/docs/components/erc20-name",
          items: [],
        },
        {
          title: "ERC20 Symbol",
          href: "/docs/components/erc20-symbol",
          items: [],
        },
        {
          title: "ERC20 Total Supply",
          href: "/docs/components/erc20-total-supply",
          items: [],
        },
        {
          title: "ERC20 Select",
          href: "/docs/components/erc20-select",
          items: [],
        },
        {
          title: "ERC20 Select and Amount",
          href: "/docs/components/erc20-select-and-amount",
          items: [],
        },
      ],
    },
    {
      title: "ERC721",
      items: [
        {
          title: "ERC721 Name",
          href: "/docs/components/erc721-name",
          items: [],
        },
        {
          title: "ERC721 Symbol",
          href: "/docs/components/erc721-symbol",
          items: [],
        },
        {
          title: "ERC721 Owner Of",
          href: "/docs/components/erc721-owner-of",
          items: [],
        },
        {
          title: "ERC721 Total Supply",
          href: "/docs/components/erc721-total-supply",
          items: [],
        },
        {
          title: "ERC721 Token URI",
          href: "/docs/components/erc721-token-uri",
          items: [],
        },
        {
          title: "ERC721 Metadata",
          href: "/docs/components/erc721-metadata",
          items: [],
        },
      ],
    },
    {
      title: "Miscellaneous",
      items: [
        {
          title: "Error Message",
          href: "/docs/components/error-message",
          items: [],
        },
      ],
    },
  ],
}
