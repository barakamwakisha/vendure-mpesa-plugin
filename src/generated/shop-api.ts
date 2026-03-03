/* eslint-disable */
/* prettier-ignore */

/** An IntrospectionQuery representation of your schema.
 *
 * @remarks
 * This is an introspection of your schema saved as a file by GraphQLSP.
 * You may import it to create a `graphql()` tag function with `gql.tada`
 * by importing it and passing it to `initGraphQLTada<>()`.
 *
 * @example
 * ```
 * import { initGraphQLTada } from 'gql.tada';
 * import type { introspection } from './introspection';
 *
 * export const graphql = initGraphQLTada<{
 *   introspection: typeof introspection;
 *   scalars: {
 *     DateTime: string;
 *     Json: any;
 *   };
 * }>();
 * ```
 */
const introspection = {
  "name": "shop-api",
  "__schema": {
    "queryType": {
      "name": "Query"
    },
    "mutationType": {
      "name": "Mutation"
    },
    "subscriptionType": null,
    "types": [
      {
        "kind": "UNION",
        "name": "ActiveOrderResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "NoActiveOrderError"
          },
          {
            "kind": "OBJECT",
            "name": "Order"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AddItemInput",
        "inputFields": [
          {
            "name": "productVariantId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            }
          },
          {
            "name": "quantity",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "UNION",
        "name": "AddPaymentToOrderResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "IneligiblePaymentMethodError"
          },
          {
            "kind": "OBJECT",
            "name": "NoActiveOrderError"
          },
          {
            "kind": "OBJECT",
            "name": "Order"
          },
          {
            "kind": "OBJECT",
            "name": "OrderPaymentStateError"
          },
          {
            "kind": "OBJECT",
            "name": "OrderStateTransitionError"
          },
          {
            "kind": "OBJECT",
            "name": "PaymentDeclinedError"
          },
          {
            "kind": "OBJECT",
            "name": "PaymentFailedError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Address",
        "fields": [
          {
            "name": "city",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "company",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "country",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Country"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "customFields",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "defaultBillingAddress",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "defaultShippingAddress",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "fullName",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "phoneNumber",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "postalCode",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "province",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "streetLine1",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "streetLine2",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Adjustment",
        "fields": [
          {
            "name": "adjustmentSource",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "amount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "data",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "AdjustmentType"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "AdjustmentType",
        "enumValues": [
          {
            "name": "PROMOTION",
            "isDeprecated": false
          },
          {
            "name": "DISTRIBUTED_ORDER_PROMOTION",
            "isDeprecated": false
          },
          {
            "name": "OTHER",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "AlreadyLoggedInError",
        "fields": [
          {
            "name": "errorCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "ApplyCouponCodeResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "CouponCodeExpiredError"
          },
          {
            "kind": "OBJECT",
            "name": "CouponCodeInvalidError"
          },
          {
            "kind": "OBJECT",
            "name": "CouponCodeLimitError"
          },
          {
            "kind": "OBJECT",
            "name": "Order"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Asset",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "customFields",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "fileSize",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "focalPoint",
            "type": {
              "kind": "OBJECT",
              "name": "Coordinate"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "height",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "mimeType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "preview",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "source",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "tags",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Tag"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "AssetType"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "width",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "AssetList",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Asset"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "totalItems",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "PaginatedList"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "AssetType",
        "enumValues": [
          {
            "name": "IMAGE",
            "isDeprecated": false
          },
          {
            "name": "VIDEO",
            "isDeprecated": false
          },
          {
            "name": "BINARY",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AuthenticationInput",
        "inputFields": [
          {
            "name": "native",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NativeAuthInput"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "AuthenticationMethod",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "strategy",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "AuthenticationResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "CurrentUser"
          },
          {
            "kind": "OBJECT",
            "name": "InvalidCredentialsError"
          },
          {
            "kind": "OBJECT",
            "name": "NotVerifiedError"
          }
        ]
      },
      {
        "kind": "SCALAR",
        "name": "Boolean"
      },
      {
        "kind": "OBJECT",
        "name": "BooleanCustomFieldConfig",
        "fields": [
          {
            "name": "deprecated",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "deprecationReason",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "description",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "internal",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "label",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "list",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "nullable",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "readonly",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "requiresPermission",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "Permission"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "ui",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "CustomField"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "BooleanListOperators",
        "inputFields": [
          {
            "name": "inList",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "BooleanOperators",
        "inputFields": [
          {
            "name": "eq",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "isNull",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "BooleanStructFieldConfig",
        "fields": [
          {
            "name": "description",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "label",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "list",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "ui",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "StructField"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Channel",
        "fields": [
          {
            "name": "availableCurrencyCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "CurrencyCode"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "availableLanguageCodes",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "LanguageCode"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "code",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "currencyCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "CurrencyCode"
              }
            },
            "args": [],
            "isDeprecated": true
          },
          {
            "name": "customFields",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "defaultCurrencyCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "CurrencyCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "defaultLanguageCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "defaultShippingZone",
            "type": {
              "kind": "OBJECT",
              "name": "Zone"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "defaultTaxZone",
            "type": {
              "kind": "OBJECT",
              "name": "Zone"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "outOfStockThreshold",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "pricesIncludeTax",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "seller",
            "type": {
              "kind": "OBJECT",
              "name": "Seller"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "token",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "trackInventory",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Collection",
        "fields": [
          {
            "name": "assets",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Asset"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "breadcrumbs",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CollectionBreadcrumb"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "children",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Collection"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "customFields",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "featuredAsset",
            "type": {
              "kind": "OBJECT",
              "name": "Asset"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "filters",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ConfigurableOperation"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "languageCode",
            "type": {
              "kind": "ENUM",
              "name": "LanguageCode"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "parent",
            "type": {
              "kind": "OBJECT",
              "name": "Collection"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "parentId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "position",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "productVariantCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "productVariants",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ProductVariantList"
              }
            },
            "args": [
              {
                "name": "options",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProductVariantListOptions"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "slug",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "translations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CollectionTranslation"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CollectionBreadcrumb",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "slug",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CollectionFilterParameter",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IDOperators"
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateOperators"
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateOperators"
            }
          },
          {
            "name": "languageCode",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators"
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators"
            }
          },
          {
            "name": "slug",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators"
            }
          },
          {
            "name": "position",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberOperators"
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators"
            }
          },
          {
            "name": "parentId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IDOperators"
            }
          },
          {
            "name": "productVariantCount",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberOperators"
            }
          },
          {
            "name": "_and",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CollectionFilterParameter"
                }
              }
            }
          },
          {
            "name": "_or",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CollectionFilterParameter"
                }
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "CollectionList",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Collection"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "totalItems",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "PaginatedList"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CollectionListOptions",
        "inputFields": [
          {
            "name": "topLevelOnly",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "skip",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          },
          {
            "name": "take",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          },
          {
            "name": "sort",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CollectionSortParameter"
            }
          },
          {
            "name": "filter",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CollectionFilterParameter"
            }
          },
          {
            "name": "filterOperator",
            "type": {
              "kind": "ENUM",
              "name": "LogicalOperator"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "CollectionResult",
        "fields": [
          {
            "name": "collection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Collection"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CollectionSortParameter",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "slug",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "position",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "parentId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "productVariantCount",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "CollectionTranslation",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "languageCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "slug",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ConfigArg",
        "fields": [
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "value",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ConfigArgDefinition",
        "fields": [
          {
            "name": "defaultValue",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "label",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "list",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "required",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "ui",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ConfigArgInput",
        "inputFields": [
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            }
          },
          {
            "name": "value",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "ConfigurableOperation",
        "fields": [
          {
            "name": "args",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ConfigArg"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "code",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ConfigurableOperationDefinition",
        "fields": [
          {
            "name": "args",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ConfigArgDefinition"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "code",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ConfigurableOperationInput",
        "inputFields": [
          {
            "name": "code",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            }
          },
          {
            "name": "arguments",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ConfigArgInput"
                  }
                }
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "Coordinate",
        "fields": [
          {
            "name": "x",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "y",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Country",
        "fields": [
          {
            "name": "code",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "customFields",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "enabled",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "languageCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "parent",
            "type": {
              "kind": "INTERFACE",
              "name": "Region"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "parentId",
            "type": {
              "kind": "SCALAR",
              "name": "ID"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "translations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "RegionTranslation"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          },
          {
            "kind": "INTERFACE",
            "name": "Region"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CountryList",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Country"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "totalItems",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "PaginatedList"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CouponCodeExpiredError",
        "fields": [
          {
            "name": "couponCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "errorCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CouponCodeInvalidError",
        "fields": [
          {
            "name": "couponCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "errorCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CouponCodeLimitError",
        "fields": [
          {
            "name": "couponCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "errorCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "limit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CreateAddressInput",
        "inputFields": [
          {
            "name": "fullName",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "company",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "streetLine1",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            }
          },
          {
            "name": "streetLine2",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "city",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "province",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "postalCode",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "countryCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            }
          },
          {
            "name": "phoneNumber",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "defaultShippingAddress",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "defaultBillingAddress",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "customFields",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CreateCustomerInput",
        "inputFields": [
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "firstName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            }
          },
          {
            "name": "lastName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            }
          },
          {
            "name": "phoneNumber",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "emailAddress",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            }
          },
          {
            "name": "customFields",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "ENUM",
        "name": "CurrencyCode",
        "enumValues": [
          {
            "name": "AED",
            "isDeprecated": false
          },
          {
            "name": "AFN",
            "isDeprecated": false
          },
          {
            "name": "ALL",
            "isDeprecated": false
          },
          {
            "name": "AMD",
            "isDeprecated": false
          },
          {
            "name": "ANG",
            "isDeprecated": false
          },
          {
            "name": "AOA",
            "isDeprecated": false
          },
          {
            "name": "ARS",
            "isDeprecated": false
          },
          {
            "name": "AUD",
            "isDeprecated": false
          },
          {
            "name": "AWG",
            "isDeprecated": false
          },
          {
            "name": "AZN",
            "isDeprecated": false
          },
          {
            "name": "BAM",
            "isDeprecated": false
          },
          {
            "name": "BBD",
            "isDeprecated": false
          },
          {
            "name": "BDT",
            "isDeprecated": false
          },
          {
            "name": "BGN",
            "isDeprecated": false
          },
          {
            "name": "BHD",
            "isDeprecated": false
          },
          {
            "name": "BIF",
            "isDeprecated": false
          },
          {
            "name": "BMD",
            "isDeprecated": false
          },
          {
            "name": "BND",
            "isDeprecated": false
          },
          {
            "name": "BOB",
            "isDeprecated": false
          },
          {
            "name": "BRL",
            "isDeprecated": false
          },
          {
            "name": "BSD",
            "isDeprecated": false
          },
          {
            "name": "BTN",
            "isDeprecated": false
          },
          {
            "name": "BWP",
            "isDeprecated": false
          },
          {
            "name": "BYN",
            "isDeprecated": false
          },
          {
            "name": "BZD",
            "isDeprecated": false
          },
          {
            "name": "CAD",
            "isDeprecated": false
          },
          {
            "name": "CDF",
            "isDeprecated": false
          },
          {
            "name": "CHF",
            "isDeprecated": false
          },
          {
            "name": "CLP",
            "isDeprecated": false
          },
          {
            "name": "CNY",
            "isDeprecated": false
          },
          {
            "name": "COP",
            "isDeprecated": false
          },
          {
            "name": "CRC",
            "isDeprecated": false
          },
          {
            "name": "CUC",
            "isDeprecated": false
          },
          {
            "name": "CUP",
            "isDeprecated": false
          },
          {
            "name": "CVE",
            "isDeprecated": false
          },
          {
            "name": "CZK",
            "isDeprecated": false
          },
          {
            "name": "DJF",
            "isDeprecated": false
          },
          {
            "name": "DKK",
            "isDeprecated": false
          },
          {
            "name": "DOP",
            "isDeprecated": false
          },
          {
            "name": "DZD",
            "isDeprecated": false
          },
          {
            "name": "EGP",
            "isDeprecated": false
          },
          {
            "name": "ERN",
            "isDeprecated": false
          },
          {
            "name": "ETB",
            "isDeprecated": false
          },
          {
            "name": "EUR",
            "isDeprecated": false
          },
          {
            "name": "FJD",
            "isDeprecated": false
          },
          {
            "name": "FKP",
            "isDeprecated": false
          },
          {
            "name": "GBP",
            "isDeprecated": false
          },
          {
            "name": "GEL",
            "isDeprecated": false
          },
          {
            "name": "GHS",
            "isDeprecated": false
          },
          {
            "name": "GIP",
            "isDeprecated": false
          },
          {
            "name": "GMD",
            "isDeprecated": false
          },
          {
            "name": "GNF",
            "isDeprecated": false
          },
          {
            "name": "GTQ",
            "isDeprecated": false
          },
          {
            "name": "GYD",
            "isDeprecated": false
          },
          {
            "name": "HKD",
            "isDeprecated": false
          },
          {
            "name": "HNL",
            "isDeprecated": false
          },
          {
            "name": "HRK",
            "isDeprecated": false
          },
          {
            "name": "HTG",
            "isDeprecated": false
          },
          {
            "name": "HUF",
            "isDeprecated": false
          },
          {
            "name": "IDR",
            "isDeprecated": false
          },
          {
            "name": "ILS",
            "isDeprecated": false
          },
          {
            "name": "INR",
            "isDeprecated": false
          },
          {
            "name": "IQD",
            "isDeprecated": false
          },
          {
            "name": "IRR",
            "isDeprecated": false
          },
          {
            "name": "ISK",
            "isDeprecated": false
          },
          {
            "name": "JMD",
            "isDeprecated": false
          },
          {
            "name": "JOD",
            "isDeprecated": false
          },
          {
            "name": "JPY",
            "isDeprecated": false
          },
          {
            "name": "KES",
            "isDeprecated": false
          },
          {
            "name": "KGS",
            "isDeprecated": false
          },
          {
            "name": "KHR",
            "isDeprecated": false
          },
          {
            "name": "KMF",
            "isDeprecated": false
          },
          {
            "name": "KPW",
            "isDeprecated": false
          },
          {
            "name": "KRW",
            "isDeprecated": false
          },
          {
            "name": "KWD",
            "isDeprecated": false
          },
          {
            "name": "KYD",
            "isDeprecated": false
          },
          {
            "name": "KZT",
            "isDeprecated": false
          },
          {
            "name": "LAK",
            "isDeprecated": false
          },
          {
            "name": "LBP",
            "isDeprecated": false
          },
          {
            "name": "LKR",
            "isDeprecated": false
          },
          {
            "name": "LRD",
            "isDeprecated": false
          },
          {
            "name": "LSL",
            "isDeprecated": false
          },
          {
            "name": "LYD",
            "isDeprecated": false
          },
          {
            "name": "MAD",
            "isDeprecated": false
          },
          {
            "name": "MDL",
            "isDeprecated": false
          },
          {
            "name": "MGA",
            "isDeprecated": false
          },
          {
            "name": "MKD",
            "isDeprecated": false
          },
          {
            "name": "MMK",
            "isDeprecated": false
          },
          {
            "name": "MNT",
            "isDeprecated": false
          },
          {
            "name": "MOP",
            "isDeprecated": false
          },
          {
            "name": "MRU",
            "isDeprecated": false
          },
          {
            "name": "MUR",
            "isDeprecated": false
          },
          {
            "name": "MVR",
            "isDeprecated": false
          },
          {
            "name": "MWK",
            "isDeprecated": false
          },
          {
            "name": "MXN",
            "isDeprecated": false
          },
          {
            "name": "MYR",
            "isDeprecated": false
          },
          {
            "name": "MZN",
            "isDeprecated": false
          },
          {
            "name": "NAD",
            "isDeprecated": false
          },
          {
            "name": "NGN",
            "isDeprecated": false
          },
          {
            "name": "NIO",
            "isDeprecated": false
          },
          {
            "name": "NOK",
            "isDeprecated": false
          },
          {
            "name": "NPR",
            "isDeprecated": false
          },
          {
            "name": "NZD",
            "isDeprecated": false
          },
          {
            "name": "OMR",
            "isDeprecated": false
          },
          {
            "name": "PAB",
            "isDeprecated": false
          },
          {
            "name": "PEN",
            "isDeprecated": false
          },
          {
            "name": "PGK",
            "isDeprecated": false
          },
          {
            "name": "PHP",
            "isDeprecated": false
          },
          {
            "name": "PKR",
            "isDeprecated": false
          },
          {
            "name": "PLN",
            "isDeprecated": false
          },
          {
            "name": "PYG",
            "isDeprecated": false
          },
          {
            "name": "QAR",
            "isDeprecated": false
          },
          {
            "name": "RON",
            "isDeprecated": false
          },
          {
            "name": "RSD",
            "isDeprecated": false
          },
          {
            "name": "RUB",
            "isDeprecated": false
          },
          {
            "name": "RWF",
            "isDeprecated": false
          },
          {
            "name": "SAR",
            "isDeprecated": false
          },
          {
            "name": "SBD",
            "isDeprecated": false
          },
          {
            "name": "SCR",
            "isDeprecated": false
          },
          {
            "name": "SDG",
            "isDeprecated": false
          },
          {
            "name": "SEK",
            "isDeprecated": false
          },
          {
            "name": "SGD",
            "isDeprecated": false
          },
          {
            "name": "SHP",
            "isDeprecated": false
          },
          {
            "name": "SLL",
            "isDeprecated": false
          },
          {
            "name": "SOS",
            "isDeprecated": false
          },
          {
            "name": "SRD",
            "isDeprecated": false
          },
          {
            "name": "SSP",
            "isDeprecated": false
          },
          {
            "name": "STN",
            "isDeprecated": false
          },
          {
            "name": "SVC",
            "isDeprecated": false
          },
          {
            "name": "SYP",
            "isDeprecated": false
          },
          {
            "name": "SZL",
            "isDeprecated": false
          },
          {
            "name": "THB",
            "isDeprecated": false
          },
          {
            "name": "TJS",
            "isDeprecated": false
          },
          {
            "name": "TMT",
            "isDeprecated": false
          },
          {
            "name": "TND",
            "isDeprecated": false
          },
          {
            "name": "TOP",
            "isDeprecated": false
          },
          {
            "name": "TRY",
            "isDeprecated": false
          },
          {
            "name": "TTD",
            "isDeprecated": false
          },
          {
            "name": "TWD",
            "isDeprecated": false
          },
          {
            "name": "TZS",
            "isDeprecated": false
          },
          {
            "name": "UAH",
            "isDeprecated": false
          },
          {
            "name": "UGX",
            "isDeprecated": false
          },
          {
            "name": "USD",
            "isDeprecated": false
          },
          {
            "name": "UYU",
            "isDeprecated": false
          },
          {
            "name": "UZS",
            "isDeprecated": false
          },
          {
            "name": "VES",
            "isDeprecated": false
          },
          {
            "name": "VND",
            "isDeprecated": false
          },
          {
            "name": "VUV",
            "isDeprecated": false
          },
          {
            "name": "WST",
            "isDeprecated": false
          },
          {
            "name": "XAF",
            "isDeprecated": false
          },
          {
            "name": "XCD",
            "isDeprecated": false
          },
          {
            "name": "XOF",
            "isDeprecated": false
          },
          {
            "name": "XPF",
            "isDeprecated": false
          },
          {
            "name": "YER",
            "isDeprecated": false
          },
          {
            "name": "ZAR",
            "isDeprecated": false
          },
          {
            "name": "ZMW",
            "isDeprecated": false
          },
          {
            "name": "ZWL",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CurrentUser",
        "fields": [
          {
            "name": "channels",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CurrentUserChannel"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "identifier",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CurrentUserChannel",
        "fields": [
          {
            "name": "code",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "permissions",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "Permission"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "token",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INTERFACE",
        "name": "CustomField",
        "fields": [
          {
            "name": "deprecated",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "deprecationReason",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "description",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "internal",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "label",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "list",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "nullable",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "readonly",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "requiresPermission",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "Permission"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "ui",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [],
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "BooleanCustomFieldConfig"
          },
          {
            "kind": "OBJECT",
            "name": "DateTimeCustomFieldConfig"
          },
          {
            "kind": "OBJECT",
            "name": "FloatCustomFieldConfig"
          },
          {
            "kind": "OBJECT",
            "name": "IntCustomFieldConfig"
          },
          {
            "kind": "OBJECT",
            "name": "LocaleStringCustomFieldConfig"
          },
          {
            "kind": "OBJECT",
            "name": "LocaleTextCustomFieldConfig"
          },
          {
            "kind": "OBJECT",
            "name": "RelationCustomFieldConfig"
          },
          {
            "kind": "OBJECT",
            "name": "StringCustomFieldConfig"
          },
          {
            "kind": "OBJECT",
            "name": "StructCustomFieldConfig"
          },
          {
            "kind": "OBJECT",
            "name": "TextCustomFieldConfig"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "CustomFieldConfig",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "BooleanCustomFieldConfig"
          },
          {
            "kind": "OBJECT",
            "name": "DateTimeCustomFieldConfig"
          },
          {
            "kind": "OBJECT",
            "name": "FloatCustomFieldConfig"
          },
          {
            "kind": "OBJECT",
            "name": "IntCustomFieldConfig"
          },
          {
            "kind": "OBJECT",
            "name": "LocaleStringCustomFieldConfig"
          },
          {
            "kind": "OBJECT",
            "name": "LocaleTextCustomFieldConfig"
          },
          {
            "kind": "OBJECT",
            "name": "RelationCustomFieldConfig"
          },
          {
            "kind": "OBJECT",
            "name": "StringCustomFieldConfig"
          },
          {
            "kind": "OBJECT",
            "name": "StructCustomFieldConfig"
          },
          {
            "kind": "OBJECT",
            "name": "TextCustomFieldConfig"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Customer",
        "fields": [
          {
            "name": "addresses",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Address"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "customFields",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "emailAddress",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "firstName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "lastName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "orders",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "OrderList"
              }
            },
            "args": [
              {
                "name": "options",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "OrderListOptions"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "phoneNumber",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "user",
            "type": {
              "kind": "OBJECT",
              "name": "User"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CustomerFilterParameter",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IDOperators"
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateOperators"
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateOperators"
            }
          },
          {
            "name": "title",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators"
            }
          },
          {
            "name": "firstName",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators"
            }
          },
          {
            "name": "lastName",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators"
            }
          },
          {
            "name": "phoneNumber",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators"
            }
          },
          {
            "name": "emailAddress",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators"
            }
          },
          {
            "name": "_and",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CustomerFilterParameter"
                }
              }
            }
          },
          {
            "name": "_or",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CustomerFilterParameter"
                }
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "CustomerGroup",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "customFields",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "customers",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CustomerList"
              }
            },
            "args": [
              {
                "name": "options",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "CustomerListOptions"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CustomerList",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Customer"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "totalItems",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "PaginatedList"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CustomerListOptions",
        "inputFields": [
          {
            "name": "skip",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          },
          {
            "name": "take",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          },
          {
            "name": "sort",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CustomerSortParameter"
            }
          },
          {
            "name": "filter",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CustomerFilterParameter"
            }
          },
          {
            "name": "filterOperator",
            "type": {
              "kind": "ENUM",
              "name": "LogicalOperator"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CustomerSortParameter",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "title",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "firstName",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "lastName",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "phoneNumber",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "emailAddress",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DateListOperators",
        "inputFields": [
          {
            "name": "inList",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DateOperators",
        "inputFields": [
          {
            "name": "eq",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime"
            }
          },
          {
            "name": "before",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime"
            }
          },
          {
            "name": "after",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime"
            }
          },
          {
            "name": "between",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateRange"
            }
          },
          {
            "name": "isNull",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DateRange",
        "inputFields": [
          {
            "name": "start",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            }
          },
          {
            "name": "end",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "SCALAR",
        "name": "DateTime"
      },
      {
        "kind": "OBJECT",
        "name": "DateTimeCustomFieldConfig",
        "fields": [
          {
            "name": "deprecated",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "deprecationReason",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "description",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "internal",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "label",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "list",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "max",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "min",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "nullable",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "readonly",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "requiresPermission",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "Permission"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "step",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "ui",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "CustomField"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "DateTimeStructFieldConfig",
        "fields": [
          {
            "name": "description",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "label",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "list",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "max",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "min",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "step",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "ui",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "StructField"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "DeletionResponse",
        "fields": [
          {
            "name": "message",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "result",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "DeletionResult"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "DeletionResult",
        "enumValues": [
          {
            "name": "DELETED",
            "isDeprecated": false
          },
          {
            "name": "NOT_DELETED",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Discount",
        "fields": [
          {
            "name": "adjustmentSource",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "amount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "amountWithTax",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "AdjustmentType"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "EmailAddressConflictError",
        "fields": [
          {
            "name": "errorCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "ErrorCode",
        "enumValues": [
          {
            "name": "UNKNOWN_ERROR",
            "isDeprecated": false
          },
          {
            "name": "NATIVE_AUTH_STRATEGY_ERROR",
            "isDeprecated": false
          },
          {
            "name": "INVALID_CREDENTIALS_ERROR",
            "isDeprecated": false
          },
          {
            "name": "ORDER_STATE_TRANSITION_ERROR",
            "isDeprecated": false
          },
          {
            "name": "EMAIL_ADDRESS_CONFLICT_ERROR",
            "isDeprecated": false
          },
          {
            "name": "GUEST_CHECKOUT_ERROR",
            "isDeprecated": false
          },
          {
            "name": "ORDER_LIMIT_ERROR",
            "isDeprecated": false
          },
          {
            "name": "NEGATIVE_QUANTITY_ERROR",
            "isDeprecated": false
          },
          {
            "name": "INSUFFICIENT_STOCK_ERROR",
            "isDeprecated": false
          },
          {
            "name": "COUPON_CODE_INVALID_ERROR",
            "isDeprecated": false
          },
          {
            "name": "COUPON_CODE_EXPIRED_ERROR",
            "isDeprecated": false
          },
          {
            "name": "COUPON_CODE_LIMIT_ERROR",
            "isDeprecated": false
          },
          {
            "name": "ORDER_MODIFICATION_ERROR",
            "isDeprecated": false
          },
          {
            "name": "INELIGIBLE_SHIPPING_METHOD_ERROR",
            "isDeprecated": false
          },
          {
            "name": "NO_ACTIVE_ORDER_ERROR",
            "isDeprecated": false
          },
          {
            "name": "ORDER_INTERCEPTOR_ERROR",
            "isDeprecated": false
          },
          {
            "name": "ORDER_PAYMENT_STATE_ERROR",
            "isDeprecated": false
          },
          {
            "name": "INELIGIBLE_PAYMENT_METHOD_ERROR",
            "isDeprecated": false
          },
          {
            "name": "PAYMENT_FAILED_ERROR",
            "isDeprecated": false
          },
          {
            "name": "PAYMENT_DECLINED_ERROR",
            "isDeprecated": false
          },
          {
            "name": "ALREADY_LOGGED_IN_ERROR",
            "isDeprecated": false
          },
          {
            "name": "MISSING_PASSWORD_ERROR",
            "isDeprecated": false
          },
          {
            "name": "PASSWORD_VALIDATION_ERROR",
            "isDeprecated": false
          },
          {
            "name": "PASSWORD_ALREADY_SET_ERROR",
            "isDeprecated": false
          },
          {
            "name": "VERIFICATION_TOKEN_INVALID_ERROR",
            "isDeprecated": false
          },
          {
            "name": "VERIFICATION_TOKEN_EXPIRED_ERROR",
            "isDeprecated": false
          },
          {
            "name": "IDENTIFIER_CHANGE_TOKEN_INVALID_ERROR",
            "isDeprecated": false
          },
          {
            "name": "IDENTIFIER_CHANGE_TOKEN_EXPIRED_ERROR",
            "isDeprecated": false
          },
          {
            "name": "PASSWORD_RESET_TOKEN_INVALID_ERROR",
            "isDeprecated": false
          },
          {
            "name": "PASSWORD_RESET_TOKEN_EXPIRED_ERROR",
            "isDeprecated": false
          },
          {
            "name": "NOT_VERIFIED_ERROR",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "ErrorResult",
        "fields": [
          {
            "name": "errorCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [],
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "AlreadyLoggedInError"
          },
          {
            "kind": "OBJECT",
            "name": "CouponCodeExpiredError"
          },
          {
            "kind": "OBJECT",
            "name": "CouponCodeInvalidError"
          },
          {
            "kind": "OBJECT",
            "name": "CouponCodeLimitError"
          },
          {
            "kind": "OBJECT",
            "name": "EmailAddressConflictError"
          },
          {
            "kind": "OBJECT",
            "name": "GuestCheckoutError"
          },
          {
            "kind": "OBJECT",
            "name": "IdentifierChangeTokenExpiredError"
          },
          {
            "kind": "OBJECT",
            "name": "IdentifierChangeTokenInvalidError"
          },
          {
            "kind": "OBJECT",
            "name": "IneligiblePaymentMethodError"
          },
          {
            "kind": "OBJECT",
            "name": "IneligibleShippingMethodError"
          },
          {
            "kind": "OBJECT",
            "name": "InsufficientStockError"
          },
          {
            "kind": "OBJECT",
            "name": "InvalidCredentialsError"
          },
          {
            "kind": "OBJECT",
            "name": "MissingPasswordError"
          },
          {
            "kind": "OBJECT",
            "name": "NativeAuthStrategyError"
          },
          {
            "kind": "OBJECT",
            "name": "NegativeQuantityError"
          },
          {
            "kind": "OBJECT",
            "name": "NoActiveOrderError"
          },
          {
            "kind": "OBJECT",
            "name": "NotVerifiedError"
          },
          {
            "kind": "OBJECT",
            "name": "OrderInterceptorError"
          },
          {
            "kind": "OBJECT",
            "name": "OrderLimitError"
          },
          {
            "kind": "OBJECT",
            "name": "OrderModificationError"
          },
          {
            "kind": "OBJECT",
            "name": "OrderPaymentStateError"
          },
          {
            "kind": "OBJECT",
            "name": "OrderStateTransitionError"
          },
          {
            "kind": "OBJECT",
            "name": "PasswordAlreadySetError"
          },
          {
            "kind": "OBJECT",
            "name": "PasswordResetTokenExpiredError"
          },
          {
            "kind": "OBJECT",
            "name": "PasswordResetTokenInvalidError"
          },
          {
            "kind": "OBJECT",
            "name": "PasswordValidationError"
          },
          {
            "kind": "OBJECT",
            "name": "PaymentDeclinedError"
          },
          {
            "kind": "OBJECT",
            "name": "PaymentFailedError"
          },
          {
            "kind": "OBJECT",
            "name": "VerificationTokenExpiredError"
          },
          {
            "kind": "OBJECT",
            "name": "VerificationTokenInvalidError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Facet",
        "fields": [
          {
            "name": "code",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "customFields",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "languageCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "translations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "FacetTranslation"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "valueList",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "FacetValueList"
              }
            },
            "args": [
              {
                "name": "options",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "FacetValueListOptions"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "values",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "FacetValue"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "FacetFilterParameter",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IDOperators"
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateOperators"
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateOperators"
            }
          },
          {
            "name": "languageCode",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators"
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators"
            }
          },
          {
            "name": "code",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators"
            }
          },
          {
            "name": "_and",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "FacetFilterParameter"
                }
              }
            }
          },
          {
            "name": "_or",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "FacetFilterParameter"
                }
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "FacetList",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Facet"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "totalItems",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "PaginatedList"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "FacetListOptions",
        "inputFields": [
          {
            "name": "skip",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          },
          {
            "name": "take",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          },
          {
            "name": "sort",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "FacetSortParameter"
            }
          },
          {
            "name": "filter",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "FacetFilterParameter"
            }
          },
          {
            "name": "filterOperator",
            "type": {
              "kind": "ENUM",
              "name": "LogicalOperator"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "FacetSortParameter",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "code",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "FacetTranslation",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "languageCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "FacetValue",
        "fields": [
          {
            "name": "code",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "customFields",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "facet",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Facet"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "facetId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "languageCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "translations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "FacetValueTranslation"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "FacetValueFilterInput",
        "inputFields": [
          {
            "name": "and",
            "type": {
              "kind": "SCALAR",
              "name": "ID"
            }
          },
          {
            "name": "or",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID"
                }
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "FacetValueFilterParameter",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IDOperators"
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateOperators"
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateOperators"
            }
          },
          {
            "name": "languageCode",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators"
            }
          },
          {
            "name": "facetId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IDOperators"
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators"
            }
          },
          {
            "name": "code",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators"
            }
          },
          {
            "name": "_and",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "FacetValueFilterParameter"
                }
              }
            }
          },
          {
            "name": "_or",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "FacetValueFilterParameter"
                }
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "FacetValueList",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "FacetValue"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "totalItems",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "PaginatedList"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "FacetValueListOptions",
        "inputFields": [
          {
            "name": "skip",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          },
          {
            "name": "take",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          },
          {
            "name": "sort",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "FacetValueSortParameter"
            }
          },
          {
            "name": "filter",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "FacetValueFilterParameter"
            }
          },
          {
            "name": "filterOperator",
            "type": {
              "kind": "ENUM",
              "name": "LogicalOperator"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "FacetValueResult",
        "fields": [
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "facetValue",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "FacetValue"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "FacetValueSortParameter",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "facetId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "code",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "FacetValueTranslation",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "languageCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Float"
      },
      {
        "kind": "OBJECT",
        "name": "FloatCustomFieldConfig",
        "fields": [
          {
            "name": "deprecated",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "deprecationReason",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "description",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "internal",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "label",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "list",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "max",
            "type": {
              "kind": "SCALAR",
              "name": "Float"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "min",
            "type": {
              "kind": "SCALAR",
              "name": "Float"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "nullable",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "readonly",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "requiresPermission",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "Permission"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "step",
            "type": {
              "kind": "SCALAR",
              "name": "Float"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "ui",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "CustomField"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "FloatStructFieldConfig",
        "fields": [
          {
            "name": "description",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "label",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "list",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "max",
            "type": {
              "kind": "SCALAR",
              "name": "Float"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "min",
            "type": {
              "kind": "SCALAR",
              "name": "Float"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "step",
            "type": {
              "kind": "SCALAR",
              "name": "Float"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "ui",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "StructField"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Fulfillment",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "customFields",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "lines",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "FulfillmentLine"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "method",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "state",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "summary",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "FulfillmentLine"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": true
          },
          {
            "name": "trackingCode",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "FulfillmentLine",
        "fields": [
          {
            "name": "fulfillment",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Fulfillment"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "fulfillmentId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "orderLine",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "OrderLine"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "orderLineId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "quantity",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "GlobalFlag",
        "enumValues": [
          {
            "name": "TRUE",
            "isDeprecated": false
          },
          {
            "name": "FALSE",
            "isDeprecated": false
          },
          {
            "name": "INHERIT",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "GuestCheckoutError",
        "fields": [
          {
            "name": "errorCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "errorDetail",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "HistoryEntry",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "customFields",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "JSON"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "HistoryEntryType"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "HistoryEntryFilterParameter",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IDOperators"
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateOperators"
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateOperators"
            }
          },
          {
            "name": "type",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators"
            }
          },
          {
            "name": "_and",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "HistoryEntryFilterParameter"
                }
              }
            }
          },
          {
            "name": "_or",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "HistoryEntryFilterParameter"
                }
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "HistoryEntryList",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "HistoryEntry"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "totalItems",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "PaginatedList"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "HistoryEntryListOptions",
        "inputFields": [
          {
            "name": "skip",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          },
          {
            "name": "take",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          },
          {
            "name": "sort",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "HistoryEntrySortParameter"
            }
          },
          {
            "name": "filter",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "HistoryEntryFilterParameter"
            }
          },
          {
            "name": "filterOperator",
            "type": {
              "kind": "ENUM",
              "name": "LogicalOperator"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "HistoryEntrySortParameter",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "ENUM",
        "name": "HistoryEntryType",
        "enumValues": [
          {
            "name": "CUSTOMER_REGISTERED",
            "isDeprecated": false
          },
          {
            "name": "CUSTOMER_VERIFIED",
            "isDeprecated": false
          },
          {
            "name": "CUSTOMER_DETAIL_UPDATED",
            "isDeprecated": false
          },
          {
            "name": "CUSTOMER_ADDED_TO_GROUP",
            "isDeprecated": false
          },
          {
            "name": "CUSTOMER_REMOVED_FROM_GROUP",
            "isDeprecated": false
          },
          {
            "name": "CUSTOMER_ADDRESS_CREATED",
            "isDeprecated": false
          },
          {
            "name": "CUSTOMER_ADDRESS_UPDATED",
            "isDeprecated": false
          },
          {
            "name": "CUSTOMER_ADDRESS_DELETED",
            "isDeprecated": false
          },
          {
            "name": "CUSTOMER_PASSWORD_UPDATED",
            "isDeprecated": false
          },
          {
            "name": "CUSTOMER_PASSWORD_RESET_REQUESTED",
            "isDeprecated": false
          },
          {
            "name": "CUSTOMER_PASSWORD_RESET_VERIFIED",
            "isDeprecated": false
          },
          {
            "name": "CUSTOMER_EMAIL_UPDATE_REQUESTED",
            "isDeprecated": false
          },
          {
            "name": "CUSTOMER_EMAIL_UPDATE_VERIFIED",
            "isDeprecated": false
          },
          {
            "name": "CUSTOMER_NOTE",
            "isDeprecated": false
          },
          {
            "name": "ORDER_STATE_TRANSITION",
            "isDeprecated": false
          },
          {
            "name": "ORDER_PAYMENT_TRANSITION",
            "isDeprecated": false
          },
          {
            "name": "ORDER_FULFILLMENT",
            "isDeprecated": false
          },
          {
            "name": "ORDER_CANCELLATION",
            "isDeprecated": false
          },
          {
            "name": "ORDER_REFUND_TRANSITION",
            "isDeprecated": false
          },
          {
            "name": "ORDER_FULFILLMENT_TRANSITION",
            "isDeprecated": false
          },
          {
            "name": "ORDER_NOTE",
            "isDeprecated": false
          },
          {
            "name": "ORDER_COUPON_APPLIED",
            "isDeprecated": false
          },
          {
            "name": "ORDER_COUPON_REMOVED",
            "isDeprecated": false
          },
          {
            "name": "ORDER_MODIFIED",
            "isDeprecated": false
          },
          {
            "name": "ORDER_CUSTOMER_UPDATED",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "SCALAR",
        "name": "ID"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "IDListOperators",
        "inputFields": [
          {
            "name": "inList",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "IDOperators",
        "inputFields": [
          {
            "name": "eq",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "notEq",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String"
                }
              }
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String"
                }
              }
            }
          },
          {
            "name": "isNull",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "IdentifierChangeTokenExpiredError",
        "fields": [
          {
            "name": "errorCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "IdentifierChangeTokenInvalidError",
        "fields": [
          {
            "name": "errorCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "IneligiblePaymentMethodError",
        "fields": [
          {
            "name": "eligibilityCheckerMessage",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "errorCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "IneligibleShippingMethodError",
        "fields": [
          {
            "name": "errorCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "InsufficientStockError",
        "fields": [
          {
            "name": "errorCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "order",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Order"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "quantityAvailable",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult"
          }
        ]
      },
      {
        "kind": "SCALAR",
        "name": "Int"
      },
      {
        "kind": "OBJECT",
        "name": "IntCustomFieldConfig",
        "fields": [
          {
            "name": "deprecated",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "deprecationReason",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "description",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "internal",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "label",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "list",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "max",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "min",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "nullable",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "readonly",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "requiresPermission",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "Permission"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "step",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "ui",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "CustomField"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "IntStructFieldConfig",
        "fields": [
          {
            "name": "description",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "label",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "list",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "max",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "min",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "step",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "ui",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "StructField"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "InvalidCredentialsError",
        "fields": [
          {
            "name": "authenticationError",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "errorCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult"
          }
        ]
      },
      {
        "kind": "SCALAR",
        "name": "JSON"
      },
      {
        "kind": "ENUM",
        "name": "LanguageCode",
        "enumValues": [
          {
            "name": "af",
            "isDeprecated": false
          },
          {
            "name": "ak",
            "isDeprecated": false
          },
          {
            "name": "sq",
            "isDeprecated": false
          },
          {
            "name": "am",
            "isDeprecated": false
          },
          {
            "name": "ar",
            "isDeprecated": false
          },
          {
            "name": "hy",
            "isDeprecated": false
          },
          {
            "name": "as",
            "isDeprecated": false
          },
          {
            "name": "az",
            "isDeprecated": false
          },
          {
            "name": "bm",
            "isDeprecated": false
          },
          {
            "name": "bn",
            "isDeprecated": false
          },
          {
            "name": "eu",
            "isDeprecated": false
          },
          {
            "name": "be",
            "isDeprecated": false
          },
          {
            "name": "bs",
            "isDeprecated": false
          },
          {
            "name": "br",
            "isDeprecated": false
          },
          {
            "name": "bg",
            "isDeprecated": false
          },
          {
            "name": "my",
            "isDeprecated": false
          },
          {
            "name": "ca",
            "isDeprecated": false
          },
          {
            "name": "ce",
            "isDeprecated": false
          },
          {
            "name": "zh",
            "isDeprecated": false
          },
          {
            "name": "zh_Hans",
            "isDeprecated": false
          },
          {
            "name": "zh_Hant",
            "isDeprecated": false
          },
          {
            "name": "cu",
            "isDeprecated": false
          },
          {
            "name": "kw",
            "isDeprecated": false
          },
          {
            "name": "co",
            "isDeprecated": false
          },
          {
            "name": "hr",
            "isDeprecated": false
          },
          {
            "name": "cs",
            "isDeprecated": false
          },
          {
            "name": "da",
            "isDeprecated": false
          },
          {
            "name": "nl",
            "isDeprecated": false
          },
          {
            "name": "nl_BE",
            "isDeprecated": false
          },
          {
            "name": "dz",
            "isDeprecated": false
          },
          {
            "name": "en",
            "isDeprecated": false
          },
          {
            "name": "en_AU",
            "isDeprecated": false
          },
          {
            "name": "en_CA",
            "isDeprecated": false
          },
          {
            "name": "en_GB",
            "isDeprecated": false
          },
          {
            "name": "en_US",
            "isDeprecated": false
          },
          {
            "name": "eo",
            "isDeprecated": false
          },
          {
            "name": "et",
            "isDeprecated": false
          },
          {
            "name": "ee",
            "isDeprecated": false
          },
          {
            "name": "fo",
            "isDeprecated": false
          },
          {
            "name": "fi",
            "isDeprecated": false
          },
          {
            "name": "fr",
            "isDeprecated": false
          },
          {
            "name": "fr_CA",
            "isDeprecated": false
          },
          {
            "name": "fr_CH",
            "isDeprecated": false
          },
          {
            "name": "ff",
            "isDeprecated": false
          },
          {
            "name": "gl",
            "isDeprecated": false
          },
          {
            "name": "lg",
            "isDeprecated": false
          },
          {
            "name": "ka",
            "isDeprecated": false
          },
          {
            "name": "de",
            "isDeprecated": false
          },
          {
            "name": "de_AT",
            "isDeprecated": false
          },
          {
            "name": "de_CH",
            "isDeprecated": false
          },
          {
            "name": "el",
            "isDeprecated": false
          },
          {
            "name": "gu",
            "isDeprecated": false
          },
          {
            "name": "ht",
            "isDeprecated": false
          },
          {
            "name": "ha",
            "isDeprecated": false
          },
          {
            "name": "he",
            "isDeprecated": false
          },
          {
            "name": "hi",
            "isDeprecated": false
          },
          {
            "name": "hu",
            "isDeprecated": false
          },
          {
            "name": "is",
            "isDeprecated": false
          },
          {
            "name": "ig",
            "isDeprecated": false
          },
          {
            "name": "id",
            "isDeprecated": false
          },
          {
            "name": "ia",
            "isDeprecated": false
          },
          {
            "name": "ga",
            "isDeprecated": false
          },
          {
            "name": "it",
            "isDeprecated": false
          },
          {
            "name": "ja",
            "isDeprecated": false
          },
          {
            "name": "jv",
            "isDeprecated": false
          },
          {
            "name": "kl",
            "isDeprecated": false
          },
          {
            "name": "kn",
            "isDeprecated": false
          },
          {
            "name": "ks",
            "isDeprecated": false
          },
          {
            "name": "kk",
            "isDeprecated": false
          },
          {
            "name": "km",
            "isDeprecated": false
          },
          {
            "name": "ki",
            "isDeprecated": false
          },
          {
            "name": "rw",
            "isDeprecated": false
          },
          {
            "name": "ko",
            "isDeprecated": false
          },
          {
            "name": "ku",
            "isDeprecated": false
          },
          {
            "name": "ky",
            "isDeprecated": false
          },
          {
            "name": "lo",
            "isDeprecated": false
          },
          {
            "name": "la",
            "isDeprecated": false
          },
          {
            "name": "lv",
            "isDeprecated": false
          },
          {
            "name": "ln",
            "isDeprecated": false
          },
          {
            "name": "lt",
            "isDeprecated": false
          },
          {
            "name": "lu",
            "isDeprecated": false
          },
          {
            "name": "lb",
            "isDeprecated": false
          },
          {
            "name": "mk",
            "isDeprecated": false
          },
          {
            "name": "mg",
            "isDeprecated": false
          },
          {
            "name": "ms",
            "isDeprecated": false
          },
          {
            "name": "ml",
            "isDeprecated": false
          },
          {
            "name": "mt",
            "isDeprecated": false
          },
          {
            "name": "gv",
            "isDeprecated": false
          },
          {
            "name": "mi",
            "isDeprecated": false
          },
          {
            "name": "mr",
            "isDeprecated": false
          },
          {
            "name": "mn",
            "isDeprecated": false
          },
          {
            "name": "ne",
            "isDeprecated": false
          },
          {
            "name": "nd",
            "isDeprecated": false
          },
          {
            "name": "se",
            "isDeprecated": false
          },
          {
            "name": "nb",
            "isDeprecated": false
          },
          {
            "name": "nn",
            "isDeprecated": false
          },
          {
            "name": "ny",
            "isDeprecated": false
          },
          {
            "name": "or",
            "isDeprecated": false
          },
          {
            "name": "om",
            "isDeprecated": false
          },
          {
            "name": "os",
            "isDeprecated": false
          },
          {
            "name": "ps",
            "isDeprecated": false
          },
          {
            "name": "fa",
            "isDeprecated": false
          },
          {
            "name": "fa_AF",
            "isDeprecated": false
          },
          {
            "name": "pl",
            "isDeprecated": false
          },
          {
            "name": "pt",
            "isDeprecated": false
          },
          {
            "name": "pt_BR",
            "isDeprecated": false
          },
          {
            "name": "pt_PT",
            "isDeprecated": false
          },
          {
            "name": "pa",
            "isDeprecated": false
          },
          {
            "name": "qu",
            "isDeprecated": false
          },
          {
            "name": "ro",
            "isDeprecated": false
          },
          {
            "name": "ro_MD",
            "isDeprecated": false
          },
          {
            "name": "rm",
            "isDeprecated": false
          },
          {
            "name": "rn",
            "isDeprecated": false
          },
          {
            "name": "ru",
            "isDeprecated": false
          },
          {
            "name": "sm",
            "isDeprecated": false
          },
          {
            "name": "sg",
            "isDeprecated": false
          },
          {
            "name": "sa",
            "isDeprecated": false
          },
          {
            "name": "gd",
            "isDeprecated": false
          },
          {
            "name": "sr",
            "isDeprecated": false
          },
          {
            "name": "sn",
            "isDeprecated": false
          },
          {
            "name": "ii",
            "isDeprecated": false
          },
          {
            "name": "sd",
            "isDeprecated": false
          },
          {
            "name": "si",
            "isDeprecated": false
          },
          {
            "name": "sk",
            "isDeprecated": false
          },
          {
            "name": "sl",
            "isDeprecated": false
          },
          {
            "name": "so",
            "isDeprecated": false
          },
          {
            "name": "st",
            "isDeprecated": false
          },
          {
            "name": "es",
            "isDeprecated": false
          },
          {
            "name": "es_ES",
            "isDeprecated": false
          },
          {
            "name": "es_MX",
            "isDeprecated": false
          },
          {
            "name": "su",
            "isDeprecated": false
          },
          {
            "name": "sw",
            "isDeprecated": false
          },
          {
            "name": "sw_CD",
            "isDeprecated": false
          },
          {
            "name": "sv",
            "isDeprecated": false
          },
          {
            "name": "tg",
            "isDeprecated": false
          },
          {
            "name": "ta",
            "isDeprecated": false
          },
          {
            "name": "tt",
            "isDeprecated": false
          },
          {
            "name": "te",
            "isDeprecated": false
          },
          {
            "name": "th",
            "isDeprecated": false
          },
          {
            "name": "bo",
            "isDeprecated": false
          },
          {
            "name": "ti",
            "isDeprecated": false
          },
          {
            "name": "to",
            "isDeprecated": false
          },
          {
            "name": "tr",
            "isDeprecated": false
          },
          {
            "name": "tk",
            "isDeprecated": false
          },
          {
            "name": "uk",
            "isDeprecated": false
          },
          {
            "name": "ur",
            "isDeprecated": false
          },
          {
            "name": "ug",
            "isDeprecated": false
          },
          {
            "name": "uz",
            "isDeprecated": false
          },
          {
            "name": "vi",
            "isDeprecated": false
          },
          {
            "name": "vo",
            "isDeprecated": false
          },
          {
            "name": "cy",
            "isDeprecated": false
          },
          {
            "name": "fy",
            "isDeprecated": false
          },
          {
            "name": "wo",
            "isDeprecated": false
          },
          {
            "name": "xh",
            "isDeprecated": false
          },
          {
            "name": "yi",
            "isDeprecated": false
          },
          {
            "name": "yo",
            "isDeprecated": false
          },
          {
            "name": "zu",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "LocaleStringCustomFieldConfig",
        "fields": [
          {
            "name": "deprecated",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "deprecationReason",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "description",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "internal",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "label",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "length",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "list",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "nullable",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "pattern",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "readonly",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "requiresPermission",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "Permission"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "ui",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "CustomField"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "LocaleTextCustomFieldConfig",
        "fields": [
          {
            "name": "deprecated",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "deprecationReason",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "description",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "internal",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "label",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "list",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "nullable",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "readonly",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "requiresPermission",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "Permission"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "ui",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "CustomField"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "LocalizedString",
        "fields": [
          {
            "name": "languageCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "value",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "LogicalOperator",
        "enumValues": [
          {
            "name": "AND",
            "isDeprecated": false
          },
          {
            "name": "OR",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "MissingPasswordError",
        "fields": [
          {
            "name": "errorCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult"
          }
        ]
      },
      {
        "kind": "SCALAR",
        "name": "Money"
      },
      {
        "kind": "ENUM",
        "name": "MpesaPaymentStatus",
        "enumValues": [
          {
            "name": "SUCCESS",
            "isDeprecated": false
          },
          {
            "name": "FAILED",
            "isDeprecated": false
          },
          {
            "name": "PENDING",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "MpesaTransactionInitiation",
        "fields": [
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "success",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "transactionId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "MpesaTransactionVerification",
        "fields": [
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "status",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "MpesaPaymentStatus"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "transactionId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Mutation",
        "fields": [
          {
            "name": "addItemToOrder",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "UpdateOrderItemsResult"
              }
            },
            "args": [
              {
                "name": "productVariantId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID"
                  }
                }
              },
              {
                "name": "quantity",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Int"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "addItemsToOrder",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UpdateMultipleOrderItemsResult"
              }
            },
            "args": [
              {
                "name": "inputs",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "AddItemInput"
                      }
                    }
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "addPaymentToOrder",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "AddPaymentToOrderResult"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "PaymentInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "adjustOrderLine",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "UpdateOrderItemsResult"
              }
            },
            "args": [
              {
                "name": "orderLineId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID"
                  }
                }
              },
              {
                "name": "quantity",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Int"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "applyCouponCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ApplyCouponCodeResult"
              }
            },
            "args": [
              {
                "name": "couponCode",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "authenticate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "AuthenticationResult"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "AuthenticationInput"
                  }
                }
              },
              {
                "name": "rememberMe",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "createCustomerAddress",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Address"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateAddressInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "deleteCustomerAddress",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Success"
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "initiateMpesaTransaction",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MpesaTransactionInitiation"
              }
            },
            "args": [
              {
                "name": "phoneNumber",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "login",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "NativeAuthenticationResult"
              }
            },
            "args": [
              {
                "name": "password",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String"
                  }
                }
              },
              {
                "name": "rememberMe",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean"
                }
              },
              {
                "name": "username",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "logout",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Success"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "refreshCustomerVerification",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "RefreshCustomerVerificationResult"
              }
            },
            "args": [
              {
                "name": "emailAddress",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "registerCustomerAccount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "RegisterCustomerAccountResult"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "RegisterCustomerInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "removeAllOrderLines",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "RemoveOrderItemsResult"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "removeCouponCode",
            "type": {
              "kind": "OBJECT",
              "name": "Order"
            },
            "args": [
              {
                "name": "couponCode",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "removeOrderLine",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "RemoveOrderItemsResult"
              }
            },
            "args": [
              {
                "name": "orderLineId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "requestPasswordReset",
            "type": {
              "kind": "UNION",
              "name": "RequestPasswordResetResult"
            },
            "args": [
              {
                "name": "emailAddress",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "requestUpdateCustomerEmailAddress",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "RequestUpdateCustomerEmailAddressResult"
              }
            },
            "args": [
              {
                "name": "newEmailAddress",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String"
                  }
                }
              },
              {
                "name": "password",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "resetPassword",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ResetPasswordResult"
              }
            },
            "args": [
              {
                "name": "password",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String"
                  }
                }
              },
              {
                "name": "token",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "setCustomerForOrder",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "SetCustomerForOrderResult"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateCustomerInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "setOrderBillingAddress",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ActiveOrderResult"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateAddressInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "setOrderCustomFields",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ActiveOrderResult"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateOrderInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "setOrderShippingAddress",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ActiveOrderResult"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateAddressInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "setOrderShippingMethod",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "SetOrderShippingMethodResult"
              }
            },
            "args": [
              {
                "name": "shippingMethodId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "ID"
                      }
                    }
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "transitionOrderToState",
            "type": {
              "kind": "UNION",
              "name": "TransitionOrderToStateResult"
            },
            "args": [
              {
                "name": "state",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "unsetOrderBillingAddress",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ActiveOrderResult"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "unsetOrderShippingAddress",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ActiveOrderResult"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updateCustomer",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Customer"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateCustomerInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "updateCustomerAddress",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Address"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateAddressInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "updateCustomerEmailAddress",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "UpdateCustomerEmailAddressResult"
              }
            },
            "args": [
              {
                "name": "token",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "updateCustomerPassword",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "UpdateCustomerPasswordResult"
              }
            },
            "args": [
              {
                "name": "currentPassword",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String"
                  }
                }
              },
              {
                "name": "newPassword",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "verifyCustomerAccount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "VerifyCustomerAccountResult"
              }
            },
            "args": [
              {
                "name": "password",
                "type": {
                  "kind": "SCALAR",
                  "name": "String"
                }
              },
              {
                "name": "token",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "verifyMpesaTransaction",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MpesaTransactionVerification"
              }
            },
            "args": [
              {
                "name": "transactionId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String"
                  }
                }
              }
            ],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "NativeAuthInput",
        "inputFields": [
          {
            "name": "username",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            }
          },
          {
            "name": "password",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "NativeAuthStrategyError",
        "fields": [
          {
            "name": "errorCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "NativeAuthenticationResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "CurrentUser"
          },
          {
            "kind": "OBJECT",
            "name": "InvalidCredentialsError"
          },
          {
            "kind": "OBJECT",
            "name": "NativeAuthStrategyError"
          },
          {
            "kind": "OBJECT",
            "name": "NotVerifiedError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "NegativeQuantityError",
        "fields": [
          {
            "name": "errorCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "NoActiveOrderError",
        "fields": [
          {
            "name": "errorCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "Node",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [],
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Address"
          },
          {
            "kind": "OBJECT",
            "name": "Asset"
          },
          {
            "kind": "OBJECT",
            "name": "AuthenticationMethod"
          },
          {
            "kind": "OBJECT",
            "name": "Channel"
          },
          {
            "kind": "OBJECT",
            "name": "Collection"
          },
          {
            "kind": "OBJECT",
            "name": "Country"
          },
          {
            "kind": "OBJECT",
            "name": "Customer"
          },
          {
            "kind": "OBJECT",
            "name": "CustomerGroup"
          },
          {
            "kind": "OBJECT",
            "name": "Facet"
          },
          {
            "kind": "OBJECT",
            "name": "FacetValue"
          },
          {
            "kind": "OBJECT",
            "name": "Fulfillment"
          },
          {
            "kind": "OBJECT",
            "name": "HistoryEntry"
          },
          {
            "kind": "OBJECT",
            "name": "Order"
          },
          {
            "kind": "OBJECT",
            "name": "OrderLine"
          },
          {
            "kind": "OBJECT",
            "name": "Payment"
          },
          {
            "kind": "OBJECT",
            "name": "PaymentMethod"
          },
          {
            "kind": "OBJECT",
            "name": "Product"
          },
          {
            "kind": "OBJECT",
            "name": "ProductOption"
          },
          {
            "kind": "OBJECT",
            "name": "ProductOptionGroup"
          },
          {
            "kind": "OBJECT",
            "name": "ProductVariant"
          },
          {
            "kind": "OBJECT",
            "name": "Promotion"
          },
          {
            "kind": "OBJECT",
            "name": "Province"
          },
          {
            "kind": "OBJECT",
            "name": "Refund"
          },
          {
            "kind": "OBJECT",
            "name": "Role"
          },
          {
            "kind": "OBJECT",
            "name": "Seller"
          },
          {
            "kind": "OBJECT",
            "name": "ShippingMethod"
          },
          {
            "kind": "OBJECT",
            "name": "Surcharge"
          },
          {
            "kind": "OBJECT",
            "name": "Tag"
          },
          {
            "kind": "OBJECT",
            "name": "TaxCategory"
          },
          {
            "kind": "OBJECT",
            "name": "TaxRate"
          },
          {
            "kind": "OBJECT",
            "name": "User"
          },
          {
            "kind": "OBJECT",
            "name": "Zone"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "NotVerifiedError",
        "fields": [
          {
            "name": "errorCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "NumberListOperators",
        "inputFields": [
          {
            "name": "inList",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "NumberOperators",
        "inputFields": [
          {
            "name": "eq",
            "type": {
              "kind": "SCALAR",
              "name": "Float"
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "Float"
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "Float"
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "Float"
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "Float"
            }
          },
          {
            "name": "between",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberRange"
            }
          },
          {
            "name": "isNull",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "NumberRange",
        "inputFields": [
          {
            "name": "start",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float"
              }
            }
          },
          {
            "name": "end",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "Order",
        "fields": [
          {
            "name": "active",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "billingAddress",
            "type": {
              "kind": "OBJECT",
              "name": "OrderAddress"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "code",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "couponCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "currencyCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "CurrencyCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "customFields",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "customer",
            "type": {
              "kind": "OBJECT",
              "name": "Customer"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "discounts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Discount"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "fulfillments",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Fulfillment"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "history",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "HistoryEntryList"
              }
            },
            "args": [
              {
                "name": "options",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "HistoryEntryListOptions"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "lines",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "OrderLine"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "orderPlacedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "payments",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Payment"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "promotions",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Promotion"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "shipping",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "shippingAddress",
            "type": {
              "kind": "OBJECT",
              "name": "OrderAddress"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "shippingLines",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ShippingLine"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "shippingWithTax",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "state",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "subTotal",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "subTotalWithTax",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "surcharges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Surcharge"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "taxSummary",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "OrderTaxSummary"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "total",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "totalQuantity",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "totalWithTax",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "OrderType"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "OrderAddress",
        "fields": [
          {
            "name": "city",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "company",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "country",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "countryCode",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "customFields",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "fullName",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "phoneNumber",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "postalCode",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "province",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "streetLine1",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "streetLine2",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "OrderFilterParameter",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IDOperators"
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateOperators"
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateOperators"
            }
          },
          {
            "name": "type",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators"
            }
          },
          {
            "name": "orderPlacedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateOperators"
            }
          },
          {
            "name": "code",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators"
            }
          },
          {
            "name": "state",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators"
            }
          },
          {
            "name": "active",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "BooleanOperators"
            }
          },
          {
            "name": "totalQuantity",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberOperators"
            }
          },
          {
            "name": "subTotal",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberOperators"
            }
          },
          {
            "name": "subTotalWithTax",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberOperators"
            }
          },
          {
            "name": "currencyCode",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators"
            }
          },
          {
            "name": "shipping",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberOperators"
            }
          },
          {
            "name": "shippingWithTax",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberOperators"
            }
          },
          {
            "name": "total",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberOperators"
            }
          },
          {
            "name": "totalWithTax",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberOperators"
            }
          },
          {
            "name": "_and",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "OrderFilterParameter"
                }
              }
            }
          },
          {
            "name": "_or",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "OrderFilterParameter"
                }
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "OrderInterceptorError",
        "fields": [
          {
            "name": "errorCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "interceptorError",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "OrderLimitError",
        "fields": [
          {
            "name": "errorCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "maxItems",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "OrderLine",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "customFields",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "discountedLinePrice",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "discountedLinePriceWithTax",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "discountedUnitPrice",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "discountedUnitPriceWithTax",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "discounts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Discount"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "featuredAsset",
            "type": {
              "kind": "OBJECT",
              "name": "Asset"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "fulfillmentLines",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "FulfillmentLine"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "linePrice",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "linePriceWithTax",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "lineTax",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "order",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Order"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "orderPlacedQuantity",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "productVariant",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ProductVariant"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "proratedLinePrice",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "proratedLinePriceWithTax",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "proratedUnitPrice",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "proratedUnitPriceWithTax",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "quantity",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "taxLines",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "TaxLine"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "taxRate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "unitPrice",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "unitPriceChangeSinceAdded",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "unitPriceWithTax",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "unitPriceWithTaxChangeSinceAdded",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "OrderList",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Order"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "totalItems",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "PaginatedList"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "OrderListOptions",
        "inputFields": [
          {
            "name": "skip",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          },
          {
            "name": "take",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          },
          {
            "name": "sort",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "OrderSortParameter"
            }
          },
          {
            "name": "filter",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "OrderFilterParameter"
            }
          },
          {
            "name": "filterOperator",
            "type": {
              "kind": "ENUM",
              "name": "LogicalOperator"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "OrderModificationError",
        "fields": [
          {
            "name": "errorCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "OrderPaymentStateError",
        "fields": [
          {
            "name": "errorCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "OrderSortParameter",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "orderPlacedAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "code",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "state",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "totalQuantity",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "subTotal",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "subTotalWithTax",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "shipping",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "shippingWithTax",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "total",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "totalWithTax",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "OrderStateTransitionError",
        "fields": [
          {
            "name": "errorCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "fromState",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "toState",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "transitionError",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "OrderTaxSummary",
        "fields": [
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "taxBase",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "taxRate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "taxTotal",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "OrderType",
        "enumValues": [
          {
            "name": "Regular",
            "isDeprecated": false
          },
          {
            "name": "Seller",
            "isDeprecated": false
          },
          {
            "name": "Aggregate",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "PaginatedList",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INTERFACE",
                    "name": "Node"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "totalItems",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [],
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "AssetList"
          },
          {
            "kind": "OBJECT",
            "name": "CollectionList"
          },
          {
            "kind": "OBJECT",
            "name": "CountryList"
          },
          {
            "kind": "OBJECT",
            "name": "CustomerList"
          },
          {
            "kind": "OBJECT",
            "name": "FacetList"
          },
          {
            "kind": "OBJECT",
            "name": "FacetValueList"
          },
          {
            "kind": "OBJECT",
            "name": "HistoryEntryList"
          },
          {
            "kind": "OBJECT",
            "name": "OrderList"
          },
          {
            "kind": "OBJECT",
            "name": "ProductList"
          },
          {
            "kind": "OBJECT",
            "name": "ProductVariantList"
          },
          {
            "kind": "OBJECT",
            "name": "PromotionList"
          },
          {
            "kind": "OBJECT",
            "name": "ProvinceList"
          },
          {
            "kind": "OBJECT",
            "name": "RoleList"
          },
          {
            "kind": "OBJECT",
            "name": "ShippingMethodList"
          },
          {
            "kind": "OBJECT",
            "name": "TagList"
          },
          {
            "kind": "OBJECT",
            "name": "TaxRateList"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "PasswordAlreadySetError",
        "fields": [
          {
            "name": "errorCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "PasswordResetTokenExpiredError",
        "fields": [
          {
            "name": "errorCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "PasswordResetTokenInvalidError",
        "fields": [
          {
            "name": "errorCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "PasswordValidationError",
        "fields": [
          {
            "name": "errorCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "validationErrorMessage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Payment",
        "fields": [
          {
            "name": "amount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "customFields",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "errorMessage",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "metadata",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "method",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "refunds",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Refund"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "state",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "transactionId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "PaymentDeclinedError",
        "fields": [
          {
            "name": "errorCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "paymentErrorMessage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "PaymentFailedError",
        "fields": [
          {
            "name": "errorCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "paymentErrorMessage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PaymentInput",
        "inputFields": [
          {
            "name": "method",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            }
          },
          {
            "name": "metadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "JSON"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "PaymentMethod",
        "fields": [
          {
            "name": "checker",
            "type": {
              "kind": "OBJECT",
              "name": "ConfigurableOperation"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "code",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "customFields",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "enabled",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "handler",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ConfigurableOperation"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "translations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PaymentMethodTranslation"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "PaymentMethodQuote",
        "fields": [
          {
            "name": "code",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "customFields",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "eligibilityMessage",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "isEligible",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PaymentMethodTranslation",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "languageCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "Permission",
        "enumValues": [
          {
            "name": "Authenticated",
            "isDeprecated": false
          },
          {
            "name": "SuperAdmin",
            "isDeprecated": false
          },
          {
            "name": "Owner",
            "isDeprecated": false
          },
          {
            "name": "Public",
            "isDeprecated": false
          },
          {
            "name": "UpdateGlobalSettings",
            "isDeprecated": false
          },
          {
            "name": "CreateCatalog",
            "isDeprecated": false
          },
          {
            "name": "ReadCatalog",
            "isDeprecated": false
          },
          {
            "name": "UpdateCatalog",
            "isDeprecated": false
          },
          {
            "name": "DeleteCatalog",
            "isDeprecated": false
          },
          {
            "name": "CreateSettings",
            "isDeprecated": false
          },
          {
            "name": "ReadSettings",
            "isDeprecated": false
          },
          {
            "name": "UpdateSettings",
            "isDeprecated": false
          },
          {
            "name": "DeleteSettings",
            "isDeprecated": false
          },
          {
            "name": "CreateAdministrator",
            "isDeprecated": false
          },
          {
            "name": "ReadAdministrator",
            "isDeprecated": false
          },
          {
            "name": "UpdateAdministrator",
            "isDeprecated": false
          },
          {
            "name": "DeleteAdministrator",
            "isDeprecated": false
          },
          {
            "name": "CreateAsset",
            "isDeprecated": false
          },
          {
            "name": "ReadAsset",
            "isDeprecated": false
          },
          {
            "name": "UpdateAsset",
            "isDeprecated": false
          },
          {
            "name": "DeleteAsset",
            "isDeprecated": false
          },
          {
            "name": "CreateChannel",
            "isDeprecated": false
          },
          {
            "name": "ReadChannel",
            "isDeprecated": false
          },
          {
            "name": "UpdateChannel",
            "isDeprecated": false
          },
          {
            "name": "DeleteChannel",
            "isDeprecated": false
          },
          {
            "name": "CreateCollection",
            "isDeprecated": false
          },
          {
            "name": "ReadCollection",
            "isDeprecated": false
          },
          {
            "name": "UpdateCollection",
            "isDeprecated": false
          },
          {
            "name": "DeleteCollection",
            "isDeprecated": false
          },
          {
            "name": "CreateCountry",
            "isDeprecated": false
          },
          {
            "name": "ReadCountry",
            "isDeprecated": false
          },
          {
            "name": "UpdateCountry",
            "isDeprecated": false
          },
          {
            "name": "DeleteCountry",
            "isDeprecated": false
          },
          {
            "name": "CreateCustomer",
            "isDeprecated": false
          },
          {
            "name": "ReadCustomer",
            "isDeprecated": false
          },
          {
            "name": "UpdateCustomer",
            "isDeprecated": false
          },
          {
            "name": "DeleteCustomer",
            "isDeprecated": false
          },
          {
            "name": "CreateCustomerGroup",
            "isDeprecated": false
          },
          {
            "name": "ReadCustomerGroup",
            "isDeprecated": false
          },
          {
            "name": "UpdateCustomerGroup",
            "isDeprecated": false
          },
          {
            "name": "DeleteCustomerGroup",
            "isDeprecated": false
          },
          {
            "name": "CreateFacet",
            "isDeprecated": false
          },
          {
            "name": "ReadFacet",
            "isDeprecated": false
          },
          {
            "name": "UpdateFacet",
            "isDeprecated": false
          },
          {
            "name": "DeleteFacet",
            "isDeprecated": false
          },
          {
            "name": "CreateOrder",
            "isDeprecated": false
          },
          {
            "name": "ReadOrder",
            "isDeprecated": false
          },
          {
            "name": "UpdateOrder",
            "isDeprecated": false
          },
          {
            "name": "DeleteOrder",
            "isDeprecated": false
          },
          {
            "name": "CreatePaymentMethod",
            "isDeprecated": false
          },
          {
            "name": "ReadPaymentMethod",
            "isDeprecated": false
          },
          {
            "name": "UpdatePaymentMethod",
            "isDeprecated": false
          },
          {
            "name": "DeletePaymentMethod",
            "isDeprecated": false
          },
          {
            "name": "CreateProduct",
            "isDeprecated": false
          },
          {
            "name": "ReadProduct",
            "isDeprecated": false
          },
          {
            "name": "UpdateProduct",
            "isDeprecated": false
          },
          {
            "name": "DeleteProduct",
            "isDeprecated": false
          },
          {
            "name": "CreatePromotion",
            "isDeprecated": false
          },
          {
            "name": "ReadPromotion",
            "isDeprecated": false
          },
          {
            "name": "UpdatePromotion",
            "isDeprecated": false
          },
          {
            "name": "DeletePromotion",
            "isDeprecated": false
          },
          {
            "name": "CreateShippingMethod",
            "isDeprecated": false
          },
          {
            "name": "ReadShippingMethod",
            "isDeprecated": false
          },
          {
            "name": "UpdateShippingMethod",
            "isDeprecated": false
          },
          {
            "name": "DeleteShippingMethod",
            "isDeprecated": false
          },
          {
            "name": "CreateTag",
            "isDeprecated": false
          },
          {
            "name": "ReadTag",
            "isDeprecated": false
          },
          {
            "name": "UpdateTag",
            "isDeprecated": false
          },
          {
            "name": "DeleteTag",
            "isDeprecated": false
          },
          {
            "name": "CreateTaxCategory",
            "isDeprecated": false
          },
          {
            "name": "ReadTaxCategory",
            "isDeprecated": false
          },
          {
            "name": "UpdateTaxCategory",
            "isDeprecated": false
          },
          {
            "name": "DeleteTaxCategory",
            "isDeprecated": false
          },
          {
            "name": "CreateTaxRate",
            "isDeprecated": false
          },
          {
            "name": "ReadTaxRate",
            "isDeprecated": false
          },
          {
            "name": "UpdateTaxRate",
            "isDeprecated": false
          },
          {
            "name": "DeleteTaxRate",
            "isDeprecated": false
          },
          {
            "name": "CreateSeller",
            "isDeprecated": false
          },
          {
            "name": "ReadSeller",
            "isDeprecated": false
          },
          {
            "name": "UpdateSeller",
            "isDeprecated": false
          },
          {
            "name": "DeleteSeller",
            "isDeprecated": false
          },
          {
            "name": "CreateStockLocation",
            "isDeprecated": false
          },
          {
            "name": "ReadStockLocation",
            "isDeprecated": false
          },
          {
            "name": "UpdateStockLocation",
            "isDeprecated": false
          },
          {
            "name": "DeleteStockLocation",
            "isDeprecated": false
          },
          {
            "name": "CreateSystem",
            "isDeprecated": false
          },
          {
            "name": "ReadSystem",
            "isDeprecated": false
          },
          {
            "name": "UpdateSystem",
            "isDeprecated": false
          },
          {
            "name": "DeleteSystem",
            "isDeprecated": false
          },
          {
            "name": "CreateZone",
            "isDeprecated": false
          },
          {
            "name": "ReadZone",
            "isDeprecated": false
          },
          {
            "name": "UpdateZone",
            "isDeprecated": false
          },
          {
            "name": "DeleteZone",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "PriceRange",
        "fields": [
          {
            "name": "max",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "min",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Product",
        "fields": [
          {
            "name": "assets",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Asset"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "collections",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Collection"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "customFields",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "enabled",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "facetValues",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "FacetValue"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "featuredAsset",
            "type": {
              "kind": "OBJECT",
              "name": "Asset"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "languageCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "optionGroups",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ProductOptionGroup"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "slug",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "translations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ProductTranslation"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "variantList",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ProductVariantList"
              }
            },
            "args": [
              {
                "name": "options",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProductVariantListOptions"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "variants",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ProductVariant"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProductFilterParameter",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IDOperators"
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateOperators"
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateOperators"
            }
          },
          {
            "name": "languageCode",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators"
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators"
            }
          },
          {
            "name": "slug",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators"
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators"
            }
          },
          {
            "name": "enabled",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "BooleanOperators"
            }
          },
          {
            "name": "_and",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProductFilterParameter"
                }
              }
            }
          },
          {
            "name": "_or",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProductFilterParameter"
                }
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "ProductList",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Product"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "totalItems",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "PaginatedList"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProductListOptions",
        "inputFields": [
          {
            "name": "skip",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          },
          {
            "name": "take",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          },
          {
            "name": "sort",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProductSortParameter"
            }
          },
          {
            "name": "filter",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProductFilterParameter"
            }
          },
          {
            "name": "filterOperator",
            "type": {
              "kind": "ENUM",
              "name": "LogicalOperator"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "ProductOption",
        "fields": [
          {
            "name": "code",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "customFields",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "group",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ProductOptionGroup"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "groupId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "languageCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "translations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ProductOptionTranslation"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ProductOptionGroup",
        "fields": [
          {
            "name": "code",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "customFields",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "languageCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "options",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ProductOption"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "translations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ProductOptionGroupTranslation"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ProductOptionGroupTranslation",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "languageCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ProductOptionTranslation",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "languageCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProductSortParameter",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "slug",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "ProductTranslation",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "languageCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "slug",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ProductVariant",
        "fields": [
          {
            "name": "assets",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Asset"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "currencyCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "CurrencyCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "customFields",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "facetValues",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "FacetValue"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "featuredAsset",
            "type": {
              "kind": "OBJECT",
              "name": "Asset"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "languageCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "options",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ProductOption"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "price",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "priceWithTax",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "product",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Product"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "productId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "sku",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "stockLevel",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "taxCategory",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TaxCategory"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "taxRateApplied",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TaxRate"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "translations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ProductVariantTranslation"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProductVariantFilterParameter",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IDOperators"
            }
          },
          {
            "name": "productId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IDOperators"
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateOperators"
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateOperators"
            }
          },
          {
            "name": "languageCode",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators"
            }
          },
          {
            "name": "sku",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators"
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators"
            }
          },
          {
            "name": "price",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberOperators"
            }
          },
          {
            "name": "currencyCode",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators"
            }
          },
          {
            "name": "priceWithTax",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberOperators"
            }
          },
          {
            "name": "stockLevel",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators"
            }
          },
          {
            "name": "_and",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProductVariantFilterParameter"
                }
              }
            }
          },
          {
            "name": "_or",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProductVariantFilterParameter"
                }
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "ProductVariantList",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ProductVariant"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "totalItems",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "PaginatedList"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProductVariantListOptions",
        "inputFields": [
          {
            "name": "skip",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          },
          {
            "name": "take",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          },
          {
            "name": "sort",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProductVariantSortParameter"
            }
          },
          {
            "name": "filter",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProductVariantFilterParameter"
            }
          },
          {
            "name": "filterOperator",
            "type": {
              "kind": "ENUM",
              "name": "LogicalOperator"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProductVariantSortParameter",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "productId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "sku",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "price",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "priceWithTax",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "stockLevel",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "ProductVariantTranslation",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "languageCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Promotion",
        "fields": [
          {
            "name": "actions",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ConfigurableOperation"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "conditions",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ConfigurableOperation"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "couponCode",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "customFields",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "enabled",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "endsAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "perCustomerUsageLimit",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "startsAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "translations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PromotionTranslation"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "usageLimit",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "PromotionList",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Promotion"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "totalItems",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "PaginatedList"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "PromotionTranslation",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "languageCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Province",
        "fields": [
          {
            "name": "code",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "customFields",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "enabled",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "languageCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "parent",
            "type": {
              "kind": "INTERFACE",
              "name": "Region"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "parentId",
            "type": {
              "kind": "SCALAR",
              "name": "ID"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "translations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "RegionTranslation"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          },
          {
            "kind": "INTERFACE",
            "name": "Region"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ProvinceList",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Province"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "totalItems",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "PaginatedList"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "PublicPaymentMethod",
        "fields": [
          {
            "name": "code",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "customFields",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "translations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PaymentMethodTranslation"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PublicShippingMethod",
        "fields": [
          {
            "name": "code",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "customFields",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "translations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ShippingMethodTranslation"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Query",
        "fields": [
          {
            "name": "activeChannel",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Channel"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "activeCustomer",
            "type": {
              "kind": "OBJECT",
              "name": "Customer"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "activeOrder",
            "type": {
              "kind": "OBJECT",
              "name": "Order"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "activePaymentMethods",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PublicPaymentMethod"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "activeShippingMethods",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PublicShippingMethod"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "availableCountries",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Country"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "collection",
            "type": {
              "kind": "OBJECT",
              "name": "Collection"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "SCALAR",
                  "name": "ID"
                }
              },
              {
                "name": "slug",
                "type": {
                  "kind": "SCALAR",
                  "name": "String"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "collections",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CollectionList"
              }
            },
            "args": [
              {
                "name": "options",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "CollectionListOptions"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "eligiblePaymentMethods",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PaymentMethodQuote"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "eligibleShippingMethods",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ShippingMethodQuote"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "facet",
            "type": {
              "kind": "OBJECT",
              "name": "Facet"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "facets",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "FacetList"
              }
            },
            "args": [
              {
                "name": "options",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "FacetListOptions"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "me",
            "type": {
              "kind": "OBJECT",
              "name": "CurrentUser"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "nextOrderStates",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "order",
            "type": {
              "kind": "OBJECT",
              "name": "Order"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "orderByCode",
            "type": {
              "kind": "OBJECT",
              "name": "Order"
            },
            "args": [
              {
                "name": "code",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "product",
            "type": {
              "kind": "OBJECT",
              "name": "Product"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "SCALAR",
                  "name": "ID"
                }
              },
              {
                "name": "slug",
                "type": {
                  "kind": "SCALAR",
                  "name": "String"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "products",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ProductList"
              }
            },
            "args": [
              {
                "name": "options",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProductListOptions"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "search",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "SearchResponse"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "SearchInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "RefreshCustomerVerificationResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "NativeAuthStrategyError"
          },
          {
            "kind": "OBJECT",
            "name": "Success"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Refund",
        "fields": [
          {
            "name": "adjustment",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "customFields",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "lines",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "RefundLine"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "metadata",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "method",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "paymentId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "reason",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "shipping",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "state",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "total",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "transactionId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "RefundLine",
        "fields": [
          {
            "name": "orderLine",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "OrderLine"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "orderLineId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "quantity",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "refund",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Refund"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "refundId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INTERFACE",
        "name": "Region",
        "fields": [
          {
            "name": "code",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "enabled",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "languageCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "parent",
            "type": {
              "kind": "INTERFACE",
              "name": "Region"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "parentId",
            "type": {
              "kind": "SCALAR",
              "name": "ID"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "translations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "RegionTranslation"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ],
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Country"
          },
          {
            "kind": "OBJECT",
            "name": "Province"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "RegionTranslation",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "languageCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "RegisterCustomerAccountResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "MissingPasswordError"
          },
          {
            "kind": "OBJECT",
            "name": "NativeAuthStrategyError"
          },
          {
            "kind": "OBJECT",
            "name": "PasswordValidationError"
          },
          {
            "kind": "OBJECT",
            "name": "Success"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "RegisterCustomerInput",
        "inputFields": [
          {
            "name": "emailAddress",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            }
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "firstName",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "lastName",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "phoneNumber",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "password",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "RelationCustomFieldConfig",
        "fields": [
          {
            "name": "deprecated",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "deprecationReason",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "description",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "entity",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "internal",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "label",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "list",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "nullable",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "readonly",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "requiresPermission",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "Permission"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "scalarFields",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "ui",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "CustomField"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "RemoveOrderItemsResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Order"
          },
          {
            "kind": "OBJECT",
            "name": "OrderInterceptorError"
          },
          {
            "kind": "OBJECT",
            "name": "OrderModificationError"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "RequestPasswordResetResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "NativeAuthStrategyError"
          },
          {
            "kind": "OBJECT",
            "name": "Success"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "RequestUpdateCustomerEmailAddressResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "EmailAddressConflictError"
          },
          {
            "kind": "OBJECT",
            "name": "InvalidCredentialsError"
          },
          {
            "kind": "OBJECT",
            "name": "NativeAuthStrategyError"
          },
          {
            "kind": "OBJECT",
            "name": "Success"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "ResetPasswordResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "CurrentUser"
          },
          {
            "kind": "OBJECT",
            "name": "NativeAuthStrategyError"
          },
          {
            "kind": "OBJECT",
            "name": "NotVerifiedError"
          },
          {
            "kind": "OBJECT",
            "name": "PasswordResetTokenExpiredError"
          },
          {
            "kind": "OBJECT",
            "name": "PasswordResetTokenInvalidError"
          },
          {
            "kind": "OBJECT",
            "name": "PasswordValidationError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Role",
        "fields": [
          {
            "name": "channels",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Channel"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "code",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "permissions",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "Permission"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "RoleList",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Role"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "totalItems",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "PaginatedList"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SearchInput",
        "inputFields": [
          {
            "name": "term",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "facetValueIds",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID"
                }
              }
            }
          },
          {
            "name": "facetValueOperator",
            "type": {
              "kind": "ENUM",
              "name": "LogicalOperator"
            }
          },
          {
            "name": "facetValueFilters",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "FacetValueFilterInput"
                }
              }
            }
          },
          {
            "name": "collectionId",
            "type": {
              "kind": "SCALAR",
              "name": "ID"
            }
          },
          {
            "name": "collectionSlug",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "groupByProduct",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "take",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          },
          {
            "name": "skip",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          },
          {
            "name": "sort",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SearchResultSortParameter"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "SearchReindexResponse",
        "fields": [
          {
            "name": "success",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SearchResponse",
        "fields": [
          {
            "name": "collections",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CollectionResult"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "facetValues",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "FacetValueResult"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "SearchResult"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "totalItems",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SearchResult",
        "fields": [
          {
            "name": "collectionIds",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "currencyCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "CurrencyCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "facetIds",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "facetValueIds",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "price",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "SearchResultPrice"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "priceWithTax",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "SearchResultPrice"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "productAsset",
            "type": {
              "kind": "OBJECT",
              "name": "SearchResultAsset"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "productId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "productName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "productVariantAsset",
            "type": {
              "kind": "OBJECT",
              "name": "SearchResultAsset"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "productVariantId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "productVariantName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "score",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "sku",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "slug",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SearchResultAsset",
        "fields": [
          {
            "name": "focalPoint",
            "type": {
              "kind": "OBJECT",
              "name": "Coordinate"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "preview",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "SearchResultPrice",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "PriceRange"
          },
          {
            "kind": "OBJECT",
            "name": "SinglePrice"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SearchResultSortParameter",
        "inputFields": [
          {
            "name": "name",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "price",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "Seller",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "customFields",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "SetCustomerForOrderResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "AlreadyLoggedInError"
          },
          {
            "kind": "OBJECT",
            "name": "EmailAddressConflictError"
          },
          {
            "kind": "OBJECT",
            "name": "GuestCheckoutError"
          },
          {
            "kind": "OBJECT",
            "name": "NoActiveOrderError"
          },
          {
            "kind": "OBJECT",
            "name": "Order"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "SetOrderShippingMethodResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "IneligibleShippingMethodError"
          },
          {
            "kind": "OBJECT",
            "name": "NoActiveOrderError"
          },
          {
            "kind": "OBJECT",
            "name": "Order"
          },
          {
            "kind": "OBJECT",
            "name": "OrderModificationError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ShippingLine",
        "fields": [
          {
            "name": "customFields",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "discountedPrice",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "discountedPriceWithTax",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "discounts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Discount"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "price",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "priceWithTax",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "shippingMethod",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ShippingMethod"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ShippingMethod",
        "fields": [
          {
            "name": "calculator",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ConfigurableOperation"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "checker",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ConfigurableOperation"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "code",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "customFields",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "fulfillmentHandlerCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "languageCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "translations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ShippingMethodTranslation"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ShippingMethodList",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ShippingMethod"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "totalItems",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "PaginatedList"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ShippingMethodQuote",
        "fields": [
          {
            "name": "code",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "customFields",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "metadata",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "price",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "priceWithTax",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ShippingMethodTranslation",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "languageCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SinglePrice",
        "fields": [
          {
            "name": "value",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "SortOrder",
        "enumValues": [
          {
            "name": "ASC",
            "isDeprecated": false
          },
          {
            "name": "DESC",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "SCALAR",
        "name": "String"
      },
      {
        "kind": "OBJECT",
        "name": "StringCustomFieldConfig",
        "fields": [
          {
            "name": "deprecated",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "deprecationReason",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "description",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "internal",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "label",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "length",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "list",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "nullable",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "options",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "StringFieldOption"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "pattern",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "readonly",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "requiresPermission",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "Permission"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "ui",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "CustomField"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "StringFieldOption",
        "fields": [
          {
            "name": "label",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "value",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "StringListOperators",
        "inputFields": [
          {
            "name": "inList",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "StringOperators",
        "inputFields": [
          {
            "name": "eq",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "notEq",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "contains",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "notContains",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String"
                }
              }
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String"
                }
              }
            }
          },
          {
            "name": "regex",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "isNull",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "StringStructFieldConfig",
        "fields": [
          {
            "name": "description",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "label",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "length",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "list",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "options",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "StringFieldOption"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "pattern",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "ui",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "StructField"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "StructCustomFieldConfig",
        "fields": [
          {
            "name": "deprecated",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "deprecationReason",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "description",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "fields",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "UNION",
                    "name": "StructFieldConfig"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "internal",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "label",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "list",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "nullable",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "readonly",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "requiresPermission",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "Permission"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "ui",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "CustomField"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "StructField",
        "fields": [
          {
            "name": "description",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "label",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "list",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "ui",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [],
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "BooleanStructFieldConfig"
          },
          {
            "kind": "OBJECT",
            "name": "DateTimeStructFieldConfig"
          },
          {
            "kind": "OBJECT",
            "name": "FloatStructFieldConfig"
          },
          {
            "kind": "OBJECT",
            "name": "IntStructFieldConfig"
          },
          {
            "kind": "OBJECT",
            "name": "StringStructFieldConfig"
          },
          {
            "kind": "OBJECT",
            "name": "TextStructFieldConfig"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "StructFieldConfig",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "BooleanStructFieldConfig"
          },
          {
            "kind": "OBJECT",
            "name": "DateTimeStructFieldConfig"
          },
          {
            "kind": "OBJECT",
            "name": "FloatStructFieldConfig"
          },
          {
            "kind": "OBJECT",
            "name": "IntStructFieldConfig"
          },
          {
            "kind": "OBJECT",
            "name": "StringStructFieldConfig"
          },
          {
            "kind": "OBJECT",
            "name": "TextStructFieldConfig"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Success",
        "fields": [
          {
            "name": "success",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Surcharge",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "price",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "priceWithTax",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "sku",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "taxLines",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "TaxLine"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "taxRate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Tag",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "value",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "TagList",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Tag"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "totalItems",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "PaginatedList"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "TaxCategory",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "customFields",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "isDefault",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "TaxLine",
        "fields": [
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "taxRate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TaxRate",
        "fields": [
          {
            "name": "category",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TaxCategory"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "customFields",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "customerGroup",
            "type": {
              "kind": "OBJECT",
              "name": "CustomerGroup"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "enabled",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "value",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "zone",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Zone"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "TaxRateList",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "TaxRate"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "totalItems",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "PaginatedList"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "TextCustomFieldConfig",
        "fields": [
          {
            "name": "deprecated",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "deprecationReason",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "description",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "internal",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "label",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "list",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "nullable",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "readonly",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "requiresPermission",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "Permission"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "ui",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "CustomField"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "TextStructFieldConfig",
        "fields": [
          {
            "name": "description",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "label",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "list",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "ui",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "StructField"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "TransitionOrderToStateResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Order"
          },
          {
            "kind": "OBJECT",
            "name": "OrderStateTransitionError"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UpdateAddressInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            }
          },
          {
            "name": "fullName",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "company",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "streetLine1",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "streetLine2",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "city",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "province",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "postalCode",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "countryCode",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "phoneNumber",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "defaultShippingAddress",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "defaultBillingAddress",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "customFields",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "UNION",
        "name": "UpdateCustomerEmailAddressResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "IdentifierChangeTokenExpiredError"
          },
          {
            "kind": "OBJECT",
            "name": "IdentifierChangeTokenInvalidError"
          },
          {
            "kind": "OBJECT",
            "name": "NativeAuthStrategyError"
          },
          {
            "kind": "OBJECT",
            "name": "Success"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UpdateCustomerInput",
        "inputFields": [
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "firstName",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "lastName",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "phoneNumber",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "customFields",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "UNION",
        "name": "UpdateCustomerPasswordResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "InvalidCredentialsError"
          },
          {
            "kind": "OBJECT",
            "name": "NativeAuthStrategyError"
          },
          {
            "kind": "OBJECT",
            "name": "PasswordValidationError"
          },
          {
            "kind": "OBJECT",
            "name": "Success"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "UpdateMultipleOrderItemsResult",
        "fields": [
          {
            "name": "errorResults",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "UNION",
                    "name": "UpdateOrderItemErrorResult"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "order",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Order"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UpdateOrderInput",
        "inputFields": [
          {
            "name": "customFields",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "UNION",
        "name": "UpdateOrderItemErrorResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "InsufficientStockError"
          },
          {
            "kind": "OBJECT",
            "name": "NegativeQuantityError"
          },
          {
            "kind": "OBJECT",
            "name": "OrderInterceptorError"
          },
          {
            "kind": "OBJECT",
            "name": "OrderLimitError"
          },
          {
            "kind": "OBJECT",
            "name": "OrderModificationError"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "UpdateOrderItemsResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "InsufficientStockError"
          },
          {
            "kind": "OBJECT",
            "name": "NegativeQuantityError"
          },
          {
            "kind": "OBJECT",
            "name": "Order"
          },
          {
            "kind": "OBJECT",
            "name": "OrderInterceptorError"
          },
          {
            "kind": "OBJECT",
            "name": "OrderLimitError"
          },
          {
            "kind": "OBJECT",
            "name": "OrderModificationError"
          }
        ]
      },
      {
        "kind": "SCALAR",
        "name": "Upload"
      },
      {
        "kind": "OBJECT",
        "name": "User",
        "fields": [
          {
            "name": "authenticationMethods",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "AuthenticationMethod"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "customFields",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "identifier",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "lastLogin",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "roles",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Role"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "verified",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "VerificationTokenExpiredError",
        "fields": [
          {
            "name": "errorCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "VerificationTokenInvalidError",
        "fields": [
          {
            "name": "errorCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "VerifyCustomerAccountResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "CurrentUser"
          },
          {
            "kind": "OBJECT",
            "name": "MissingPasswordError"
          },
          {
            "kind": "OBJECT",
            "name": "NativeAuthStrategyError"
          },
          {
            "kind": "OBJECT",
            "name": "PasswordAlreadySetError"
          },
          {
            "kind": "OBJECT",
            "name": "PasswordValidationError"
          },
          {
            "kind": "OBJECT",
            "name": "VerificationTokenExpiredError"
          },
          {
            "kind": "OBJECT",
            "name": "VerificationTokenInvalidError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Zone",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "customFields",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "members",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INTERFACE",
                    "name": "Region"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      }
    ],
    "directives": []
  }
} as const;

export { introspection };