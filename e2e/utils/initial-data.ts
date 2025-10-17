import { LanguageCode } from "@vendure/common/lib/generated-types"
import { InitialData } from "@vendure/core"

export const initialData: InitialData = {
    defaultLanguage: LanguageCode.en,
    defaultZone: "Africa",
    taxRates: [
        { name: "Standard Tax", percentage: 0 },
        { name: "Reduced Tax", percentage: 0 },
        { name: "Zero Tax", percentage: 0 }
    ],
    shippingMethods: [
        { name: "Standard Shipping", price: 500 },
        { name: "Express Shipping", price: 1000 }
    ],
    paymentMethods: [],
    countries: [
        { name: "Kenya", code: "KE", zone: "Africa" },
        { name: "South Africa", code: "ZA", zone: "Africa" },
        { name: "United States of America", code: "US", zone: "Americas" }
    ],
    collections: [
        {
            name: "Plants",
            filters: [
                {
                    code: "facet-value-filter",
                    args: { facetValueNames: ["plants"], containsAny: false }
                }
            ]
        }
    ]
}
