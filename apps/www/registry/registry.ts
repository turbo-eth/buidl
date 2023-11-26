import { Registry } from "@/registry/schema"

const ui: Registry = [
  {
    name: "address",
    type: "components:buidl",
    dependencies: ["wagmi"],
    files: ["buidl/address.tsx"],
  },
  {
    name: "blockie",
    type: "components:buidl",
    dependencies: ["wagmi"],
    files: ["buidl/blockie.tsx"],
  },
  {
    name: "ens-avatar",
    type: "components:buidl",
    dependencies: ["wagmi"],
    files: ["buidl/ens-avatar.tsx"],
  },
  {
    name: "ens-name",
    type: "components:buidl",
    dependencies: ["wagmi"],
    files: ["buidl/ens-name.tsx"],
  },
  {
    name: "wallet-connect",
    type: "components:buidl",
    dependencies: ["wagmi"],
    files: ["buidl/wallet-connect.tsx"],
  },
  {
    name: "wallet-manage",
    type: "components:buidl",
    dependencies: ["wagmi"],
    files: ["buidl/wallet-manage.tsx"],
  },
  {
    name: "network-manage",
    type: "components:buidl",
    dependencies: ["wagmi"],
    files: ["buidl/network-manage.tsx"],
  },
  {
    name: "erc20-balance",
    type: "components:buidl",
    folder: "erc20",
    dependencies: ["wagmi"],
    files: ["buidl/erc20/erc20-balance.tsx"],
  },
  {
    name: "erc20-image",
    type: "components:buidl",
    folder: "erc20",
    dependencies: ["wagmi"],
    files: ["buidl/erc20/erc20-image.tsx"],
  },
  {
    name: "erc20-name",
    type: "components:buidl",
    folder: "erc20",
    dependencies: ["wagmi"],
    files: ["buidl/erc20/erc20-name.tsx"],
  },
  {
    name: "erc20-symbol",
    type: "components:buidl",
    folder: "erc20",
    dependencies: ["wagmi"],
    files: ["buidl/erc20/erc20-symbol.tsx"],
  },
  {
    name: "erc20-select",
    type: "components:buidl",
    folder: "erc20",
    dependencies: ["wagmi"],
    files: ["buidl/erc20/erc20-select.tsx"],
  },
  {
    name: "erc20-select-and-amount",
    type: "components:buidl",
    folder: "erc20",
    dependencies: ["wagmi"],
    files: ["buidl/erc20/erc20-select-and-amount.tsx"],
  },
  {
    name: "accordion",
    type: "components:ui",
    dependencies: ["wagmi"],
    files: ["ui/accordion.tsx"],
  },
]

const example: Registry = [
  {
    name: "address-demo",
    type: "components:example",
    registryDependencies: ["address"],
    files: ["example/address-demo.tsx"],
  },
  {
    name: "blockie-demo",
    type: "components:example",
    registryDependencies: ["blockie"],
    files: ["example/blockie-demo.tsx"],
  },
  {
    name: "ens-avatar-demo",
    type: "components:example",
    registryDependencies: ["ens-avatar"],
    files: ["example/ens-avatar-demo.tsx"],
  },
  {
    name: "ens-name-demo",
    type: "components:example",
    registryDependencies: ["ens-name"],
    files: ["example/ens-name-demo.tsx"],
  },
  {
    name: "account-address-demo",
    type: "components:example",
    registryDependencies: ["account-address"],
    files: ["example/account-address-demo.tsx"],
  },
  {
    name: "account-blockie-demo",
    type: "components:example",
    registryDependencies: ["account-blockie"],
    files: ["example/account-blockie-demo.tsx"],
  },
  {
    name: "account-ens-avatar-demo",
    type: "components:example",
    registryDependencies: ["account-ens-avatar"],
    files: ["example/account-ens-avatar-demo.tsx"],
  },
  {
    name: "account-ens-name-demo",
    type: "components:example",
    registryDependencies: ["account-ens-name"],
    files: ["example/account-ens-name-demo.tsx"],
  },
  {
    name: "wallet-connect-demo",
    type: "components:example",
    registryDependencies: ["wallet-connect"],
    files: ["example/wallet-connect-demo.tsx"],
  },
  {
    name: "wallet-manage-demo",
    type: "components:example",
    registryDependencies: ["wallet-manage"],
    files: ["example/wallet-manage-demo.tsx"],
  },
  {
    name: "network-manage-demo",
    type: "components:example",
    registryDependencies: ["network-manage"],
    files: ["example/network-manage-demo.tsx"],
  },
  {
    name: "erc20-balance-demo",
    type: "components:example",
    registryDependencies: ["erc20-balance"],
    files: ["example/erc20-balance-demo.tsx"],
  },
  {
    name: "erc20-image-demo",
    type: "components:example",
    registryDependencies: ["erc20-image"],
    files: ["example/erc20-image-demo.tsx"],
  },
  {
    name: "erc20-name-demo",
    type: "components:example",
    registryDependencies: ["erc20-name"],
    files: ["example/erc20-name-demo.tsx"],
  },
  {
    name: "erc20-symbol-demo",
    type: "components:example",
    registryDependencies: ["erc20-symbol"],
    files: ["example/erc20-symbol-demo.tsx"],
  },
  {
    name: "erc20-select-demo",
    type: "components:example",
    registryDependencies: ["erc20-select"],
    files: ["example/erc20-select-demo.tsx"],
  },
  {
    name: "erc20-select-and-amount-demo",
    type: "components:example",
    registryDependencies: ["erc20-select-and-amount"],
    files: ["example/erc20-select-and-amount-demo.tsx"],
  },
  {
    name: "accordion-demo",
    type: "components:example",
    registryDependencies: ["accordion"],
    files: ["example/accordion-demo.tsx"],
  },
]

export const registry: Registry = [...ui, ...example]
