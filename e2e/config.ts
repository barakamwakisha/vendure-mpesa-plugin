import dotenv from "dotenv"
import { z } from "zod"

dotenv.config()

const envSchema = z.object({
    CONSUMER_KEY: z.string(),
    CONSUMER_SECRET: z.string(),
    SHORTCODE: z.string(),
    PASSKEY: z.string(),
    ENVIRONMENT: z.enum(["sandbox", "live"]),
    SHORTCODE_TYPE: z.enum(["till", "paybill"]),
    VENDURE_HOST: z.string(),
})

export const config = envSchema.parse(process.env)
