import { Analytics } from "@/components/analytics"
import { ThemeProvider } from "@/components/providers"
import { WagmiProvider } from "@/components/providers/wagmi-provider"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import {
  Toaster as DefaultToaster,
  Toaster as NewYorkToaster,
} from "@/registry/default/ui/toaster"
import "@/styles/globals.css"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
    "WAGMI",
    "Web3",
    "Ethereum",
  ],
  authors: [
    {
      name: "DistrictLabs",
      url: "https://districtLabs.com",
    },
  ],
  creator: "DistrictLabs",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@districtLabs",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

interface RootLayoutProps {
  children: React.ReactNode
}

const queryClient = new QueryClient() 


export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <WagmiProvider>
              <QueryClientProvider client={queryClient}>
                <div className="relative flex min-h-screen flex-col">
                  <SiteHeader />
                  <div className="flex-1">{children}</div>
                  <SiteFooter />
                </div>
                </QueryClientProvider>
            </WagmiProvider>
            <TailwindIndicator />
          </ThemeProvider>
          <ThemeSwitcher />
          <Analytics />
          <NewYorkToaster />
          <DefaultToaster />
        </body>
      </html>
    </>
  )
}
