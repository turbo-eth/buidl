"use client"

import * as React from "react"

import { SignMessageButton } from "@/registry/default/buidl/sign-message-button"
import { Textarea } from "@/registry/default/ui/textarea"

export default function BalanceDemo() {
  const [message, setMessage] = React.useState<string>("")
  const [signature, setSignature] = React.useState<string>("")

  return (
    <div className="flex w-full max-w-[400px] flex-col gap-y-3">
      <h2 className="text-lg font-bold">Sign Message Button</h2>
      <h3 className="text-base font-bold">Connected address balance:</h3>
      <Textarea
        value={message}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setMessage(e.target.value)
        }
        className="mt-1"
      />
      <SignMessageButton
        onSuccess={setSignature}
        message={message}
        className="mt-1"
      />

      {signature && (
        <div className="w-full">
          <h3 className="text-base  font-bold">Signature:</h3>
          <p className="break-words">{signature}</p>
        </div>
      )}
    </div>
  )
}
