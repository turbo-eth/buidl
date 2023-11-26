import * as React from "react"
import { useEnsName } from "wagmi"

import { ADDRESS_ZERO } from "@/config/constants"
import { cn } from "@/lib/utils"

import { Address } from "./address"

type EnsName = React.HTMLAttributes<HTMLElement> & {
  address: `0x${string}`
  classNameEnsName?: string
  classNameAddress?: string
}

export const EnsName = ({
  classNameEnsName,
  classNameAddress,
  address,
}: EnsName) => {
  const classesEnsName = cn(classNameEnsName)
  const classesAddress = cn(classNameAddress)
  const {
    data: dataEnsName,
    isError: isErrorEnsName,
    isLoading: isLoadingEnsName,
    isSuccess: isSuccessEnsName,
  } = useEnsName({
    address: address as `0x${string}`,
  })

  if (!isSuccessEnsName)
    return (
      <Address address={address || ADDRESS_ZERO} className={classesAddress} />
    )

  return <span className={classesEnsName}>{dataEnsName}</span>
}
