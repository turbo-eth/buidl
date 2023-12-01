import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-neutral-300/90 dark:bg-neutral-500/90",
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }
