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
      ],
    },
    {
      title: "Installation",
      items: [
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
          title: "(WIP) Wallet Manage",
          href: "/docs/components/wallet-manage",
          items: [],
        },
        {
          title: "(WIP) Network Manage",
          href: "/docs/components/network-manage",
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
          title: "Block Explorer Link",
          href: "/docs/components/block-explorer-link",
          items: [],
        },
        {
          title: "Transaction Status",
          href: "/docs/components/transaction-status",
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
          title: "Image IPFS",
          href: "/docs/components/image-ipfs",
          items: [],
        },
      ],
    },
    {
      title: "Account",
      items: [
        {
          title: "Account Address",
          href: "/docs/components/account-address",
          items: [],
        },
        {
          title: "Account Balance",
          href: "/docs/components/account-balance",
          items: [],
        },
        {
          title: "Account Blockie",
          href: "/docs/components/account-blockie",
          items: [],
        },
        {
          title: "Account ENS Avatar",
          href: "/docs/components/account-ens-avatar",
          items: [],
        },
        {
          title: "Account ENS Name",
          href: "/docs/components/account-ens-name",
          items: [],
        },
        {
          title: "Account Nonce",
          href: "/docs/components/account-nonce",
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
          title: "ERC20 Image",
          href: "/docs/components/erc20-image",
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
          title: "ERC20 Select",
          href: "/docs/components/erc20-select",
          items: [],
        },
        {
          title: "ERC20 Select & Amount",
          href: "/docs/components/erc20-select-and-amount",
          items: [],
        },
      ],
    },
  ],
}
