"use client"

import * as React from "react"
import { useSignMessage } from "wagmi"

import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "@/registry/default/ui/button"

interface SignMessageButtonProps extends Omit<ButtonProps, "onCick"> {
  message: string
  onSuccess?: (signature: string) => void
}

const ErrorMessage = ({ error }: { error: Error | null }) => {
  return (
    <div className={cn("break-words text-sm font-medium text-red-500")}>
      {error?.message ?? "Error while signing message"}
    </div>
  )
}

const SignMessageButton = React.forwardRef<
  HTMLButtonElement,
  SignMessageButtonProps
>(({ message, onSuccess, className, children, disabled, ...props }, ref) => {
  const { isLoading, isError, error, signMessage } = useSignMessage({
    message,
    onSuccess,
  })

  return (
    <>
      <Button
        ref={ref}
        disabled={isLoading || disabled}
        onClick={() => signMessage()}
        className={className}
        {...props}
      >
        {isLoading ? "Check Wallet" : children ?? "Sign Message"}
      </Button>
      {isError && <ErrorMessage error={error} />}
    </>
  )
})

SignMessageButton.displayName = "SignMessageButton"

export { SignMessageButton }
