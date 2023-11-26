import * as z from "zod"

export const registrySchema = z.array(
  z.object({
    name: z.string(),
    dependencies: z.array(z.string()).optional(),
    registryDependencies: z.array(z.string()).optional(),
    files: z.array(z.string()),
    folder: z.string().optional(),
    type: z.enum([
      "components:ui",
      "components:component",
      "components:example",
      "components:buidl",
    ]),
  })
)

export type Registry = z.infer<typeof registrySchema>
