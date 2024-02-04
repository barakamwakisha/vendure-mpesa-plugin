import path from "path";
import {
    SqljsInitializer,
    createTestEnvironment,
    registerInitializer,
    testConfig
} from "@vendure/testing";
import { AdminUiPlugin } from "@vendure/admin-ui-plugin";
import { AssetServerPlugin } from "@vendure/asset-server-plugin";
import {
    DefaultLogger,
    DefaultSearchPlugin,
    LogLevel,
    mergeConfig
} from "@vendure/core";
import { initialData } from "./initial-data";
import { MpesaPlugin } from '../src/mpesa.plugin';

(async () => {
    registerInitializer("sqljs", new SqljsInitializer("__data__"));

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
                route: "admin",
            }),
            MpesaPlugin.init({
                consumerKey: "Ta1hqIkAmXonoestpC0j1SUayJVFsGzHhXqgL6sfCXfSP0IV",
                consumerSecret: "jTxyei8gATx5FysQcDUYKVajLgryTGBzxwwxGGnM5ovg1qunAb1jlI59etVuKZgg",
                environment: "sandbox",
                shortCode: "174379",
                passkey: "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919",
                shortCodeType: "paybill",
                vendureHost: "https://d9e6-197-232-92-152.ngrok-free.app"
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
            shippingMethods: [
                { name: "Standard Shipping", price: 500 },
            ]
        },
        productsCsvPath: path.join(
            __dirname,
            "product-import.csv"
        )
    })

})()