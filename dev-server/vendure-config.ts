import path from "path"

import { AdminUiPlugin } from "@vendure/admin-ui-plugin"
import { AssetServerPlugin } from "@vendure/asset-server-plugin"
import {
    DefaultSchedulerPlugin,
    DefaultSearchPlugin,
    UuidIdStrategy,
    VendureConfig,
} from "@vendure/core"
import { compileUiExtensions } from "@vendure/ui-devkit/compiler"

import "dotenv/config"

import { MpesaPlugin } from "../src"

const apiPort = 3000

export const config: VendureConfig = {
    apiOptions: {
        port: apiPort,
        adminApiPath: "admin-api",
        shopApiPath: "shop-api",
        shopApiPlayground: true,
        adminApiPlayground: true,
    },
    authOptions: {
        tokenMethod: ["bearer", "cookie"],
        superadminCredentials: {
            identifier: "superadmin",
            password: "superadmin",
        },
    },
    dbConnectionOptions: {
        type: "better-sqlite3",
        synchronize: true,
        migrations: [path.join(__dirname, "../migrations/*.+(js|ts)")],
        logging: false,
        database: path.join(__dirname, "vendure.sqlite"),
    },
    entityOptions: {
        entityIdStrategy: new UuidIdStrategy(),
    },
    paymentOptions: {
        paymentMethodHandlers: [],
    },
    plugins: [
        MpesaPlugin,
        DefaultSearchPlugin,
        AdminUiPlugin.init({
            port: 3050,
            route: "admin",
            app: compileUiExtensions({
                command: "npm",
                devMode: true,
                outputPath: path.join(__dirname, "../__admin-ui"),
                extensions: [],
            }),
        }),
        AssetServerPlugin.init({
            route: "assets",
            assetUploadDir: path.join(__dirname, "assets"),
        }),
        DefaultSchedulerPlugin,
    ],
}
