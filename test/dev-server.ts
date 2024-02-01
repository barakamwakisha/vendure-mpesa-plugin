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