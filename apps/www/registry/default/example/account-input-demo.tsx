import { useState, useRef, useEffect } from "react"
import { AccountInput } from "@/registry/default/buidl/account-input"


export const ADDRESS_EXAMPLE = "0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31"

export default function AccountInputDemo() {
  const inputRefEnsName = useRef<HTMLInputElement>(null)
  const inputRefEnsAddress = useRef<HTMLInputElement>(null)
  
    const [address, setAddress] = useState<string>()

    useEffect(() => {
    if(inputRefEnsName.current) {
      inputRefEnsName.current.value = "vitalik.eth"
    }
    if(inputRefEnsAddress.current) {
      inputRefEnsAddress.current.value = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"
    }
  }, []);
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <h3 className="text-lg font-bold">Default</h3>
      <AccountInput  
    
      value={address}
      onChange={(e) => setAddress(e.target.value)}
      />

    <h3 className="text-lg font-bold">Ens Name Resolution</h3>
    <AccountInput
    ref={inputRefEnsName}
    value="vitalik.eth"
      />

      <h3 className="text-lg font-bold">Ens Address Resolution</h3>
    <AccountInput 
    ref={inputRefEnsAddress}
    value="0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045" />
    </div>
  )
}
