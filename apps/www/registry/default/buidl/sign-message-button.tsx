"use client"

import * as React from "react"
import { useSignMessage } from "wagmi"

import { ErrorMessage } from "@/registry/default/buidl/error-message"
import { Button, ButtonProps } from "@/registry/default/ui/button"

interface SignMessageButtonProps extends Omit<ButtonProps, "onCick"> {
  message: string
  onSuccess?: (signature: string) => void
}

const SignMessageButton = React.forwardRef<
  HTMLButtonElement,
  SignMessageButtonProps
>(({ message, onSuccess, className, children, disabled, ...props }, ref) => {
  const { isLoading, isError, error, signMessage } = useSignMessage({
    mutation: {
      onSuccess,
    },
  })

  return (
    <>
      <Button
        ref={ref}
        disabled={disabled || isLoading || message.length === 0}
        onClick={() => signMessage({ message })}
        className={className}
        {...props}
      >
        {isLoading ? "Check Wallet" : children ?? "Sign Message"}
      </Button>
      {isError && (
        <ErrorMessage
          error={error}
          defaultErrorMessage="Error while signing message"
        />
      )}
    </>
  )
})

SignMessageButton.displayName = "SignMessageButton"

export { SignMessageButton }
