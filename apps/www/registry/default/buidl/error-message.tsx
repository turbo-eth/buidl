import * as React from "react"

import { cn } from "@/lib/utils"

const ErrorMessage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    error: Error | null
    defaultErrorMessage?: string
  }
>(
  (
    { error, className, defaultErrorMessage = "An error occurred", ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "break-words text-sm font-medium text-red-500",
          className
        )}
        {...props}
      >
        {error?.message ?? defaultErrorMessage}
      </div>
    )
  }
)

ErrorMessage.displayName = "ErrorMessage"

export { ErrorMessage }
