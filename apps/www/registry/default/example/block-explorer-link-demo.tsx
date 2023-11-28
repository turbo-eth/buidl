import { BlockExplorerLink } from "@/registry/default/buidl/block-explorer-link"

export default function BlockExploreLinkDemo() {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="flex flex-col gap-y-2">
        <h3 className="text-lg font-bold">Address Link</h3>
        <h4 className="text-sm font-bold">Default</h4>
        <BlockExplorerLink
          data={"0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31"}
        />

        <h4 className="text-sm font-bold">Show Block Explorer Name</h4>
        <BlockExplorerLink
          data={"0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31"}
          showBlockExplorerName
        />

        <h4 className="text-sm font-bold">With Children</h4>
        <BlockExplorerLink data={"0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31"}>
          Go to Block Explorer
        </BlockExplorerLink>
      </div>
      <div className="flex flex-col gap-y-2">
        <h3 className="text-lg font-bold">Transaction Link</h3>
        <BlockExplorerLink
          type="tx"
          data="0x827069d50d3a5ec0d19327f4b1bb1ecfbe939ef26bc3b6cc2dae5a1574f1e6f8"
        />
      </div>
    </div>
  )
}
