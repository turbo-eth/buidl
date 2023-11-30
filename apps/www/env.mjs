import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {},
  client: {
    NEXT_PUBLIC_USE_PUBLIC_PROVIDER: z.enum(["true", "false"]).default("true"),
    NEXT_PUBLIC_ALCHEMY_API_KEY: z.string().min(1).optional(),
    NEXT_PUBLIC_INFURA_API_KEY: z.string().min(1).optional(),
    NEXT_PUBLIC_SITE_URL: z.string().url().optional(),
    NEXT_PUBLIC_PROD_NETWORKS_DEV: z.enum(["true", "false"]).default("false"),
  },
  runtimeEnv: {
    NEXT_PUBLIC_USE_PUBLIC_PROVIDER:
      process.env.NEXT_PUBLIC_USE_PUBLIC_PROVIDER,
    NEXT_PUBLIC_ALCHEMY_API_KEY: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
    NEXT_PUBLIC_INFURA_API_KEY: process.env.NEXT_PUBLIC_INFURA_API_KEY,
    NEXT_PUBLIC_PROD_NETWORKS_DEV: process.env.NEXT_PUBLIC_PROD_NETWORKS_DEV,
  },
})
