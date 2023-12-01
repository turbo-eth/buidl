import { BlockExplorerLink } from "@/registry/default/buidl/block-explorer-link"
import { TransactionStatus } from "@/registry/default/buidl/transaction-status"

export default function TransactionStatusDemo() {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <h3 className="text-lg font-bold">Transaction Status</h3>
      <TransactionStatus hash="0x3e2ba590d81b64282ce7a3b20b1913b4c6dde05345a058b18bfef5717bc09c5e" />

      <h3 className="text-lg font-bold">
        Transaction Status With Block Explorer Link
      </h3>
      <TransactionStatus hash="0x3e2ba590d81b64282ce7a3b20b1913b4c6dde05345a058b18bfef5717bc09c5e">
        <BlockExplorerLink
          showBlockExplorerName
          type="tx"
          data="0x3e2ba590d81b64282ce7a3b20b1913b4c6dde05345a058b18bfef5717bc09c5e"
        />
      </TransactionStatus>
    </div>
  )
}
