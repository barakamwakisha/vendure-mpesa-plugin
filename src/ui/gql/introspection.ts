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
  "name": "ui-extensions",
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
        "name": "AddFulfillmentToOrderResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "CreateFulfillmentError"
          },
          {
            "kind": "OBJECT",
            "name": "EmptyOrderLineSelectionError"
          },
          {
            "kind": "OBJECT",
            "name": "Fulfillment"
          },
          {
            "kind": "OBJECT",
            "name": "FulfillmentStateTransitionError"
          },
          {
            "kind": "OBJECT",
            "name": "InsufficientStockOnHandError"
          },
          {
            "kind": "OBJECT",
            "name": "InvalidFulfillmentHandlerError"
          },
          {
            "kind": "OBJECT",
            "name": "ItemsAlreadyFulfilledError"
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
        "kind": "INPUT_OBJECT",
        "name": "AddItemToDraftOrderInput",
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
        "name": "AddManualPaymentToOrderResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "ManualPaymentStateError"
          },
          {
            "kind": "OBJECT",
            "name": "Order"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AddNoteToCustomerInput",
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
            "name": "note",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            }
          },
          {
            "name": "isPublic",
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
        "name": "AddNoteToOrderInput",
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
            "name": "note",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            }
          },
          {
            "name": "isPublic",
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
        "kind": "INPUT_OBJECT",
        "name": "AdjustDraftOrderLineInput",
        "inputFields": [
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
        "isOneOf": false
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
        "name": "Administrator",
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
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "User"
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
        "name": "AdministratorFilterParameter",
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
                  "name": "AdministratorFilterParameter"
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
                  "name": "AdministratorFilterParameter"
                }
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "AdministratorList",
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
                    "name": "Administrator"
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
        "name": "AdministratorListOptions",
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
              "name": "AdministratorSortParameter"
            }
          },
          {
            "name": "filter",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AdministratorFilterParameter"
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
        "name": "AdministratorPaymentInput",
        "inputFields": [
          {
            "name": "paymentMethod",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "metadata",
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
        "name": "AdministratorRefundInput",
        "inputFields": [
          {
            "name": "paymentId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            }
          },
          {
            "name": "reason",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "amount",
            "type": {
              "kind": "SCALAR",
              "name": "Money"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AdministratorSortParameter",
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
        "kind": "OBJECT",
        "name": "Allocation",
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
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "StockMovementType"
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
            "name": "StockMovement"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "AlreadyRefundedError",
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
        "kind": "INPUT_OBJECT",
        "name": "AssetFilterParameter",
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
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators"
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
            "name": "fileSize",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberOperators"
            }
          },
          {
            "name": "mimeType",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators"
            }
          },
          {
            "name": "width",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberOperators"
            }
          },
          {
            "name": "height",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberOperators"
            }
          },
          {
            "name": "source",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators"
            }
          },
          {
            "name": "preview",
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
                  "name": "AssetFilterParameter"
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
                  "name": "AssetFilterParameter"
                }
              }
            }
          }
        ],
        "isOneOf": false
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
        "kind": "INPUT_OBJECT",
        "name": "AssetListOptions",
        "inputFields": [
          {
            "name": "tags",
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
            "name": "tagsOperator",
            "type": {
              "kind": "ENUM",
              "name": "LogicalOperator"
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
              "name": "AssetSortParameter"
            }
          },
          {
            "name": "filter",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssetFilterParameter"
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
        "name": "AssetSortParameter",
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
            "name": "fileSize",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "mimeType",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "width",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "height",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "source",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "preview",
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
        "name": "AssignAssetsToChannelInput",
        "inputFields": [
          {
            "name": "assetIds",
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
          },
          {
            "name": "channelId",
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
        "name": "AssignCollectionsToChannelInput",
        "inputFields": [
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
            }
          },
          {
            "name": "channelId",
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
        "name": "AssignFacetsToChannelInput",
        "inputFields": [
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
            }
          },
          {
            "name": "channelId",
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
        "name": "AssignPaymentMethodsToChannelInput",
        "inputFields": [
          {
            "name": "paymentMethodIds",
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
          },
          {
            "name": "channelId",
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
        "name": "AssignProductVariantsToChannelInput",
        "inputFields": [
          {
            "name": "productVariantIds",
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
          },
          {
            "name": "channelId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            }
          },
          {
            "name": "priceFactor",
            "type": {
              "kind": "SCALAR",
              "name": "Float"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AssignProductsToChannelInput",
        "inputFields": [
          {
            "name": "productIds",
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
          },
          {
            "name": "channelId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            }
          },
          {
            "name": "priceFactor",
            "type": {
              "kind": "SCALAR",
              "name": "Float"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AssignPromotionsToChannelInput",
        "inputFields": [
          {
            "name": "promotionIds",
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
          },
          {
            "name": "channelId",
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
        "name": "AssignShippingMethodsToChannelInput",
        "inputFields": [
          {
            "name": "shippingMethodIds",
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
          },
          {
            "name": "channelId",
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
        "name": "AssignStockLocationsToChannelInput",
        "inputFields": [
          {
            "name": "stockLocationIds",
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
          },
          {
            "name": "channelId",
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
        "name": "CancelActiveOrderError",
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
            "name": "orderState",
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
        "name": "CancelOrderInput",
        "inputFields": [
          {
            "name": "orderId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            }
          },
          {
            "name": "lines",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "OrderLineInput"
                }
              }
            }
          },
          {
            "name": "cancelShipping",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "reason",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "UNION",
        "name": "CancelOrderResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "CancelActiveOrderError"
          },
          {
            "kind": "OBJECT",
            "name": "EmptyOrderLineSelectionError"
          },
          {
            "kind": "OBJECT",
            "name": "MultipleOrderError"
          },
          {
            "kind": "OBJECT",
            "name": "Order"
          },
          {
            "kind": "OBJECT",
            "name": "OrderStateTransitionError"
          },
          {
            "kind": "OBJECT",
            "name": "QuantityTooGreatError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CancelPaymentError",
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
        "kind": "UNION",
        "name": "CancelPaymentResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "CancelPaymentError"
          },
          {
            "kind": "OBJECT",
            "name": "Payment"
          },
          {
            "kind": "OBJECT",
            "name": "PaymentStateTransitionError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Cancellation",
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
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "StockMovementType"
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
            "name": "StockMovement"
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
        "name": "ChannelDefaultLanguageError",
        "fields": [
          {
            "name": "channelCode",
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
            "name": "language",
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
        "kind": "INPUT_OBJECT",
        "name": "ChannelFilterParameter",
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
            "name": "code",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators"
            }
          },
          {
            "name": "token",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators"
            }
          },
          {
            "name": "defaultLanguageCode",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators"
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
            "name": "defaultCurrencyCode",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators"
            }
          },
          {
            "name": "trackInventory",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "BooleanOperators"
            }
          },
          {
            "name": "outOfStockThreshold",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberOperators"
            }
          },
          {
            "name": "pricesIncludeTax",
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
                  "name": "ChannelFilterParameter"
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
                  "name": "ChannelFilterParameter"
                }
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "ChannelList",
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
                    "name": "Channel"
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
        "name": "ChannelListOptions",
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
              "name": "ChannelSortParameter"
            }
          },
          {
            "name": "filter",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ChannelFilterParameter"
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
        "name": "ChannelSortParameter",
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
            "name": "code",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "token",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "outOfStockThreshold",
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
            "name": "inheritFilters",
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
            "name": "isPrivate",
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
            "name": "isPrivate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "BooleanOperators"
            }
          },
          {
            "name": "inheritFilters",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "BooleanOperators"
            }
          },
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
        "kind": "INPUT_OBJECT",
        "name": "CoordinateInput",
        "inputFields": [
          {
            "name": "x",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float"
              }
            }
          },
          {
            "name": "y",
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
        "kind": "INPUT_OBJECT",
        "name": "CountryFilterParameter",
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
            "name": "code",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators"
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
            "name": "name",
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
            "name": "parentId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IDOperators"
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
                  "name": "CountryFilterParameter"
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
                  "name": "CountryFilterParameter"
                }
              }
            }
          }
        ],
        "isOneOf": false
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
        "kind": "INPUT_OBJECT",
        "name": "CountryListOptions",
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
              "name": "CountrySortParameter"
            }
          },
          {
            "name": "filter",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CountryFilterParameter"
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
        "name": "CountrySortParameter",
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
            "name": "code",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "type",
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
            "name": "parentId",
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
        "name": "CountryTranslationInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "ID"
            }
          },
          {
            "name": "languageCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode"
              }
            }
          },
          {
            "name": "name",
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
        "name": "CreateAdministratorInput",
        "inputFields": [
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
            "name": "roleIds",
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
        "name": "CreateAssetInput",
        "inputFields": [
          {
            "name": "file",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Upload"
              }
            }
          },
          {
            "name": "tags",
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
        "name": "CreateAssetResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Asset"
          },
          {
            "kind": "OBJECT",
            "name": "MimeTypeError"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CreateChannelInput",
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
            "name": "token",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            }
          },
          {
            "name": "defaultLanguageCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode"
              }
            }
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
            }
          },
          {
            "name": "pricesIncludeTax",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
              }
            }
          },
          {
            "name": "currencyCode",
            "type": {
              "kind": "ENUM",
              "name": "CurrencyCode"
            }
          },
          {
            "name": "defaultCurrencyCode",
            "type": {
              "kind": "ENUM",
              "name": "CurrencyCode"
            }
          },
          {
            "name": "availableCurrencyCodes",
            "type": {
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
          {
            "name": "trackInventory",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "outOfStockThreshold",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          },
          {
            "name": "defaultTaxZoneId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            }
          },
          {
            "name": "defaultShippingZoneId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            }
          },
          {
            "name": "sellerId",
            "type": {
              "kind": "SCALAR",
              "name": "ID"
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
        "name": "CreateChannelResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Channel"
          },
          {
            "kind": "OBJECT",
            "name": "LanguageNotAvailableError"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CreateCollectionInput",
        "inputFields": [
          {
            "name": "isPrivate",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "featuredAssetId",
            "type": {
              "kind": "SCALAR",
              "name": "ID"
            }
          },
          {
            "name": "assetIds",
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
            "name": "parentId",
            "type": {
              "kind": "SCALAR",
              "name": "ID"
            }
          },
          {
            "name": "inheritFilters",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
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
                    "kind": "INPUT_OBJECT",
                    "name": "ConfigurableOperationInput"
                  }
                }
              }
            }
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
                    "kind": "INPUT_OBJECT",
                    "name": "CreateCollectionTranslationInput"
                  }
                }
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
        "kind": "INPUT_OBJECT",
        "name": "CreateCollectionTranslationInput",
        "inputFields": [
          {
            "name": "languageCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode"
              }
            }
          },
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
            "name": "slug",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            }
          },
          {
            "name": "description",
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
        "kind": "INPUT_OBJECT",
        "name": "CreateCountryInput",
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
            "name": "translations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CountryTranslationInput"
                  }
                }
              }
            }
          },
          {
            "name": "enabled",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
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
        "kind": "INPUT_OBJECT",
        "name": "CreateCustomerGroupInput",
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
            "name": "customerIds",
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
        "kind": "UNION",
        "name": "CreateCustomerResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Customer"
          },
          {
            "kind": "OBJECT",
            "name": "EmailAddressConflictError"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CreateFacetInput",
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
            "name": "isPrivate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
              }
            }
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
                    "kind": "INPUT_OBJECT",
                    "name": "FacetTranslationInput"
                  }
                }
              }
            }
          },
          {
            "name": "values",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CreateFacetValueWithFacetInput"
                }
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
        "kind": "INPUT_OBJECT",
        "name": "CreateFacetValueInput",
        "inputFields": [
          {
            "name": "facetId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            }
          },
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
            "name": "translations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "FacetValueTranslationInput"
                  }
                }
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
        "kind": "INPUT_OBJECT",
        "name": "CreateFacetValueWithFacetInput",
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
            "name": "translations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "FacetValueTranslationInput"
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
        "name": "CreateFulfillmentError",
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
            "name": "fulfillmentHandlerError",
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
        "kind": "INPUT_OBJECT",
        "name": "CreateGroupOptionInput",
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
            "name": "translations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ProductOptionGroupTranslationInput"
                  }
                }
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CreatePaymentMethodInput",
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
            "name": "enabled",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
              }
            }
          },
          {
            "name": "checker",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ConfigurableOperationInput"
            }
          },
          {
            "name": "handler",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ConfigurableOperationInput"
              }
            }
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
                    "kind": "INPUT_OBJECT",
                    "name": "PaymentMethodTranslationInput"
                  }
                }
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
        "kind": "INPUT_OBJECT",
        "name": "CreateProductInput",
        "inputFields": [
          {
            "name": "featuredAssetId",
            "type": {
              "kind": "SCALAR",
              "name": "ID"
            }
          },
          {
            "name": "enabled",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "assetIds",
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
            "name": "translations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ProductTranslationInput"
                  }
                }
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
        "kind": "INPUT_OBJECT",
        "name": "CreateProductOptionGroupInput",
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
            "name": "translations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ProductOptionGroupTranslationInput"
                  }
                }
              }
            }
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
                    "kind": "INPUT_OBJECT",
                    "name": "CreateGroupOptionInput"
                  }
                }
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
        "kind": "INPUT_OBJECT",
        "name": "CreateProductOptionInput",
        "inputFields": [
          {
            "name": "productOptionGroupId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            }
          },
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
            "name": "translations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ProductOptionGroupTranslationInput"
                  }
                }
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
        "kind": "INPUT_OBJECT",
        "name": "CreateProductVariantInput",
        "inputFields": [
          {
            "name": "productId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            }
          },
          {
            "name": "enabled",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
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
                    "kind": "INPUT_OBJECT",
                    "name": "ProductVariantTranslationInput"
                  }
                }
              }
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
            "name": "sku",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            }
          },
          {
            "name": "price",
            "type": {
              "kind": "SCALAR",
              "name": "Money"
            }
          },
          {
            "name": "prices",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "CreateProductVariantPriceInput"
              }
            }
          },
          {
            "name": "taxCategoryId",
            "type": {
              "kind": "SCALAR",
              "name": "ID"
            }
          },
          {
            "name": "optionIds",
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
            "name": "featuredAssetId",
            "type": {
              "kind": "SCALAR",
              "name": "ID"
            }
          },
          {
            "name": "assetIds",
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
            "name": "stockOnHand",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          },
          {
            "name": "stockLevels",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "StockLevelInput"
                }
              }
            }
          },
          {
            "name": "outOfStockThreshold",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          },
          {
            "name": "useGlobalOutOfStockThreshold",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "trackInventory",
            "type": {
              "kind": "ENUM",
              "name": "GlobalFlag"
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
        "name": "CreateProductVariantOptionInput",
        "inputFields": [
          {
            "name": "optionGroupId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            }
          },
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
            "name": "translations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ProductOptionTranslationInput"
                  }
                }
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CreateProductVariantPriceInput",
        "inputFields": [
          {
            "name": "currencyCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "CurrencyCode"
              }
            }
          },
          {
            "name": "price",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
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
        "kind": "INPUT_OBJECT",
        "name": "CreatePromotionInput",
        "inputFields": [
          {
            "name": "enabled",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
              }
            }
          },
          {
            "name": "startsAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime"
            }
          },
          {
            "name": "endsAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime"
            }
          },
          {
            "name": "couponCode",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "perCustomerUsageLimit",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          },
          {
            "name": "usageLimit",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
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
                    "kind": "INPUT_OBJECT",
                    "name": "ConfigurableOperationInput"
                  }
                }
              }
            }
          },
          {
            "name": "actions",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ConfigurableOperationInput"
                  }
                }
              }
            }
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
                    "kind": "INPUT_OBJECT",
                    "name": "PromotionTranslationInput"
                  }
                }
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
        "kind": "UNION",
        "name": "CreatePromotionResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "MissingConditionsError"
          },
          {
            "kind": "OBJECT",
            "name": "Promotion"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CreateProvinceInput",
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
            "name": "translations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ProvinceTranslationInput"
                  }
                }
              }
            }
          },
          {
            "name": "enabled",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
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
        "kind": "INPUT_OBJECT",
        "name": "CreateRoleInput",
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
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            }
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
            }
          },
          {
            "name": "channelIds",
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
        "name": "CreateSellerInput",
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
        "name": "CreateShippingMethodInput",
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
            "name": "fulfillmentHandler",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            }
          },
          {
            "name": "checker",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ConfigurableOperationInput"
              }
            }
          },
          {
            "name": "calculator",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ConfigurableOperationInput"
              }
            }
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
                    "kind": "INPUT_OBJECT",
                    "name": "ShippingMethodTranslationInput"
                  }
                }
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
        "kind": "INPUT_OBJECT",
        "name": "CreateStockLocationInput",
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
            "name": "description",
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
        "kind": "INPUT_OBJECT",
        "name": "CreateTagInput",
        "inputFields": [
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
        "kind": "INPUT_OBJECT",
        "name": "CreateTaxCategoryInput",
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
            "name": "isDefault",
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
        "name": "CreateTaxRateInput",
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
            "name": "enabled",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
              }
            }
          },
          {
            "name": "value",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float"
              }
            }
          },
          {
            "name": "categoryId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            }
          },
          {
            "name": "zoneId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            }
          },
          {
            "name": "customerGroupId",
            "type": {
              "kind": "SCALAR",
              "name": "ID"
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
        "name": "CreateZoneInput",
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
            "name": "memberIds",
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
        "name": "CustomFields",
        "fields": [
          {
            "name": "Address",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "UNION",
                    "name": "CustomFieldConfig"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "Administrator",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "UNION",
                    "name": "CustomFieldConfig"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "Asset",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "UNION",
                    "name": "CustomFieldConfig"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "Channel",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "UNION",
                    "name": "CustomFieldConfig"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "Collection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "UNION",
                    "name": "CustomFieldConfig"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "Customer",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "UNION",
                    "name": "CustomFieldConfig"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "CustomerGroup",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "UNION",
                    "name": "CustomFieldConfig"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "Facet",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "UNION",
                    "name": "CustomFieldConfig"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "FacetValue",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "UNION",
                    "name": "CustomFieldConfig"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "Fulfillment",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "UNION",
                    "name": "CustomFieldConfig"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "GlobalSettings",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "UNION",
                    "name": "CustomFieldConfig"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "HistoryEntry",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "UNION",
                    "name": "CustomFieldConfig"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "Order",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "UNION",
                    "name": "CustomFieldConfig"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "OrderLine",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "UNION",
                    "name": "CustomFieldConfig"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "Payment",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "UNION",
                    "name": "CustomFieldConfig"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "PaymentMethod",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "UNION",
                    "name": "CustomFieldConfig"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "Product",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "UNION",
                    "name": "CustomFieldConfig"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "ProductOption",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "UNION",
                    "name": "CustomFieldConfig"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "ProductOptionGroup",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "UNION",
                    "name": "CustomFieldConfig"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "ProductVariant",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "UNION",
                    "name": "CustomFieldConfig"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "ProductVariantPrice",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "UNION",
                    "name": "CustomFieldConfig"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "Promotion",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "UNION",
                    "name": "CustomFieldConfig"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "Refund",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "UNION",
                    "name": "CustomFieldConfig"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "Region",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "UNION",
                    "name": "CustomFieldConfig"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "Seller",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "UNION",
                    "name": "CustomFieldConfig"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "Session",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "UNION",
                    "name": "CustomFieldConfig"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "ShippingLine",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "UNION",
                    "name": "CustomFieldConfig"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "ShippingMethod",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "UNION",
                    "name": "CustomFieldConfig"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "StockLevel",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "UNION",
                    "name": "CustomFieldConfig"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "StockLocation",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "UNION",
                    "name": "CustomFieldConfig"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "StockMovement",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "UNION",
                    "name": "CustomFieldConfig"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "TaxCategory",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "UNION",
                    "name": "CustomFieldConfig"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "TaxRate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "UNION",
                    "name": "CustomFieldConfig"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "User",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "UNION",
                    "name": "CustomFieldConfig"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "Zone",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "UNION",
                    "name": "CustomFieldConfig"
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
            "name": "groups",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CustomerGroup"
                  }
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
            "name": "postalCode",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators"
            }
          },
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
        "kind": "INPUT_OBJECT",
        "name": "CustomerGroupFilterParameter",
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
            "name": "name",
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
                  "name": "CustomerGroupFilterParameter"
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
                  "name": "CustomerGroupFilterParameter"
                }
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "CustomerGroupList",
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
                    "name": "CustomerGroup"
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
        "name": "CustomerGroupListOptions",
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
              "name": "CustomerGroupSortParameter"
            }
          },
          {
            "name": "filter",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CustomerGroupFilterParameter"
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
        "name": "CustomerGroupSortParameter",
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
          }
        ],
        "isOneOf": false
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
        "kind": "INPUT_OBJECT",
        "name": "DeleteAssetInput",
        "inputFields": [
          {
            "name": "assetId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            }
          },
          {
            "name": "force",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "deleteFromAllChannels",
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
        "name": "DeleteAssetsInput",
        "inputFields": [
          {
            "name": "assetIds",
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
          },
          {
            "name": "force",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "deleteFromAllChannels",
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
        "name": "DeleteStockLocationInput",
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
            "name": "transferToLocationId",
            "type": {
              "kind": "SCALAR",
              "name": "ID"
            }
          }
        ],
        "isOneOf": false
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
        "name": "DuplicateEntityError",
        "fields": [
          {
            "name": "duplicationError",
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
        "kind": "INPUT_OBJECT",
        "name": "DuplicateEntityInput",
        "inputFields": [
          {
            "name": "entityName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            }
          },
          {
            "name": "entityId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            }
          },
          {
            "name": "duplicatorInput",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ConfigurableOperationInput"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "UNION",
        "name": "DuplicateEntityResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "DuplicateEntityError"
          },
          {
            "kind": "OBJECT",
            "name": "DuplicateEntitySuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "DuplicateEntitySuccess",
        "fields": [
          {
            "name": "newEntityId",
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
        "kind": "OBJECT",
        "name": "EmptyOrderLineSelectionError",
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
        "name": "EntityCustomFields",
        "fields": [
          {
            "name": "customFields",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "UNION",
                    "name": "CustomFieldConfig"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "entityName",
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
        "name": "EntityDuplicatorDefinition",
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
          },
          {
            "name": "forEntities",
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
            "name": "requiresPermission",
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
          }
        ],
        "interfaces": []
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
            "name": "MIME_TYPE_ERROR",
            "isDeprecated": false
          },
          {
            "name": "LANGUAGE_NOT_AVAILABLE_ERROR",
            "isDeprecated": false
          },
          {
            "name": "DUPLICATE_ENTITY_ERROR",
            "isDeprecated": false
          },
          {
            "name": "FACET_IN_USE_ERROR",
            "isDeprecated": false
          },
          {
            "name": "CHANNEL_DEFAULT_LANGUAGE_ERROR",
            "isDeprecated": false
          },
          {
            "name": "SETTLE_PAYMENT_ERROR",
            "isDeprecated": false
          },
          {
            "name": "CANCEL_PAYMENT_ERROR",
            "isDeprecated": false
          },
          {
            "name": "EMPTY_ORDER_LINE_SELECTION_ERROR",
            "isDeprecated": false
          },
          {
            "name": "ITEMS_ALREADY_FULFILLED_ERROR",
            "isDeprecated": false
          },
          {
            "name": "INVALID_FULFILLMENT_HANDLER_ERROR",
            "isDeprecated": false
          },
          {
            "name": "CREATE_FULFILLMENT_ERROR",
            "isDeprecated": false
          },
          {
            "name": "INSUFFICIENT_STOCK_ON_HAND_ERROR",
            "isDeprecated": false
          },
          {
            "name": "MULTIPLE_ORDER_ERROR",
            "isDeprecated": false
          },
          {
            "name": "CANCEL_ACTIVE_ORDER_ERROR",
            "isDeprecated": false
          },
          {
            "name": "PAYMENT_ORDER_MISMATCH_ERROR",
            "isDeprecated": false
          },
          {
            "name": "REFUND_ORDER_STATE_ERROR",
            "isDeprecated": false
          },
          {
            "name": "NOTHING_TO_REFUND_ERROR",
            "isDeprecated": false
          },
          {
            "name": "ALREADY_REFUNDED_ERROR",
            "isDeprecated": false
          },
          {
            "name": "QUANTITY_TOO_GREAT_ERROR",
            "isDeprecated": false
          },
          {
            "name": "REFUND_AMOUNT_ERROR",
            "isDeprecated": false
          },
          {
            "name": "REFUND_STATE_TRANSITION_ERROR",
            "isDeprecated": false
          },
          {
            "name": "PAYMENT_STATE_TRANSITION_ERROR",
            "isDeprecated": false
          },
          {
            "name": "FULFILLMENT_STATE_TRANSITION_ERROR",
            "isDeprecated": false
          },
          {
            "name": "ORDER_MODIFICATION_STATE_ERROR",
            "isDeprecated": false
          },
          {
            "name": "NO_CHANGES_SPECIFIED_ERROR",
            "isDeprecated": false
          },
          {
            "name": "PAYMENT_METHOD_MISSING_ERROR",
            "isDeprecated": false
          },
          {
            "name": "REFUND_PAYMENT_ID_MISSING_ERROR",
            "isDeprecated": false
          },
          {
            "name": "MANUAL_PAYMENT_STATE_ERROR",
            "isDeprecated": false
          },
          {
            "name": "PRODUCT_OPTION_IN_USE_ERROR",
            "isDeprecated": false
          },
          {
            "name": "MISSING_CONDITIONS_ERROR",
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
            "name": "AlreadyRefundedError"
          },
          {
            "kind": "OBJECT",
            "name": "CancelActiveOrderError"
          },
          {
            "kind": "OBJECT",
            "name": "CancelPaymentError"
          },
          {
            "kind": "OBJECT",
            "name": "ChannelDefaultLanguageError"
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
            "name": "CreateFulfillmentError"
          },
          {
            "kind": "OBJECT",
            "name": "DuplicateEntityError"
          },
          {
            "kind": "OBJECT",
            "name": "EmailAddressConflictError"
          },
          {
            "kind": "OBJECT",
            "name": "EmptyOrderLineSelectionError"
          },
          {
            "kind": "OBJECT",
            "name": "FacetInUseError"
          },
          {
            "kind": "OBJECT",
            "name": "FulfillmentStateTransitionError"
          },
          {
            "kind": "OBJECT",
            "name": "GuestCheckoutError"
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
            "name": "InsufficientStockOnHandError"
          },
          {
            "kind": "OBJECT",
            "name": "InvalidCredentialsError"
          },
          {
            "kind": "OBJECT",
            "name": "InvalidFulfillmentHandlerError"
          },
          {
            "kind": "OBJECT",
            "name": "ItemsAlreadyFulfilledError"
          },
          {
            "kind": "OBJECT",
            "name": "LanguageNotAvailableError"
          },
          {
            "kind": "OBJECT",
            "name": "ManualPaymentStateError"
          },
          {
            "kind": "OBJECT",
            "name": "MimeTypeError"
          },
          {
            "kind": "OBJECT",
            "name": "MissingConditionsError"
          },
          {
            "kind": "OBJECT",
            "name": "MultipleOrderError"
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
            "name": "NoChangesSpecifiedError"
          },
          {
            "kind": "OBJECT",
            "name": "NothingToRefundError"
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
            "name": "OrderModificationStateError"
          },
          {
            "kind": "OBJECT",
            "name": "OrderStateTransitionError"
          },
          {
            "kind": "OBJECT",
            "name": "PaymentMethodMissingError"
          },
          {
            "kind": "OBJECT",
            "name": "PaymentOrderMismatchError"
          },
          {
            "kind": "OBJECT",
            "name": "PaymentStateTransitionError"
          },
          {
            "kind": "OBJECT",
            "name": "ProductOptionInUseError"
          },
          {
            "kind": "OBJECT",
            "name": "QuantityTooGreatError"
          },
          {
            "kind": "OBJECT",
            "name": "RefundAmountError"
          },
          {
            "kind": "OBJECT",
            "name": "RefundOrderStateError"
          },
          {
            "kind": "OBJECT",
            "name": "RefundPaymentIdMissingError"
          },
          {
            "kind": "OBJECT",
            "name": "RefundStateTransitionError"
          },
          {
            "kind": "OBJECT",
            "name": "SettlePaymentError"
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
            "name": "isPrivate",
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
            "name": "isPrivate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "BooleanOperators"
            }
          },
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
        "name": "FacetInUseError",
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
            "name": "facetCode",
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
            "name": "productCount",
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
            "name": "variantCount",
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
        "kind": "INPUT_OBJECT",
        "name": "FacetTranslationInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "ID"
            }
          },
          {
            "name": "languageCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode"
              }
            }
          },
          {
            "name": "name",
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
        "kind": "INPUT_OBJECT",
        "name": "FacetValueTranslationInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "ID"
            }
          },
          {
            "name": "languageCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode"
              }
            }
          },
          {
            "name": "name",
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
        "kind": "INPUT_OBJECT",
        "name": "FulfillOrderInput",
        "inputFields": [
          {
            "name": "lines",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "OrderLineInput"
                  }
                }
              }
            }
          },
          {
            "name": "handler",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ConfigurableOperationInput"
              }
            }
          }
        ],
        "isOneOf": false
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
            "name": "nextStates",
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
        "kind": "OBJECT",
        "name": "FulfillmentStateTransitionError",
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
        "name": "GlobalSettings",
        "fields": [
          {
            "name": "availableLanguages",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "LanguageCode"
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
            "name": "outOfStockThreshold",
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
            "name": "serverConfig",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ServerConfig"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "trackInventory",
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
            "name": "administrator",
            "type": {
              "kind": "OBJECT",
              "name": "Administrator"
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
            "name": "isPublic",
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
            "name": "isPublic",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "BooleanOperators"
            }
          },
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
        "name": "ImportInfo",
        "fields": [
          {
            "name": "errors",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "imported",
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
            "name": "processed",
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
        "kind": "OBJECT",
        "name": "InsufficientStockOnHandError",
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
            "name": "stockOnHand",
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
        "kind": "OBJECT",
        "name": "InvalidFulfillmentHandlerError",
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
        "name": "ItemsAlreadyFulfilledError",
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
        "name": "JSON"
      },
      {
        "kind": "OBJECT",
        "name": "Job",
        "fields": [
          {
            "name": "attempts",
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
            "name": "data",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "duration",
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
            "name": "error",
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
            "name": "isSettled",
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
            "name": "progress",
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
            "name": "queueName",
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
            "name": "result",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "retries",
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
            "name": "settledAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "startedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "state",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "JobState"
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
        "name": "JobBufferSize",
        "fields": [
          {
            "name": "bufferId",
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
            "name": "size",
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
        "name": "JobFilterParameter",
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
            "name": "startedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateOperators"
            }
          },
          {
            "name": "settledAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateOperators"
            }
          },
          {
            "name": "queueName",
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
            "name": "progress",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberOperators"
            }
          },
          {
            "name": "isSettled",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "BooleanOperators"
            }
          },
          {
            "name": "duration",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberOperators"
            }
          },
          {
            "name": "retries",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberOperators"
            }
          },
          {
            "name": "attempts",
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
                  "name": "JobFilterParameter"
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
                  "name": "JobFilterParameter"
                }
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "JobList",
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
                    "name": "Job"
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
        "name": "JobListOptions",
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
              "name": "JobSortParameter"
            }
          },
          {
            "name": "filter",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "JobFilterParameter"
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
        "name": "JobQueue",
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
            "name": "running",
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
        "kind": "INPUT_OBJECT",
        "name": "JobSortParameter",
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
            "name": "startedAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "settledAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "queueName",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "progress",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "duration",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "retries",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "attempts",
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
        "name": "JobState",
        "enumValues": [
          {
            "name": "PENDING",
            "isDeprecated": false
          },
          {
            "name": "RUNNING",
            "isDeprecated": false
          },
          {
            "name": "COMPLETED",
            "isDeprecated": false
          },
          {
            "name": "RETRYING",
            "isDeprecated": false
          },
          {
            "name": "FAILED",
            "isDeprecated": false
          },
          {
            "name": "CANCELLED",
            "isDeprecated": false
          }
        ]
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
        "name": "LanguageNotAvailableError",
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
            "name": "languageCode",
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
        "kind": "INPUT_OBJECT",
        "name": "ManualPaymentInput",
        "inputFields": [
          {
            "name": "orderId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            }
          },
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
            "name": "transactionId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "metadata",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "ManualPaymentStateError",
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
        "name": "MetricInterval",
        "enumValues": [
          {
            "name": "Daily",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "MetricSummary",
        "fields": [
          {
            "name": "entries",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "MetricSummaryEntry"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "interval",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "MetricInterval"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "title",
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
                "name": "MetricType"
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
        "name": "MetricSummaryEntry",
        "fields": [
          {
            "name": "label",
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
        "kind": "INPUT_OBJECT",
        "name": "MetricSummaryInput",
        "inputFields": [
          {
            "name": "interval",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "MetricInterval"
              }
            }
          },
          {
            "name": "types",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "MetricType"
                  }
                }
              }
            }
          },
          {
            "name": "refresh",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "ENUM",
        "name": "MetricType",
        "enumValues": [
          {
            "name": "OrderCount",
            "isDeprecated": false
          },
          {
            "name": "OrderTotal",
            "isDeprecated": false
          },
          {
            "name": "AverageOrderValue",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "MimeTypeError",
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
            "name": "fileName",
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
        "name": "MissingConditionsError",
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
        "name": "ModifyOrderInput",
        "inputFields": [
          {
            "name": "dryRun",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
              }
            }
          },
          {
            "name": "orderId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            }
          },
          {
            "name": "addItems",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AddItemInput"
                }
              }
            }
          },
          {
            "name": "adjustOrderLines",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "OrderLineInput"
                }
              }
            }
          },
          {
            "name": "surcharges",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "SurchargeInput"
                }
              }
            }
          },
          {
            "name": "updateShippingAddress",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UpdateOrderAddressInput"
            }
          },
          {
            "name": "updateBillingAddress",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UpdateOrderAddressInput"
            }
          },
          {
            "name": "note",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "refund",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AdministratorRefundInput"
            }
          },
          {
            "name": "refunds",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AdministratorRefundInput"
                }
              }
            }
          },
          {
            "name": "options",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ModifyOrderOptions"
            }
          },
          {
            "name": "couponCodes",
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
            "name": "shippingMethodIds",
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
        "name": "ModifyOrderOptions",
        "inputFields": [
          {
            "name": "freezePromotions",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "recalculateShipping",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "UNION",
        "name": "ModifyOrderResult",
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
            "name": "IneligibleShippingMethodError"
          },
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
            "name": "NoChangesSpecifiedError"
          },
          {
            "kind": "OBJECT",
            "name": "Order"
          },
          {
            "kind": "OBJECT",
            "name": "OrderLimitError"
          },
          {
            "kind": "OBJECT",
            "name": "OrderModificationStateError"
          },
          {
            "kind": "OBJECT",
            "name": "PaymentMethodMissingError"
          },
          {
            "kind": "OBJECT",
            "name": "RefundPaymentIdMissingError"
          }
        ]
      },
      {
        "kind": "SCALAR",
        "name": "Money"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "MoveCollectionInput",
        "inputFields": [
          {
            "name": "collectionId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            }
          },
          {
            "name": "parentId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            }
          },
          {
            "name": "index",
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
        "kind": "OBJECT",
        "name": "MultipleOrderError",
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
        "name": "Mutation",
        "fields": [
          {
            "name": "addCustomersToGroup",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CustomerGroup"
              }
            },
            "args": [
              {
                "name": "customerGroupId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID"
                  }
                }
              },
              {
                "name": "customerIds",
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
            "name": "addFulfillmentToOrder",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "AddFulfillmentToOrderResult"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "FulfillOrderInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "addItemToDraftOrder",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "UpdateOrderItemsResult"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "AddItemToDraftOrderInput"
                  }
                }
              },
              {
                "name": "orderId",
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
            "name": "addManualPaymentToOrder",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "AddManualPaymentToOrderResult"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ManualPaymentInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "addMembersToZone",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Zone"
              }
            },
            "args": [
              {
                "name": "memberIds",
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
              },
              {
                "name": "zoneId",
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
            "name": "addNoteToCustomer",
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
                    "name": "AddNoteToCustomerInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "addNoteToOrder",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Order"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "AddNoteToOrderInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "addOptionGroupToProduct",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Product"
              }
            },
            "args": [
              {
                "name": "optionGroupId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID"
                  }
                }
              },
              {
                "name": "productId",
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
            "name": "adjustDraftOrderLine",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "UpdateOrderItemsResult"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "AdjustDraftOrderLineInput"
                  }
                }
              },
              {
                "name": "orderId",
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
            "name": "applyCouponCodeToDraftOrder",
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
              },
              {
                "name": "orderId",
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
            "name": "assignAssetsToChannel",
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
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "AssignAssetsToChannelInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "assignCollectionsToChannel",
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
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "AssignCollectionsToChannelInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "assignFacetsToChannel",
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
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "AssignFacetsToChannelInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "assignPaymentMethodsToChannel",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PaymentMethod"
                  }
                }
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "AssignPaymentMethodsToChannelInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "assignProductVariantsToChannel",
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
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "AssignProductVariantsToChannelInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "assignProductsToChannel",
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
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "AssignProductsToChannelInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "assignPromotionsToChannel",
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
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "AssignPromotionsToChannelInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "assignRoleToAdministrator",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Administrator"
              }
            },
            "args": [
              {
                "name": "administratorId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID"
                  }
                }
              },
              {
                "name": "roleId",
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
            "name": "assignShippingMethodsToChannel",
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
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "AssignShippingMethodsToChannelInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "assignStockLocationsToChannel",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "StockLocation"
                  }
                }
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "AssignStockLocationsToChannelInput"
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
            "name": "cancelJob",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Job"
              }
            },
            "args": [
              {
                "name": "jobId",
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
            "name": "cancelOrder",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "CancelOrderResult"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CancelOrderInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "cancelPayment",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "CancelPaymentResult"
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
            "name": "createAdministrator",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Administrator"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateAdministratorInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "createAssets",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "UNION",
                    "name": "CreateAssetResult"
                  }
                }
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "CreateAssetInput"
                      }
                    }
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "createChannel",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "CreateChannelResult"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateChannelInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "createCollection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Collection"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateCollectionInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "createCountry",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Country"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateCountryInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "createCustomer",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "CreateCustomerResult"
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
              },
              {
                "name": "password",
                "type": {
                  "kind": "SCALAR",
                  "name": "String"
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
                "name": "customerId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID"
                  }
                }
              },
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
            "name": "createCustomerGroup",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CustomerGroup"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateCustomerGroupInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "createDraftOrder",
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
            "name": "createFacet",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Facet"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateFacetInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "createFacetValue",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "FacetValue"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateFacetValueInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "createFacetValues",
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
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "CreateFacetValueInput"
                      }
                    }
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "createPaymentMethod",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PaymentMethod"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreatePaymentMethodInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "createProduct",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Product"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateProductInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "createProductOption",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ProductOption"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateProductOptionInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "createProductOptionGroup",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ProductOptionGroup"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateProductOptionGroupInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "createProductVariants",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ProductVariant"
                }
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "CreateProductVariantInput"
                      }
                    }
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "createPromotion",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "CreatePromotionResult"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreatePromotionInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "createProvince",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Province"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateProvinceInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "createRole",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Role"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateRoleInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "createSeller",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Seller"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateSellerInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "createShippingMethod",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ShippingMethod"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateShippingMethodInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "createStockLocation",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "StockLocation"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateStockLocationInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "createTag",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Tag"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateTagInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "createTaxCategory",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TaxCategory"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateTaxCategoryInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "createTaxRate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TaxRate"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateTaxRateInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "createZone",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Zone"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateZoneInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "deleteAdministrator",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "DeletionResponse"
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
            "name": "deleteAdministrators",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "DeletionResponse"
                  }
                }
              }
            },
            "args": [
              {
                "name": "ids",
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
            "name": "deleteAsset",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "DeletionResponse"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DeleteAssetInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "deleteAssets",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "DeletionResponse"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DeleteAssetsInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "deleteChannel",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "DeletionResponse"
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
            "name": "deleteChannels",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "DeletionResponse"
                  }
                }
              }
            },
            "args": [
              {
                "name": "ids",
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
            "name": "deleteCollection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "DeletionResponse"
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
            "name": "deleteCollections",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "DeletionResponse"
                  }
                }
              }
            },
            "args": [
              {
                "name": "ids",
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
            "name": "deleteCountries",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "DeletionResponse"
                  }
                }
              }
            },
            "args": [
              {
                "name": "ids",
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
            "name": "deleteCountry",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "DeletionResponse"
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
            "name": "deleteCustomer",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "DeletionResponse"
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
            "name": "deleteCustomerGroup",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "DeletionResponse"
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
            "name": "deleteCustomerGroups",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "DeletionResponse"
                  }
                }
              }
            },
            "args": [
              {
                "name": "ids",
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
            "name": "deleteCustomerNote",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "DeletionResponse"
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
            "name": "deleteCustomers",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "DeletionResponse"
                  }
                }
              }
            },
            "args": [
              {
                "name": "ids",
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
            "name": "deleteDraftOrder",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "DeletionResponse"
              }
            },
            "args": [
              {
                "name": "orderId",
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
            "name": "deleteFacet",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "DeletionResponse"
              }
            },
            "args": [
              {
                "name": "force",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean"
                }
              },
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
            "name": "deleteFacetValues",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "DeletionResponse"
                  }
                }
              }
            },
            "args": [
              {
                "name": "force",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean"
                }
              },
              {
                "name": "ids",
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
            "name": "deleteFacets",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "DeletionResponse"
                  }
                }
              }
            },
            "args": [
              {
                "name": "force",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean"
                }
              },
              {
                "name": "ids",
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
            "name": "deleteOrderNote",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "DeletionResponse"
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
            "name": "deletePaymentMethod",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "DeletionResponse"
              }
            },
            "args": [
              {
                "name": "force",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean"
                }
              },
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
            "name": "deletePaymentMethods",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "DeletionResponse"
                  }
                }
              }
            },
            "args": [
              {
                "name": "force",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean"
                }
              },
              {
                "name": "ids",
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
            "name": "deleteProduct",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "DeletionResponse"
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
            "name": "deleteProductOption",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "DeletionResponse"
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
            "name": "deleteProductVariant",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "DeletionResponse"
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
            "name": "deleteProductVariants",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "DeletionResponse"
                  }
                }
              }
            },
            "args": [
              {
                "name": "ids",
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
            "name": "deleteProducts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "DeletionResponse"
                  }
                }
              }
            },
            "args": [
              {
                "name": "ids",
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
            "name": "deletePromotion",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "DeletionResponse"
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
            "name": "deletePromotions",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "DeletionResponse"
                  }
                }
              }
            },
            "args": [
              {
                "name": "ids",
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
            "name": "deleteProvince",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "DeletionResponse"
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
            "name": "deleteRole",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "DeletionResponse"
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
            "name": "deleteRoles",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "DeletionResponse"
                  }
                }
              }
            },
            "args": [
              {
                "name": "ids",
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
            "name": "deleteSeller",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "DeletionResponse"
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
            "name": "deleteSellers",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "DeletionResponse"
                  }
                }
              }
            },
            "args": [
              {
                "name": "ids",
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
            "name": "deleteShippingMethod",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "DeletionResponse"
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
            "name": "deleteShippingMethods",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "DeletionResponse"
                  }
                }
              }
            },
            "args": [
              {
                "name": "ids",
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
            "name": "deleteStockLocation",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "DeletionResponse"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DeleteStockLocationInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "deleteStockLocations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "DeletionResponse"
                  }
                }
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "DeleteStockLocationInput"
                      }
                    }
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "deleteTag",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "DeletionResponse"
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
            "name": "deleteTaxCategories",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "DeletionResponse"
                  }
                }
              }
            },
            "args": [
              {
                "name": "ids",
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
            "name": "deleteTaxCategory",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "DeletionResponse"
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
            "name": "deleteTaxRate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "DeletionResponse"
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
            "name": "deleteTaxRates",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "DeletionResponse"
                  }
                }
              }
            },
            "args": [
              {
                "name": "ids",
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
            "name": "deleteZone",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "DeletionResponse"
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
            "name": "deleteZones",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "DeletionResponse"
                  }
                }
              }
            },
            "args": [
              {
                "name": "ids",
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
            "name": "duplicateEntity",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "DuplicateEntityResult"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DuplicateEntityInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "flushBufferedJobs",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Success"
              }
            },
            "args": [
              {
                "name": "bufferIds",
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
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "importProducts",
            "type": {
              "kind": "OBJECT",
              "name": "ImportInfo"
            },
            "args": [
              {
                "name": "csvFile",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Upload"
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
            "name": "modifyOrder",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ModifyOrderResult"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ModifyOrderInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "moveCollection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Collection"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "MoveCollectionInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "refundOrder",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "RefundOrderResult"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "RefundOrderInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "reindex",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Job"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "removeCollectionsFromChannel",
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
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "RemoveCollectionsFromChannelInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "removeCouponCodeFromDraftOrder",
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
              },
              {
                "name": "orderId",
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
            "name": "removeCustomersFromGroup",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CustomerGroup"
              }
            },
            "args": [
              {
                "name": "customerGroupId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID"
                  }
                }
              },
              {
                "name": "customerIds",
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
            "name": "removeDraftOrderLine",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "RemoveOrderItemsResult"
              }
            },
            "args": [
              {
                "name": "orderId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID"
                  }
                }
              },
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
            "name": "removeFacetsFromChannel",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "UNION",
                    "name": "RemoveFacetFromChannelResult"
                  }
                }
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "RemoveFacetsFromChannelInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "removeMembersFromZone",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Zone"
              }
            },
            "args": [
              {
                "name": "memberIds",
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
              },
              {
                "name": "zoneId",
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
            "name": "removeOptionGroupFromProduct",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "RemoveOptionGroupFromProductResult"
              }
            },
            "args": [
              {
                "name": "force",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean"
                }
              },
              {
                "name": "optionGroupId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID"
                  }
                }
              },
              {
                "name": "productId",
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
            "name": "removePaymentMethodsFromChannel",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PaymentMethod"
                  }
                }
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "RemovePaymentMethodsFromChannelInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "removeProductVariantsFromChannel",
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
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "RemoveProductVariantsFromChannelInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "removeProductsFromChannel",
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
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "RemoveProductsFromChannelInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "removePromotionsFromChannel",
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
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "RemovePromotionsFromChannelInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "removeSettledJobs",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [
              {
                "name": "olderThan",
                "type": {
                  "kind": "SCALAR",
                  "name": "DateTime"
                }
              },
              {
                "name": "queueNames",
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
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "removeShippingMethodsFromChannel",
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
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "RemoveShippingMethodsFromChannelInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "removeStockLocationsFromChannel",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "StockLocation"
                  }
                }
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "RemoveStockLocationsFromChannelInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "runPendingSearchIndexUpdates",
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
            "name": "runScheduledTask",
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
                    "name": "String"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "setCustomerForDraftOrder",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "SetCustomerForDraftOrderResult"
              }
            },
            "args": [
              {
                "name": "customerId",
                "type": {
                  "kind": "SCALAR",
                  "name": "ID"
                }
              },
              {
                "name": "input",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "CreateCustomerInput"
                }
              },
              {
                "name": "orderId",
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
            "name": "setDraftOrderBillingAddress",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Order"
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
              },
              {
                "name": "orderId",
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
            "name": "setDraftOrderCustomFields",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Order"
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
              },
              {
                "name": "orderId",
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
            "name": "setDraftOrderShippingAddress",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Order"
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
              },
              {
                "name": "orderId",
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
            "name": "setDraftOrderShippingMethod",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "SetOrderShippingMethodResult"
              }
            },
            "args": [
              {
                "name": "orderId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID"
                  }
                }
              },
              {
                "name": "shippingMethodId",
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
            "name": "setOrderCustomFields",
            "type": {
              "kind": "OBJECT",
              "name": "Order"
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
            "name": "setOrderCustomer",
            "type": {
              "kind": "OBJECT",
              "name": "Order"
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "SetOrderCustomerInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "setSettingsStoreValue",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "SetSettingsStoreValueResult"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "SettingsStoreInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "setSettingsStoreValues",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "SetSettingsStoreValueResult"
                  }
                }
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
                        "name": "SettingsStoreInput"
                      }
                    }
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "settlePayment",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "SettlePaymentResult"
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
            "name": "settleRefund",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "SettleRefundResult"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "SettleRefundInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "transitionFulfillmentToState",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "TransitionFulfillmentToStateResult"
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
              },
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
            "name": "transitionOrderToState",
            "type": {
              "kind": "UNION",
              "name": "TransitionOrderToStateResult"
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
              },
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
            "name": "transitionPaymentToState",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "TransitionPaymentToStateResult"
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
              },
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
            "name": "unsetDraftOrderBillingAddress",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Order"
              }
            },
            "args": [
              {
                "name": "orderId",
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
            "name": "unsetDraftOrderShippingAddress",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Order"
              }
            },
            "args": [
              {
                "name": "orderId",
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
            "name": "updateActiveAdministrator",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Administrator"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateActiveAdministratorInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "updateAdministrator",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Administrator"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateAdministratorInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "updateAsset",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Asset"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateAssetInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "updateChannel",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "UpdateChannelResult"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateChannelInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "updateCollection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Collection"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateCollectionInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "updateCountry",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Country"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateCountryInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "updateCustomer",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "UpdateCustomerResult"
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
            "name": "updateCustomerGroup",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CustomerGroup"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateCustomerGroupInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "updateCustomerNote",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "HistoryEntry"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateCustomerNoteInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "updateFacet",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Facet"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateFacetInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "updateFacetValue",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "FacetValue"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateFacetValueInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "updateFacetValues",
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
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "UpdateFacetValueInput"
                      }
                    }
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "updateGlobalSettings",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "UpdateGlobalSettingsResult"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateGlobalSettingsInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "updateOrderNote",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "HistoryEntry"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateOrderNoteInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "updatePaymentMethod",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PaymentMethod"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdatePaymentMethodInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "updateProduct",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Product"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateProductInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "updateProductOption",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ProductOption"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateProductOptionInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "updateProductOptionGroup",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ProductOptionGroup"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateProductOptionGroupInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "updateProductVariant",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ProductVariant"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateProductVariantInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "updateProductVariants",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ProductVariant"
                }
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "UpdateProductVariantInput"
                      }
                    }
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "updateProducts",
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
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "UpdateProductInput"
                      }
                    }
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "updatePromotion",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "UpdatePromotionResult"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdatePromotionInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "updateProvince",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Province"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateProvinceInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "updateRole",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Role"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateRoleInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "updateScheduledTask",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ScheduledTask"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateScheduledTaskInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "updateSeller",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Seller"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateSellerInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "updateShippingMethod",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ShippingMethod"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateShippingMethodInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "updateStockLocation",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "StockLocation"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateStockLocationInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "updateTag",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Tag"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateTagInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "updateTaxCategory",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TaxCategory"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateTaxCategoryInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "updateTaxRate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TaxRate"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateTaxRateInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "updateZone",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Zone"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateZoneInput"
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
        "kind": "OBJECT",
        "name": "NoChangesSpecifiedError",
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
            "name": "Administrator"
          },
          {
            "kind": "OBJECT",
            "name": "Allocation"
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
            "name": "Cancellation"
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
            "name": "Job"
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
            "name": "OrderModification"
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
            "name": "Release"
          },
          {
            "kind": "OBJECT",
            "name": "Return"
          },
          {
            "kind": "OBJECT",
            "name": "Role"
          },
          {
            "kind": "OBJECT",
            "name": "Sale"
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
            "name": "StockAdjustment"
          },
          {
            "kind": "OBJECT",
            "name": "StockLevel"
          },
          {
            "kind": "OBJECT",
            "name": "StockLocation"
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
        "name": "NothingToRefundError",
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
            "name": "aggregateOrder",
            "type": {
              "kind": "OBJECT",
              "name": "Order"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "aggregateOrderId",
            "type": {
              "kind": "SCALAR",
              "name": "ID"
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
            "name": "modifications",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "OrderModification"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "nextStates",
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
            "name": "sellerOrders",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Order"
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
            "name": "customerLastName",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators"
            }
          },
          {
            "name": "transactionId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators"
            }
          },
          {
            "name": "aggregateOrderId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IDOperators"
            }
          },
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
        "kind": "INPUT_OBJECT",
        "name": "OrderLineInput",
        "inputFields": [
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
        "isOneOf": false
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
        "name": "OrderModification",
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
            "name": "isSettled",
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
            "name": "lines",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "OrderModificationLine"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "note",
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
            "name": "payment",
            "type": {
              "kind": "OBJECT",
              "name": "Payment"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "priceChange",
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
            "name": "refund",
            "type": {
              "kind": "OBJECT",
              "name": "Refund"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "surcharges",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Surcharge"
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
        "name": "OrderModificationLine",
        "fields": [
          {
            "name": "modification",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "OrderModification"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "modificationId",
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
        "kind": "OBJECT",
        "name": "OrderModificationStateError",
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
        "name": "OrderProcessState",
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
            "name": "to",
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
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "OrderSortParameter",
        "inputFields": [
          {
            "name": "customerLastName",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "transactionId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "aggregateOrderId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
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
            "name": "AdministratorList"
          },
          {
            "kind": "OBJECT",
            "name": "AssetList"
          },
          {
            "kind": "OBJECT",
            "name": "ChannelList"
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
            "name": "CustomerGroupList"
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
            "name": "JobList"
          },
          {
            "kind": "OBJECT",
            "name": "OrderList"
          },
          {
            "kind": "OBJECT",
            "name": "PaymentMethodList"
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
            "name": "SellerList"
          },
          {
            "kind": "OBJECT",
            "name": "ShippingMethodList"
          },
          {
            "kind": "OBJECT",
            "name": "StockLocationList"
          },
          {
            "kind": "OBJECT",
            "name": "TagList"
          },
          {
            "kind": "OBJECT",
            "name": "TaxCategoryList"
          },
          {
            "kind": "OBJECT",
            "name": "TaxRateList"
          },
          {
            "kind": "OBJECT",
            "name": "ZoneList"
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
            "name": "nextStates",
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
        "kind": "INPUT_OBJECT",
        "name": "PaymentMethodFilterParameter",
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
                  "name": "PaymentMethodFilterParameter"
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
                  "name": "PaymentMethodFilterParameter"
                }
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "PaymentMethodList",
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
                    "name": "PaymentMethod"
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
        "name": "PaymentMethodListOptions",
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
              "name": "PaymentMethodSortParameter"
            }
          },
          {
            "name": "filter",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "PaymentMethodFilterParameter"
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
        "name": "PaymentMethodMissingError",
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
        "kind": "INPUT_OBJECT",
        "name": "PaymentMethodSortParameter",
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
        "kind": "INPUT_OBJECT",
        "name": "PaymentMethodTranslationInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "ID"
            }
          },
          {
            "name": "languageCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode"
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "description",
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
        "kind": "OBJECT",
        "name": "PaymentOrderMismatchError",
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
        "name": "PaymentStateTransitionError",
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
        "name": "PermissionDefinition",
        "fields": [
          {
            "name": "assignable",
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
        "kind": "INPUT_OBJECT",
        "name": "PreviewCollectionVariantsInput",
        "inputFields": [
          {
            "name": "parentId",
            "type": {
              "kind": "SCALAR",
              "name": "ID"
            }
          },
          {
            "name": "inheritFilters",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
              }
            }
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
                    "kind": "INPUT_OBJECT",
                    "name": "ConfigurableOperationInput"
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
            "name": "facetValueId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IDOperators"
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
        "kind": "INPUT_OBJECT",
        "name": "ProductOptionGroupTranslationInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "ID"
            }
          },
          {
            "name": "languageCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode"
              }
            }
          },
          {
            "name": "name",
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
        "kind": "OBJECT",
        "name": "ProductOptionInUseError",
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
            "name": "optionGroupCode",
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
        "name": "ProductOptionTranslationInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "ID"
            }
          },
          {
            "name": "languageCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode"
              }
            }
          },
          {
            "name": "name",
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
        "kind": "INPUT_OBJECT",
        "name": "ProductTranslationInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "ID"
            }
          },
          {
            "name": "languageCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode"
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "slug",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "description",
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
            "name": "outOfStockThreshold",
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
            "name": "prices",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ProductVariantPrice"
                  }
                }
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
            "name": "stockAllocated",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": true
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
            "name": "stockLevels",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "StockLevel"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "stockMovements",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "StockMovementList"
              }
            },
            "args": [
              {
                "name": "options",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "StockMovementListOptions"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "stockOnHand",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": true
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
            "name": "trackInventory",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "GlobalFlag"
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
          },
          {
            "name": "useGlobalOutOfStockThreshold",
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
        "kind": "INPUT_OBJECT",
        "name": "ProductVariantFilterParameter",
        "inputFields": [
          {
            "name": "facetValueId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IDOperators"
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
            "name": "trackInventory",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators"
            }
          },
          {
            "name": "stockOnHand",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberOperators"
            }
          },
          {
            "name": "stockAllocated",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberOperators"
            }
          },
          {
            "name": "outOfStockThreshold",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberOperators"
            }
          },
          {
            "name": "useGlobalOutOfStockThreshold",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "BooleanOperators"
            }
          },
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
        "kind": "OBJECT",
        "name": "ProductVariantPrice",
        "fields": [
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
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProductVariantSortParameter",
        "inputFields": [
          {
            "name": "stockOnHand",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "stockAllocated",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "outOfStockThreshold",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
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
        "kind": "INPUT_OBJECT",
        "name": "ProductVariantTranslationInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "ID"
            }
          },
          {
            "name": "languageCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode"
              }
            }
          },
          {
            "name": "name",
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
        "kind": "INPUT_OBJECT",
        "name": "PromotionFilterParameter",
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
            "name": "startsAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateOperators"
            }
          },
          {
            "name": "endsAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateOperators"
            }
          },
          {
            "name": "couponCode",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators"
            }
          },
          {
            "name": "perCustomerUsageLimit",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberOperators"
            }
          },
          {
            "name": "usageLimit",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberOperators"
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
                  "name": "PromotionFilterParameter"
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
                  "name": "PromotionFilterParameter"
                }
              }
            }
          }
        ],
        "isOneOf": false
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
        "kind": "INPUT_OBJECT",
        "name": "PromotionListOptions",
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
              "name": "PromotionSortParameter"
            }
          },
          {
            "name": "filter",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "PromotionFilterParameter"
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
        "name": "PromotionSortParameter",
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
            "name": "startsAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "endsAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "couponCode",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "perCustomerUsageLimit",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "usageLimit",
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
        "kind": "INPUT_OBJECT",
        "name": "PromotionTranslationInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "ID"
            }
          },
          {
            "name": "languageCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode"
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "description",
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
        "kind": "INPUT_OBJECT",
        "name": "ProvinceFilterParameter",
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
            "name": "code",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators"
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
            "name": "name",
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
            "name": "parentId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IDOperators"
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
                  "name": "ProvinceFilterParameter"
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
                  "name": "ProvinceFilterParameter"
                }
              }
            }
          }
        ],
        "isOneOf": false
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
        "kind": "INPUT_OBJECT",
        "name": "ProvinceListOptions",
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
              "name": "ProvinceSortParameter"
            }
          },
          {
            "name": "filter",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProvinceFilterParameter"
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
        "name": "ProvinceSortParameter",
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
            "name": "code",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "type",
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
            "name": "parentId",
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
        "name": "ProvinceTranslationInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "ID"
            }
          },
          {
            "name": "languageCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode"
              }
            }
          },
          {
            "name": "name",
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
        "kind": "OBJECT",
        "name": "QuantityTooGreatError",
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
        "name": "Query",
        "fields": [
          {
            "name": "activeAdministrator",
            "type": {
              "kind": "OBJECT",
              "name": "Administrator"
            },
            "args": [],
            "isDeprecated": false
          },
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
            "name": "administrator",
            "type": {
              "kind": "OBJECT",
              "name": "Administrator"
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
            "name": "administrators",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AdministratorList"
              }
            },
            "args": [
              {
                "name": "options",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "AdministratorListOptions"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "asset",
            "type": {
              "kind": "OBJECT",
              "name": "Asset"
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
            "name": "assets",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AssetList"
              }
            },
            "args": [
              {
                "name": "options",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "AssetListOptions"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "channel",
            "type": {
              "kind": "OBJECT",
              "name": "Channel"
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
            "name": "channels",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ChannelList"
              }
            },
            "args": [
              {
                "name": "options",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ChannelListOptions"
                }
              }
            ],
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
            "name": "collectionFilters",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ConfigurableOperationDefinition"
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
            "name": "countries",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CountryList"
              }
            },
            "args": [
              {
                "name": "options",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "CountryListOptions"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "country",
            "type": {
              "kind": "OBJECT",
              "name": "Country"
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
            "name": "customer",
            "type": {
              "kind": "OBJECT",
              "name": "Customer"
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
            "name": "customerGroup",
            "type": {
              "kind": "OBJECT",
              "name": "CustomerGroup"
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
            "name": "customerGroups",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CustomerGroupList"
              }
            },
            "args": [
              {
                "name": "options",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "CustomerGroupListOptions"
                }
              }
            ],
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
            "name": "eligibleShippingMethodsForDraftOrder",
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
            "args": [
              {
                "name": "orderId",
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
            "name": "entityDuplicators",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "EntityDuplicatorDefinition"
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
            "name": "facetValue",
            "type": {
              "kind": "OBJECT",
              "name": "FacetValue"
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
            "name": "facetValues",
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
            "name": "fulfillmentHandlers",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ConfigurableOperationDefinition"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "getSettingsStoreValue",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [
              {
                "name": "key",
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
            "name": "getSettingsStoreValues",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [
              {
                "name": "keys",
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
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "globalSettings",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "GlobalSettings"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "job",
            "type": {
              "kind": "OBJECT",
              "name": "Job"
            },
            "args": [
              {
                "name": "jobId",
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
            "name": "jobBufferSize",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "JobBufferSize"
                  }
                }
              }
            },
            "args": [
              {
                "name": "bufferIds",
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
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "jobQueues",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "JobQueue"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "jobs",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "JobList"
              }
            },
            "args": [
              {
                "name": "options",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "JobListOptions"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "jobsById",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Job"
                  }
                }
              }
            },
            "args": [
              {
                "name": "jobIds",
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
            "name": "me",
            "type": {
              "kind": "OBJECT",
              "name": "CurrentUser"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "metricSummary",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "MetricSummary"
                  }
                }
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "MetricSummaryInput"
                }
              }
            ],
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
            "name": "paymentMethod",
            "type": {
              "kind": "OBJECT",
              "name": "PaymentMethod"
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
            "name": "paymentMethodEligibilityCheckers",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ConfigurableOperationDefinition"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "paymentMethodHandlers",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ConfigurableOperationDefinition"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "paymentMethods",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PaymentMethodList"
              }
            },
            "args": [
              {
                "name": "options",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "PaymentMethodListOptions"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "pendingSearchIndexUpdates",
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
            "name": "previewCollectionVariants",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ProductVariantList"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "PreviewCollectionVariantsInput"
                  }
                }
              },
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
            "name": "productOptionGroup",
            "type": {
              "kind": "OBJECT",
              "name": "ProductOptionGroup"
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
            "name": "productOptionGroups",
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
            "args": [
              {
                "name": "filterTerm",
                "type": {
                  "kind": "SCALAR",
                  "name": "String"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "productVariant",
            "type": {
              "kind": "OBJECT",
              "name": "ProductVariant"
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
              },
              {
                "name": "productId",
                "type": {
                  "kind": "SCALAR",
                  "name": "ID"
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
            "name": "promotion",
            "type": {
              "kind": "OBJECT",
              "name": "Promotion"
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
            "name": "promotionActions",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ConfigurableOperationDefinition"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "promotionConditions",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ConfigurableOperationDefinition"
                  }
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
                "kind": "OBJECT",
                "name": "PromotionList"
              }
            },
            "args": [
              {
                "name": "options",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "PromotionListOptions"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "province",
            "type": {
              "kind": "OBJECT",
              "name": "Province"
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
            "name": "provinces",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ProvinceList"
              }
            },
            "args": [
              {
                "name": "options",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProvinceListOptions"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "role",
            "type": {
              "kind": "OBJECT",
              "name": "Role"
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
            "name": "roles",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "RoleList"
              }
            },
            "args": [
              {
                "name": "options",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "RoleListOptions"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "scheduledTasks",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ScheduledTask"
                  }
                }
              }
            },
            "args": [],
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
          },
          {
            "name": "seller",
            "type": {
              "kind": "OBJECT",
              "name": "Seller"
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
            "name": "sellers",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "SellerList"
              }
            },
            "args": [
              {
                "name": "options",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "SellerListOptions"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "shippingCalculators",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ConfigurableOperationDefinition"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "shippingEligibilityCheckers",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ConfigurableOperationDefinition"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "shippingMethod",
            "type": {
              "kind": "OBJECT",
              "name": "ShippingMethod"
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
            "name": "shippingMethods",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ShippingMethodList"
              }
            },
            "args": [
              {
                "name": "options",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ShippingMethodListOptions"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "stockLocation",
            "type": {
              "kind": "OBJECT",
              "name": "StockLocation"
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
            "name": "stockLocations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "StockLocationList"
              }
            },
            "args": [
              {
                "name": "options",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "StockLocationListOptions"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "tag",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Tag"
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
            "name": "tags",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TagList"
              }
            },
            "args": [
              {
                "name": "options",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "TagListOptions"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "taxCategories",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TaxCategoryList"
              }
            },
            "args": [
              {
                "name": "options",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "TaxCategoryListOptions"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "taxCategory",
            "type": {
              "kind": "OBJECT",
              "name": "TaxCategory"
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
            "name": "taxRate",
            "type": {
              "kind": "OBJECT",
              "name": "TaxRate"
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
            "name": "taxRates",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TaxRateList"
              }
            },
            "args": [
              {
                "name": "options",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "TaxRateListOptions"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "testEligibleShippingMethods",
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
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "TestEligibleShippingMethodsInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "testShippingMethod",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TestShippingMethodResult"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "TestShippingMethodInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "zone",
            "type": {
              "kind": "OBJECT",
              "name": "Zone"
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
            "name": "zones",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ZoneList"
              }
            },
            "args": [
              {
                "name": "options",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ZoneListOptions"
                }
              }
            ],
            "isDeprecated": false
          }
        ],
        "interfaces": []
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
        "name": "RefundAmountError",
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
            "name": "maximumRefundable",
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
        "kind": "INPUT_OBJECT",
        "name": "RefundOrderInput",
        "inputFields": [
          {
            "name": "lines",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "OrderLineInput"
                }
              }
            }
          },
          {
            "name": "shipping",
            "type": {
              "kind": "SCALAR",
              "name": "Money"
            }
          },
          {
            "name": "adjustment",
            "type": {
              "kind": "SCALAR",
              "name": "Money"
            }
          },
          {
            "name": "amount",
            "type": {
              "kind": "SCALAR",
              "name": "Money"
            }
          },
          {
            "name": "paymentId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            }
          },
          {
            "name": "reason",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "UNION",
        "name": "RefundOrderResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "AlreadyRefundedError"
          },
          {
            "kind": "OBJECT",
            "name": "MultipleOrderError"
          },
          {
            "kind": "OBJECT",
            "name": "NothingToRefundError"
          },
          {
            "kind": "OBJECT",
            "name": "OrderStateTransitionError"
          },
          {
            "kind": "OBJECT",
            "name": "PaymentOrderMismatchError"
          },
          {
            "kind": "OBJECT",
            "name": "QuantityTooGreatError"
          },
          {
            "kind": "OBJECT",
            "name": "Refund"
          },
          {
            "kind": "OBJECT",
            "name": "RefundAmountError"
          },
          {
            "kind": "OBJECT",
            "name": "RefundOrderStateError"
          },
          {
            "kind": "OBJECT",
            "name": "RefundStateTransitionError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "RefundOrderStateError",
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
            "name": "orderState",
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
        "name": "RefundPaymentIdMissingError",
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
        "name": "RefundStateTransitionError",
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
        "kind": "OBJECT",
        "name": "Release",
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
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "StockMovementType"
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
            "name": "StockMovement"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "RemoveCollectionsFromChannelInput",
        "inputFields": [
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
            }
          },
          {
            "name": "channelId",
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
        "kind": "UNION",
        "name": "RemoveFacetFromChannelResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Facet"
          },
          {
            "kind": "OBJECT",
            "name": "FacetInUseError"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "RemoveFacetsFromChannelInput",
        "inputFields": [
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
            }
          },
          {
            "name": "channelId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            }
          },
          {
            "name": "force",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "UNION",
        "name": "RemoveOptionGroupFromProductResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Product"
          },
          {
            "kind": "OBJECT",
            "name": "ProductOptionInUseError"
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
        "kind": "INPUT_OBJECT",
        "name": "RemovePaymentMethodsFromChannelInput",
        "inputFields": [
          {
            "name": "paymentMethodIds",
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
          },
          {
            "name": "channelId",
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
        "name": "RemoveProductVariantsFromChannelInput",
        "inputFields": [
          {
            "name": "productVariantIds",
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
          },
          {
            "name": "channelId",
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
        "name": "RemoveProductsFromChannelInput",
        "inputFields": [
          {
            "name": "productIds",
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
          },
          {
            "name": "channelId",
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
        "name": "RemovePromotionsFromChannelInput",
        "inputFields": [
          {
            "name": "promotionIds",
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
          },
          {
            "name": "channelId",
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
        "name": "RemoveShippingMethodsFromChannelInput",
        "inputFields": [
          {
            "name": "shippingMethodIds",
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
          },
          {
            "name": "channelId",
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
        "name": "RemoveStockLocationsFromChannelInput",
        "inputFields": [
          {
            "name": "stockLocationIds",
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
          },
          {
            "name": "channelId",
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
        "kind": "OBJECT",
        "name": "Return",
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
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "StockMovementType"
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
            "name": "StockMovement"
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
        "kind": "INPUT_OBJECT",
        "name": "RoleFilterParameter",
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
            "name": "code",
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
            "name": "_and",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "RoleFilterParameter"
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
                  "name": "RoleFilterParameter"
                }
              }
            }
          }
        ],
        "isOneOf": false
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
        "name": "RoleListOptions",
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
              "name": "RoleSortParameter"
            }
          },
          {
            "name": "filter",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "RoleFilterParameter"
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
        "name": "RoleSortParameter",
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
            "name": "code",
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
        "name": "Sale",
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
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "StockMovementType"
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
            "name": "StockMovement"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ScheduledTask",
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
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "isRunning",
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
            "name": "lastExecutedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "lastResult",
            "type": {
              "kind": "SCALAR",
              "name": "JSON"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "nextExecutionAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "schedule",
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
            "name": "scheduleDescription",
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
            "name": "channelIds",
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
        "kind": "INPUT_OBJECT",
        "name": "SellerFilterParameter",
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
            "name": "name",
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
                  "name": "SellerFilterParameter"
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
                  "name": "SellerFilterParameter"
                }
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "SellerList",
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
                    "name": "Seller"
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
        "name": "SellerListOptions",
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
              "name": "SellerSortParameter"
            }
          },
          {
            "name": "filter",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SellerFilterParameter"
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
        "name": "SellerSortParameter",
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
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "ServerConfig",
        "fields": [
          {
            "name": "customFieldConfig",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CustomFields"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "entityCustomFields",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "EntityCustomFields"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "moneyStrategyPrecision",
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
            "name": "orderProcess",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "OrderProcessState"
                  }
                }
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
                    "kind": "OBJECT",
                    "name": "PermissionDefinition"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "permittedAssetTypes",
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
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "SetCustomerForDraftOrderResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "EmailAddressConflictError"
          },
          {
            "kind": "OBJECT",
            "name": "Order"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SetOrderCustomerInput",
        "inputFields": [
          {
            "name": "orderId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            }
          },
          {
            "name": "customerId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            }
          },
          {
            "name": "note",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          }
        ],
        "isOneOf": false
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
        "name": "SetSettingsStoreValueResult",
        "fields": [
          {
            "name": "error",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "key",
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
            "name": "result",
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
        "kind": "INPUT_OBJECT",
        "name": "SettingsStoreInput",
        "inputFields": [
          {
            "name": "key",
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
                "name": "JSON"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "SettlePaymentError",
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
        "kind": "UNION",
        "name": "SettlePaymentResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OrderStateTransitionError"
          },
          {
            "kind": "OBJECT",
            "name": "Payment"
          },
          {
            "kind": "OBJECT",
            "name": "PaymentStateTransitionError"
          },
          {
            "kind": "OBJECT",
            "name": "SettlePaymentError"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SettleRefundInput",
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
        "isOneOf": false
      },
      {
        "kind": "UNION",
        "name": "SettleRefundResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Refund"
          },
          {
            "kind": "OBJECT",
            "name": "RefundStateTransitionError"
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
        "kind": "INPUT_OBJECT",
        "name": "ShippingMethodFilterParameter",
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
            "name": "code",
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
            "name": "description",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators"
            }
          },
          {
            "name": "fulfillmentHandlerCode",
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
                  "name": "ShippingMethodFilterParameter"
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
                  "name": "ShippingMethodFilterParameter"
                }
              }
            }
          }
        ],
        "isOneOf": false
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
        "kind": "INPUT_OBJECT",
        "name": "ShippingMethodListOptions",
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
              "name": "ShippingMethodSortParameter"
            }
          },
          {
            "name": "filter",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ShippingMethodFilterParameter"
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
        "kind": "INPUT_OBJECT",
        "name": "ShippingMethodSortParameter",
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
            "name": "code",
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
            "name": "description",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder"
            }
          },
          {
            "name": "fulfillmentHandlerCode",
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
        "kind": "INPUT_OBJECT",
        "name": "ShippingMethodTranslationInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "ID"
            }
          },
          {
            "name": "languageCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode"
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "description",
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
        "kind": "OBJECT",
        "name": "StockAdjustment",
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
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "StockMovementType"
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
            "name": "StockMovement"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "StockLevel",
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
            "name": "stockAllocated",
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
            "name": "stockLocation",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "StockLocation"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "stockLocationId",
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
            "name": "stockOnHand",
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
        "name": "StockLevelInput",
        "inputFields": [
          {
            "name": "stockLocationId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            }
          },
          {
            "name": "stockOnHand",
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
        "kind": "OBJECT",
        "name": "StockLocation",
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
        "kind": "INPUT_OBJECT",
        "name": "StockLocationFilterParameter",
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
            "name": "name",
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
            "name": "_and",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "StockLocationFilterParameter"
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
                  "name": "StockLocationFilterParameter"
                }
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "StockLocationList",
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
                    "name": "StockLocation"
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
        "name": "StockLocationListOptions",
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
              "name": "StockLocationSortParameter"
            }
          },
          {
            "name": "filter",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StockLocationFilterParameter"
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
        "name": "StockLocationSortParameter",
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
        "kind": "INTERFACE",
        "name": "StockMovement",
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
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "StockMovementType"
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
        "interfaces": [],
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Allocation"
          },
          {
            "kind": "OBJECT",
            "name": "Cancellation"
          },
          {
            "kind": "OBJECT",
            "name": "Release"
          },
          {
            "kind": "OBJECT",
            "name": "Return"
          },
          {
            "kind": "OBJECT",
            "name": "Sale"
          },
          {
            "kind": "OBJECT",
            "name": "StockAdjustment"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "StockMovementItem",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Allocation"
          },
          {
            "kind": "OBJECT",
            "name": "Cancellation"
          },
          {
            "kind": "OBJECT",
            "name": "Release"
          },
          {
            "kind": "OBJECT",
            "name": "Return"
          },
          {
            "kind": "OBJECT",
            "name": "Sale"
          },
          {
            "kind": "OBJECT",
            "name": "StockAdjustment"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "StockMovementList",
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
                    "kind": "UNION",
                    "name": "StockMovementItem"
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
        "kind": "INPUT_OBJECT",
        "name": "StockMovementListOptions",
        "inputFields": [
          {
            "name": "type",
            "type": {
              "kind": "ENUM",
              "name": "StockMovementType"
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
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "ENUM",
        "name": "StockMovementType",
        "enumValues": [
          {
            "name": "ADJUSTMENT",
            "isDeprecated": false
          },
          {
            "name": "ALLOCATION",
            "isDeprecated": false
          },
          {
            "name": "RELEASE",
            "isDeprecated": false
          },
          {
            "name": "SALE",
            "isDeprecated": false
          },
          {
            "name": "CANCELLATION",
            "isDeprecated": false
          },
          {
            "name": "RETURN",
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
        "kind": "INPUT_OBJECT",
        "name": "SurchargeInput",
        "inputFields": [
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            }
          },
          {
            "name": "sku",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "price",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            }
          },
          {
            "name": "priceIncludesTax",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
              }
            }
          },
          {
            "name": "taxRate",
            "type": {
              "kind": "SCALAR",
              "name": "Float"
            }
          },
          {
            "name": "taxDescription",
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
        "kind": "INPUT_OBJECT",
        "name": "TagFilterParameter",
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
            "name": "value",
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
                  "name": "TagFilterParameter"
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
                  "name": "TagFilterParameter"
                }
              }
            }
          }
        ],
        "isOneOf": false
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
        "kind": "INPUT_OBJECT",
        "name": "TagListOptions",
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
              "name": "TagSortParameter"
            }
          },
          {
            "name": "filter",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TagFilterParameter"
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
        "name": "TagSortParameter",
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
            "name": "value",
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
        "kind": "INPUT_OBJECT",
        "name": "TaxCategoryFilterParameter",
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
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators"
            }
          },
          {
            "name": "isDefault",
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
                  "name": "TaxCategoryFilterParameter"
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
                  "name": "TaxCategoryFilterParameter"
                }
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "TaxCategoryList",
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
                    "name": "TaxCategory"
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
        "name": "TaxCategoryListOptions",
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
              "name": "TaxCategorySortParameter"
            }
          },
          {
            "name": "filter",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TaxCategoryFilterParameter"
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
        "name": "TaxCategorySortParameter",
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
          }
        ],
        "isOneOf": false
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
        "kind": "INPUT_OBJECT",
        "name": "TaxRateFilterParameter",
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
            "name": "name",
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
            "name": "value",
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
                  "name": "TaxRateFilterParameter"
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
                  "name": "TaxRateFilterParameter"
                }
              }
            }
          }
        ],
        "isOneOf": false
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
        "kind": "INPUT_OBJECT",
        "name": "TaxRateListOptions",
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
              "name": "TaxRateSortParameter"
            }
          },
          {
            "name": "filter",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TaxRateFilterParameter"
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
        "name": "TaxRateSortParameter",
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
            "name": "value",
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
        "name": "TestEligibleShippingMethodsInput",
        "inputFields": [
          {
            "name": "shippingAddress",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "CreateAddressInput"
              }
            }
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
                    "kind": "INPUT_OBJECT",
                    "name": "TestShippingMethodOrderLineInput"
                  }
                }
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "TestShippingMethodInput",
        "inputFields": [
          {
            "name": "checker",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ConfigurableOperationInput"
              }
            }
          },
          {
            "name": "calculator",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ConfigurableOperationInput"
              }
            }
          },
          {
            "name": "shippingAddress",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "CreateAddressInput"
              }
            }
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
                    "kind": "INPUT_OBJECT",
                    "name": "TestShippingMethodOrderLineInput"
                  }
                }
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "TestShippingMethodOrderLineInput",
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
        "kind": "OBJECT",
        "name": "TestShippingMethodQuote",
        "fields": [
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
        "name": "TestShippingMethodResult",
        "fields": [
          {
            "name": "eligible",
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
            "name": "quote",
            "type": {
              "kind": "OBJECT",
              "name": "TestShippingMethodQuote"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
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
        "name": "TransitionFulfillmentToStateResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Fulfillment"
          },
          {
            "kind": "OBJECT",
            "name": "FulfillmentStateTransitionError"
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
        "kind": "UNION",
        "name": "TransitionPaymentToStateResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Payment"
          },
          {
            "kind": "OBJECT",
            "name": "PaymentStateTransitionError"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UpdateActiveAdministratorInput",
        "inputFields": [
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
            "name": "emailAddress",
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
        "kind": "INPUT_OBJECT",
        "name": "UpdateAdministratorInput",
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
            "name": "emailAddress",
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
          },
          {
            "name": "roleIds",
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
        "name": "UpdateAssetInput",
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
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "focalPoint",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CoordinateInput"
            }
          },
          {
            "name": "tags",
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
        "name": "UpdateChannelInput",
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
            "name": "code",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "token",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "defaultLanguageCode",
            "type": {
              "kind": "ENUM",
              "name": "LanguageCode"
            }
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
            }
          },
          {
            "name": "pricesIncludeTax",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "currencyCode",
            "type": {
              "kind": "ENUM",
              "name": "CurrencyCode"
            }
          },
          {
            "name": "defaultCurrencyCode",
            "type": {
              "kind": "ENUM",
              "name": "CurrencyCode"
            }
          },
          {
            "name": "availableCurrencyCodes",
            "type": {
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
          {
            "name": "trackInventory",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "outOfStockThreshold",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          },
          {
            "name": "defaultTaxZoneId",
            "type": {
              "kind": "SCALAR",
              "name": "ID"
            }
          },
          {
            "name": "defaultShippingZoneId",
            "type": {
              "kind": "SCALAR",
              "name": "ID"
            }
          },
          {
            "name": "sellerId",
            "type": {
              "kind": "SCALAR",
              "name": "ID"
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
        "name": "UpdateChannelResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Channel"
          },
          {
            "kind": "OBJECT",
            "name": "LanguageNotAvailableError"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UpdateCollectionInput",
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
            "name": "isPrivate",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "featuredAssetId",
            "type": {
              "kind": "SCALAR",
              "name": "ID"
            }
          },
          {
            "name": "parentId",
            "type": {
              "kind": "SCALAR",
              "name": "ID"
            }
          },
          {
            "name": "assetIds",
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
            "name": "inheritFilters",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "filters",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ConfigurableOperationInput"
                }
              }
            }
          },
          {
            "name": "translations",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UpdateCollectionTranslationInput"
                }
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
        "kind": "INPUT_OBJECT",
        "name": "UpdateCollectionTranslationInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "ID"
            }
          },
          {
            "name": "languageCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode"
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "slug",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "description",
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
        "kind": "INPUT_OBJECT",
        "name": "UpdateCountryInput",
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
            "name": "code",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "translations",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CountryTranslationInput"
                }
              }
            }
          },
          {
            "name": "enabled",
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
        "name": "UpdateCustomerGroupInput",
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
            "name": "name",
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
        "kind": "INPUT_OBJECT",
        "name": "UpdateCustomerInput",
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
            "name": "emailAddress",
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
        "kind": "INPUT_OBJECT",
        "name": "UpdateCustomerNoteInput",
        "inputFields": [
          {
            "name": "noteId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            }
          },
          {
            "name": "note",
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
        "kind": "UNION",
        "name": "UpdateCustomerResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Customer"
          },
          {
            "kind": "OBJECT",
            "name": "EmailAddressConflictError"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UpdateFacetInput",
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
            "name": "isPrivate",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "code",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "translations",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "FacetTranslationInput"
                }
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
        "kind": "INPUT_OBJECT",
        "name": "UpdateFacetValueInput",
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
            "name": "code",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "translations",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "FacetValueTranslationInput"
                }
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
        "kind": "INPUT_OBJECT",
        "name": "UpdateGlobalSettingsInput",
        "inputFields": [
          {
            "name": "availableLanguages",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "LanguageCode"
                }
              }
            }
          },
          {
            "name": "trackInventory",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "outOfStockThreshold",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
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
        "name": "UpdateGlobalSettingsResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "ChannelDefaultLanguageError"
          },
          {
            "kind": "OBJECT",
            "name": "GlobalSettings"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UpdateOrderAddressInput",
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
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UpdateOrderInput",
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
        "kind": "INPUT_OBJECT",
        "name": "UpdateOrderNoteInput",
        "inputFields": [
          {
            "name": "noteId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            }
          },
          {
            "name": "note",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "isPublic",
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
        "name": "UpdatePaymentMethodInput",
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
            "name": "code",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "enabled",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "checker",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ConfigurableOperationInput"
            }
          },
          {
            "name": "handler",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ConfigurableOperationInput"
            }
          },
          {
            "name": "translations",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "PaymentMethodTranslationInput"
                }
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
        "kind": "INPUT_OBJECT",
        "name": "UpdateProductInput",
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
            "name": "enabled",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "featuredAssetId",
            "type": {
              "kind": "SCALAR",
              "name": "ID"
            }
          },
          {
            "name": "assetIds",
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
            "name": "translations",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProductTranslationInput"
                }
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
        "kind": "INPUT_OBJECT",
        "name": "UpdateProductOptionGroupInput",
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
            "name": "code",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "translations",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProductOptionGroupTranslationInput"
                }
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
        "kind": "INPUT_OBJECT",
        "name": "UpdateProductOptionInput",
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
            "name": "code",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "translations",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProductOptionGroupTranslationInput"
                }
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
        "kind": "INPUT_OBJECT",
        "name": "UpdateProductVariantInput",
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
            "name": "enabled",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "translations",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProductVariantTranslationInput"
                }
              }
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
            "name": "optionIds",
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
            "name": "sku",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "taxCategoryId",
            "type": {
              "kind": "SCALAR",
              "name": "ID"
            }
          },
          {
            "name": "price",
            "type": {
              "kind": "SCALAR",
              "name": "Money"
            }
          },
          {
            "name": "prices",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UpdateProductVariantPriceInput"
                }
              }
            }
          },
          {
            "name": "featuredAssetId",
            "type": {
              "kind": "SCALAR",
              "name": "ID"
            }
          },
          {
            "name": "assetIds",
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
            "name": "stockOnHand",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          },
          {
            "name": "stockLevels",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "StockLevelInput"
                }
              }
            }
          },
          {
            "name": "outOfStockThreshold",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          },
          {
            "name": "useGlobalOutOfStockThreshold",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "trackInventory",
            "type": {
              "kind": "ENUM",
              "name": "GlobalFlag"
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
        "name": "UpdateProductVariantPriceInput",
        "inputFields": [
          {
            "name": "currencyCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "CurrencyCode"
              }
            }
          },
          {
            "name": "price",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Money"
              }
            }
          },
          {
            "name": "delete",
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
        "name": "UpdatePromotionInput",
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
            "name": "enabled",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "startsAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime"
            }
          },
          {
            "name": "endsAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime"
            }
          },
          {
            "name": "couponCode",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "perCustomerUsageLimit",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          },
          {
            "name": "usageLimit",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          },
          {
            "name": "conditions",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ConfigurableOperationInput"
                }
              }
            }
          },
          {
            "name": "actions",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ConfigurableOperationInput"
                }
              }
            }
          },
          {
            "name": "translations",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "PromotionTranslationInput"
                }
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
        "kind": "UNION",
        "name": "UpdatePromotionResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "MissingConditionsError"
          },
          {
            "kind": "OBJECT",
            "name": "Promotion"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UpdateProvinceInput",
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
            "name": "code",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "translations",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProvinceTranslationInput"
                }
              }
            }
          },
          {
            "name": "enabled",
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
        "name": "UpdateRoleInput",
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
            "name": "code",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "permissions",
            "type": {
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
          {
            "name": "channelIds",
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
        "name": "UpdateScheduledTaskInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            }
          },
          {
            "name": "enabled",
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
        "name": "UpdateSellerInput",
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
            "name": "name",
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
        "kind": "INPUT_OBJECT",
        "name": "UpdateShippingMethodInput",
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
            "name": "code",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "fulfillmentHandler",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "checker",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ConfigurableOperationInput"
            }
          },
          {
            "name": "calculator",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ConfigurableOperationInput"
            }
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
                    "kind": "INPUT_OBJECT",
                    "name": "ShippingMethodTranslationInput"
                  }
                }
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
        "kind": "INPUT_OBJECT",
        "name": "UpdateStockLocationInput",
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
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "description",
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
        "kind": "INPUT_OBJECT",
        "name": "UpdateTagInput",
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
            "name": "value",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UpdateTaxCategoryInput",
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
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "isDefault",
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
        "name": "UpdateTaxRateInput",
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
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "value",
            "type": {
              "kind": "SCALAR",
              "name": "Float"
            }
          },
          {
            "name": "enabled",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "categoryId",
            "type": {
              "kind": "SCALAR",
              "name": "ID"
            }
          },
          {
            "name": "zoneId",
            "type": {
              "kind": "SCALAR",
              "name": "ID"
            }
          },
          {
            "name": "customerGroupId",
            "type": {
              "kind": "SCALAR",
              "name": "ID"
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
        "name": "UpdateZoneInput",
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
            "name": "name",
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
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ZoneFilterParameter",
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
            "name": "name",
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
                  "name": "ZoneFilterParameter"
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
                  "name": "ZoneFilterParameter"
                }
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "ZoneList",
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
                    "name": "Zone"
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
        "name": "ZoneListOptions",
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
              "name": "ZoneSortParameter"
            }
          },
          {
            "name": "filter",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ZoneFilterParameter"
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
        "name": "ZoneSortParameter",
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
          }
        ],
        "isOneOf": false
      }
    ],
    "directives": []
  }
} as const;

export { introspection };