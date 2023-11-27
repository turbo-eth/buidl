import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from "@radix-ui/react-icons"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { ExamplesNav } from "@/components/examples-nav"
import { Icons } from "@/components/icons"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { buttonVariants } from "@/registry/default/ui/button"
import { Separator } from "@/registry/default/ui/separator"

import AuthenticationPage from "./examples/authentication/page"

export default function IndexPage() {
  return (
    <div className="container relative">
      <PageHeader className="pb-8">
        <Link
          href="/docs/components"
          className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
        >
          ⚡️ <Separator className="mx-2 h-4" orientation="vertical" />{" "}
          <span className="sm:hidden">Build Web3 in Turbo Mode.</span>
          <span className="hidden sm:inline">Build Web3 in Turbo Mode</span>
          <ArrowRightIcon className="ml-1 h-4 w-4" />
        </Link>
        <PageHeaderHeading>A Flexible Web3 Component Library</PageHeaderHeading>
        <PageHeaderDescription>
          Collection of essential components for modern Web3 applications.{" "}
          <span className="font-bold">Save time and BUIDL faster.</span>
        </PageHeaderDescription>
        <div className="flex w-full items-center space-x-4 pb-8 pt-4 md:pb-10">
          <Link href="/docs" className={cn(buttonVariants())}>
            Get Started
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <Icons.gitHub className="mr-2 h-4 w-4" />
            GitHub
          </Link>
        </div>
      </PageHeader>
      <ExamplesNav className="[&>a:first-child]:text-primary" />
      <section className="space-y-8 overflow-hidden rounded-lg border-2 border-primary dark:border-muted md:hidden">
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </section>
      <section className="hidden md:block">
        <div className="overflow-hidden rounded-lg border bg-background shadow">
          <AuthenticationPage />
        </div>
      </section>
    </div>
  )
}
