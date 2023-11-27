import { HTMLAttributes } from "react"
import { useAccount, usePublicClient, useQuery } from "wagmi"

type AccountNonceProps = Omit<HTMLAttributes<HTMLSpanElement>, "children">

export const AccountNonce = ({ className, ...props }: AccountNonceProps) => {
  const publicClient = usePublicClient()
  const { address } = useAccount()

  const { data: nonce } = useQuery(["wallet-nonce", address, publicClient], {
    queryFn: async () => {
      if (!publicClient || !address) return
      return await publicClient.getTransactionCount({
        address,
      })
    },
    enabled: !!address && !!publicClient,
  })

  return (
    <span className={className} {...props}>
      {nonce}
    </span>
  )
}
