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
  "0xd68e5ad4a286fd7665cc43cb1d69ad485d761f8c1810fef54284af265edefe57"
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
