import { Metadata } from "next"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Address } from "@/registry/default/buidl/address"
import { Blockie } from "@/registry/default/buidl/blockie"
import { IsWalletConnected } from "@/registry/default/buidl/is-wallet-connected"
import { IsWalletDisconnected } from "@/registry/default/buidl/is-wallet-disconnected"
import { WalletConnect } from "@/registry/default/buidl/wallet-connect"
import { WalletDisconnect } from "@/registry/default/buidl/wallet-disconnect"
import { Button, buttonVariants } from "@/registry/default/ui/button"

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
}

export default function AuthenticationPage() {
  return (
    <>
      <div className="p-10 md:hidden">
        View this page on a larger screen to see the full example.
      </div>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/examples/authentication"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Login
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Degen Inc
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;I always degenerate to chocolate and coffee.&rdquo;
              </p>
              <footer className="text-sm">Mandy Ingber</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <IsWalletDisconnected>
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                  Connect Wallet to Continue
                </h1>
                <p className="text-sm text-muted-foreground">
                  Enter your email below to create your account
                </p>
              </div>
              <WalletConnect />
              <p className="px-8 text-center text-sm text-muted-foreground">
                By clicking continue, you agree to our{" "}
                <Link
                  href="/terms"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </IsWalletDisconnected>
            <IsWalletConnected>
              <div className="flex items-center justify-center gap-x-2">
                <Blockie />
                <Button size={"sm"} className="rounded-full">
                  <Address truncate link />
                </Button>
                <WalletDisconnect variant={"ghost"} size={"sm"} />
              </div>
            </IsWalletConnected>
          </div>
        </div>
      </div>
    </>
  )
}
