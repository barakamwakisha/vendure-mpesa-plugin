import swc from "unplugin-swc"
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from "vitest/config"

export default defineConfig({
    root: __dirname,
    cacheDir: "./node_modules/.vite/vendure-mpesa-plugin",
    plugins: [
        tsconfigPaths(),
        swc.vite({
            jsc: {
                transform: {
                    useDefineForClassFields: false
                }
            }
        })
    ],
    test: {
        watch: false,
        globals: true,
        environment: "node",
        include: ["**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
        reporters: ["default"],
        coverage: {
            reportsDirectory: "./test-output/vitest/coverage",
            provider: "v8"
        }
    }
})
