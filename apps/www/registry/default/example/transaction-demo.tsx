import {
  TransactionBlockHash,
  TransactionBlockNumber,
  TransactionFrom,
  TransactionGas,
  TransactionGasPrice,
  TransactionNonce,
  TransactionTo,
} from "@/registry/default/buidl/transaction"

const hash =
  "0x31728b7fe0f374ad886b9d46494de33e87da24ced34f6c28b7225e18bb4b8b1b"
export default function TransactionStatusDemo() {
  return (
    <div className="flex flex-col gap-y-3">
      <h2 className="text-lg font-bold">Transaction</h2>
      <div>
        <h3 className="text-base font-bold">From:</h3>
        <TransactionFrom className="mt-1" hash={hash} />
      </div>
      <div>
        <h3 className="text-base font-bold">To:</h3>
        <TransactionTo className="mt-1" hash={hash} />
      </div>
      <div>
        <h3 className="text-base font-bold">BlockHash:</h3>
        <TransactionBlockHash className="mt-1" hash={hash} />
      </div>
      <div className="flex items-center gap-x-6">
        <div>
          <h3 className="text-base font-bold">BlockNumber:</h3>
          <TransactionBlockNumber className="mt-1" hash={hash} />
        </div>
        <div>
          <h3 className="text-base font-bold">Gas:</h3>
          <TransactionGas className="mt-1" hash={hash} />
        </div>
        <div>
          <h3 className="text-base font-bold">Gas Price:</h3>
          <TransactionGasPrice className="mt-1" hash={hash} />
        </div>
        <div>
          <h3 className="text-base font-bold">Nonce:</h3>
          <TransactionNonce className="mt-1" hash={hash} />
        </div>
      </div>
    </div>
  )
}
