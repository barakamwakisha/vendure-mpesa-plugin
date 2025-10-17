import { rm } from "node:fs/promises"
import path from "path"

import {
    SqljsInitializer,
    createTestEnvironment,
    registerInitializer,
} from "@vendure/testing"

import { initialData, testConfig, testPaymentMethod } from "./utils"
import { MpesaPlugin } from "../src"

const TEST_DB_DIR = path.join(__dirname, "../__test_db__")

describe("Mpesa Plugin", function () {
    const { server, adminClient, shopClient } = createTestEnvironment({
        ...testConfig(4000),
        plugins: [MpesaPlugin],
        paymentOptions: {
            paymentMethodHandlers: [testPaymentMethod],
        },
    })

    beforeAll(async () => {
        registerInitializer("sqljs", new SqljsInitializer(TEST_DB_DIR))

        await server.init({
            productsCsvPath: path.join(__dirname, "./utils/products.csv"),
            initialData: {
                ...initialData,
                paymentMethods: [
                    {
                        name: testPaymentMethod.code,
                        handler: {
                            code: testPaymentMethod.code,
                            arguments: [],
                        },
                    },
                ],
            },
            customerCount: 2,
        })
        await adminClient.asSuperAdmin()
    }, 60000)

    afterAll(async () => {
        await server.destroy()
        await rm(TEST_DB_DIR, { recursive: true })
    })
})
