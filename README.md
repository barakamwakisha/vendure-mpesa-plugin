![Vendure Mpesa Plugin](assets/logo.png)

# Vendure Mpesa Plugin

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/barakamwakisha/vendure-mpesa-plugin/test.yml)
&nbsp; ![NPM Version](https://img.shields.io/npm/v/vendure-mpesa-plugin)

Accept Mpesa payments on your Vendure store.

## Installation

```bash
yarn add vendure-mpesa-plugin
```

## Usage

1. Add the MpesaPlugin to your `VendureConfig` plugins array.

```ts
import { MpesaPlugin } from "vendure-mpesa-plugin"

export const config: VendureConfig = {
    // ...
    plugins: [
        // ...
        MpesaPlugin.init({
            consumerKey: "YOUR_CONSUMER_KEY",
            consumerSecret: "YOUR_CONSUMER_SECRET",
            shortCode: "YOUR_SHORT_CODE",
            shortCodeType: "SHORTCODE_TYPE",
            passkey: "YOUR_PASSKEY",
            environment: "APP_ENVIRONMENT",
            vendureHost: "https://yourvendurestore.com"
        })
    ]
}
```

2. Start the server and navigate to `Settings > Payment methods`. Add a new payment method, selecting `Lipa na Mpesa Online` as the handler.

> Note: Select the 'Check whether Mpesa supports the payment' eligibility checker when creating the payment method.

3. Calling the `addPaymentToOrder` mutation on the storefront with the corresponing payment method code will initiate an STK push to the customer's phone.

## Reference

-   [Mpesa Daraja API Docs](https://developer.safaricom.co.ke/Documentation)
