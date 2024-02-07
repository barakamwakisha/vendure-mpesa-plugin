import path from "path"

import { AdminUiPlugin } from "@vendure/admin-ui-plugin"
import { AssetServerPlugin } from "@vendure/asset-server-plugin"
import {
    DefaultLogger,
    DefaultSearchPlugin,
    LogLevel,
    mergeConfig
} from "@vendure/core"
import {
    SqljsInitializer,
    createTestEnvironment,
    registerInitializer,
    testConfig
} from "@vendure/testing"

import { config } from "./config"
import { initialData } from "./initial-data"
import { MpesaPlugin } from "../src/mpesa.plugin"
;(async () => {
    registerInitializer("sqljs", new SqljsInitializer("__data__"))

    const devConfig = mergeConfig(testConfig, {
        dbConnectionOptions: {
            synchronize: true
        },
        logger: new DefaultLogger({ level: LogLevel.Debug }),
        plugins: [
            AssetServerPlugin.init({
                assetUploadDir: path.join(__dirname, "__data__/assets"),
                route: "assets"
            }),
            DefaultSearchPlugin,
            AdminUiPlugin.init({
                port: 3050,
                route: "admin"
            }),
            MpesaPlugin.init({
                consumerKey: config.CONSUMER_KEY,
                consumerSecret: config.CONSUMER_SECRET,
                environment: config.ENVIRONMENT,
                shortCode: config.SHORTCODE,
                passkey: config.PASSKEY,
                shortCodeType: config.SHORTCODE_TYPE,
                vendureHost: config.VENDURE_HOST
            })
        ],
        apiOptions: {
            shopApiPlayground: true,
            adminApiPlayground: true
        }
    })

    const { server } = createTestEnvironment(devConfig)
    await server.init({
        initialData: {
            ...initialData,
            shippingMethods: [{ name: "Standard Shipping", price: 500 }]
        },
        productsCsvPath: path.join(__dirname, "product-import.csv")
    })
})()
