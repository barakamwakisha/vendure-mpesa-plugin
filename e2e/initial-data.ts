import { LanguageCode } from "@vendure/common/lib/generated-types"
import { InitialData } from "@vendure/core"

export const initialData: InitialData = {
    defaultLanguage: LanguageCode.en,
    defaultZone: "Africa",
    taxRates: [{ name: "VAT", percentage: 16 }],
    shippingMethods: [],
    countries: [
        { name: "Kenya", code: "KE", zone: "Africa" }
    ],
    collections: [
        {
            name: "Computers",
            filters: [
                {
                    code: "facet-value-filter",
                    args: { facetValueNames: ["computers"], containsAny: false }
                }
            ]
        }
    ],
    paymentMethods: []
}