# FunctionsRead
(*functionsRead*)

## Overview

All Edition's Read functions

### Available Operations

* [editionDEFAULTADMINROLE](#editiondefaultadminrole) - Default Admin Role
* [editionBalanceOf](#editionbalanceof) - Balance of
* [editionBalanceOfBatch](#editionbalanceofbatch) - Balance of multiple accounts
* [editionContractURI](#editioncontracturi) - Contract URI	
* [editionContractVersion](#editioncontractversion)
* [editionGetDefaultRoyaltyInfo](#editiongetdefaultroyaltyinfo) - Get Default Royalty Info	
* [editionGetFlatPlatformFeeInfo](#editiongetflatplatformfeeinfo) - Flat platform fee information	
* [editionGetPlatformFeeInfo](#editiongetplatformfeeinfo) - Get Platform Fee Info	
* [editionGetPlatformFeeType](#editiongetplatformfeetype) - Platform fee information	
* [editionGetRoleAdmin](#editiongetroleadmin) - Get Role Admin	
* [editionGetRoleMember](#editiongetrolemember) - Get Role Member	
* [editionGetRoleMemberCount](#editiongetrolemembercount) - Get Role Member Count	
* [editionGetRoyaltyInfoForToken](#editiongetroyaltyinfofortoken) - Get Royalty Info for Token	
* [editionHasRole](#editionhasrole) - Has Role
* [editionIsApprovedForAll](#editionisapprovedforall) - Is Approved for all
* [editionIsTrustedForwarder](#editionistrustedforwarder) - Is Trusted Forwarder
* [editionName](#editionname) - Name
* [editionNextTokenIdToMint](#editionnexttokenidtomint) - Next TokenId To Mint
* [editionOperatorRestriction](#editionoperatorrestriction) - Operator Restriction
* [editionOwner](#editionowner) - Owner
* [editionPlatformFeeRecipient](#editionplatformfeerecipient) - Recipient of platform fees	
* [editionPrimarySaleRecipient](#editionprimarysalerecipient) - Primary Sale Recipient
* [editionRoyaltyInfo](#editionroyaltyinfo) - Royalty Info
* [editionSaleRecipientForToken](#editionsalerecipientfortoken) - Recipient of sales proceeds for a token	
* [editionSupportsInterface](#editionsupportsinterface) - Supports Interface	
* [editionSymbol](#editionsymbol) - Symbol
* [editionTotalSupply](#editiontotalsupply) - Total Supply	
* [editionUri](#editionuri) - URI for a token	
* [editionVerify](#editionverify) - Verifies a signature on a mint request	

## editionDEFAULTADMINROLE

Default Admin Role

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

(async() => {
  const sdk = new GlobalTest2({
    security: {
      default: "",
    },
  });

  const res = await sdk.functionsRead.editionDEFAULTADMINROLE({
    template: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.EditionDEFAULTADMINROLERequest](../../sdk/models/operations/editiondefaultadminrolerequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.EditionDEFAULTADMINROLEResponse](../../sdk/models/operations/editiondefaultadminroleresponse.md)>**
### Errors

| Error Object                               | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.EditionDEFAULTADMINROLEResponseBody | 401                                        | application/json                           |
| errors.SDKError                            | 400-600                                    | */*                                        |

## editionBalanceOf

Balance of

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

(async() => {
  const sdk = new GlobalTest2({
    security: {
      default: "",
    },
  });

  const res = await sdk.functionsRead.editionBalanceOf({
    requestBody: {},
    template: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.EditionBalanceOfRequest](../../sdk/models/operations/editionbalanceofrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.EditionBalanceOfResponse](../../sdk/models/operations/editionbalanceofresponse.md)>**
### Errors

| Error Object                        | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.EditionBalanceOfResponseBody | 401                                 | application/json                    |
| errors.SDKError                     | 400-600                             | */*                                 |

## editionBalanceOfBatch

Balance of multiple accounts

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

(async() => {
  const sdk = new GlobalTest2({
    security: {
      default: "",
    },
  });

  const res = await sdk.functionsRead.editionBalanceOfBatch({
    requestBody: {},
    template: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.EditionBalanceOfBatchRequest](../../sdk/models/operations/editionbalanceofbatchrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.EditionBalanceOfBatchResponse](../../sdk/models/operations/editionbalanceofbatchresponse.md)>**
### Errors

| Error Object                             | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.EditionBalanceOfBatchResponseBody | 401                                      | application/json                         |
| errors.SDKError                          | 400-600                                  | */*                                      |

## editionContractURI

Contract URI	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

(async() => {
  const sdk = new GlobalTest2({
    security: {
      default: "",
    },
  });

  const res = await sdk.functionsRead.editionContractURI({
    template: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.EditionContractURIRequest](../../sdk/models/operations/editioncontracturirequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.EditionContractURIResponse](../../sdk/models/operations/editioncontracturiresponse.md)>**
### Errors

| Error Object                          | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.EditionContractURIResponseBody | 401                                   | application/json                      |
| errors.SDKError                       | 400-600                               | */*                                   |

## editionContractVersion

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

(async() => {
  const sdk = new GlobalTest2({
    security: {
      default: "",
    },
  });

  const res = await sdk.functionsRead.editionContractVersion({
    template: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.EditionContractVersionRequest](../../sdk/models/operations/editioncontractversionrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.EditionContractVersionResponse](../../sdk/models/operations/editioncontractversionresponse.md)>**
### Errors

| Error Object                              | Status Code                               | Content Type                              |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| errors.EditionContractVersionResponseBody | 401                                       | application/json                          |
| errors.SDKError                           | 400-600                                   | */*                                       |

## editionGetDefaultRoyaltyInfo

Get Default Royalty Info	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

(async() => {
  const sdk = new GlobalTest2({
    security: {
      default: "",
    },
  });

  const res = await sdk.functionsRead.editionGetDefaultRoyaltyInfo({
    template: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.EditionGetDefaultRoyaltyInfoRequest](../../sdk/models/operations/editiongetdefaultroyaltyinforequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.EditionGetDefaultRoyaltyInfoResponse](../../sdk/models/operations/editiongetdefaultroyaltyinforesponse.md)>**
### Errors

| Error Object                                    | Status Code                                     | Content Type                                    |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| errors.EditionGetDefaultRoyaltyInfoResponseBody | 401                                             | application/json                                |
| errors.SDKError                                 | 400-600                                         | */*                                             |

## editionGetFlatPlatformFeeInfo

Flat platform fee information	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

(async() => {
  const sdk = new GlobalTest2({
    security: {
      default: "",
    },
  });

  const res = await sdk.functionsRead.editionGetFlatPlatformFeeInfo({
    template: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.EditionGetFlatPlatformFeeInfoRequest](../../sdk/models/operations/editiongetflatplatformfeeinforequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.EditionGetFlatPlatformFeeInfoResponse](../../sdk/models/operations/editiongetflatplatformfeeinforesponse.md)>**
### Errors

| Error Object                                     | Status Code                                      | Content Type                                     |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| errors.EditionGetFlatPlatformFeeInfoResponseBody | 401                                              | application/json                                 |
| errors.SDKError                                  | 400-600                                          | */*                                              |

## editionGetPlatformFeeInfo

Get Platform Fee Info	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

(async() => {
  const sdk = new GlobalTest2({
    security: {
      default: "",
    },
  });

  const res = await sdk.functionsRead.editionGetPlatformFeeInfo({
    template: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.EditionGetPlatformFeeInfoRequest](../../sdk/models/operations/editiongetplatformfeeinforequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.EditionGetPlatformFeeInfoResponse](../../sdk/models/operations/editiongetplatformfeeinforesponse.md)>**
### Errors

| Error Object                                 | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.EditionGetPlatformFeeInfoResponseBody | 401                                          | application/json                             |
| errors.SDKError                              | 400-600                                      | */*                                          |

## editionGetPlatformFeeType

Platform fee information	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

(async() => {
  const sdk = new GlobalTest2({
    security: {
      default: "",
    },
  });

  const res = await sdk.functionsRead.editionGetPlatformFeeType({
    template: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.EditionGetPlatformFeeTypeRequest](../../sdk/models/operations/editiongetplatformfeetyperequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.EditionGetPlatformFeeTypeResponse](../../sdk/models/operations/editiongetplatformfeetyperesponse.md)>**
### Errors

| Error Object                                 | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.EditionGetPlatformFeeTypeResponseBody | 401                                          | application/json                             |
| errors.SDKError                              | 400-600                                      | */*                                          |

## editionGetRoleAdmin

Get Role Admin	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

(async() => {
  const sdk = new GlobalTest2({
    security: {
      default: "",
    },
  });

  const res = await sdk.functionsRead.editionGetRoleAdmin({
    requestBody: {},
    template: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.EditionGetRoleAdminRequest](../../sdk/models/operations/editiongetroleadminrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.EditionGetRoleAdminResponse](../../sdk/models/operations/editiongetroleadminresponse.md)>**
### Errors

| Error Object                           | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.EditionGetRoleAdminResponseBody | 401                                    | application/json                       |
| errors.SDKError                        | 400-600                                | */*                                    |

## editionGetRoleMember

Get Role Member	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

(async() => {
  const sdk = new GlobalTest2({
    security: {
      default: "",
    },
  });

  const res = await sdk.functionsRead.editionGetRoleMember({
    requestBody: {},
    template: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.EditionGetRoleMemberRequest](../../sdk/models/operations/editiongetrolememberrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.EditionGetRoleMemberResponse](../../sdk/models/operations/editiongetrolememberresponse.md)>**
### Errors

| Error Object                            | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.EditionGetRoleMemberResponseBody | 401                                     | application/json                        |
| errors.SDKError                         | 400-600                                 | */*                                     |

## editionGetRoleMemberCount

Get Role Member Count	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

(async() => {
  const sdk = new GlobalTest2({
    security: {
      default: "",
    },
  });

  const res = await sdk.functionsRead.editionGetRoleMemberCount({
    requestBody: {},
    template: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.EditionGetRoleMemberCountRequest](../../sdk/models/operations/editiongetrolemembercountrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.EditionGetRoleMemberCountResponse](../../sdk/models/operations/editiongetrolemembercountresponse.md)>**
### Errors

| Error Object                                 | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.EditionGetRoleMemberCountResponseBody | 401                                          | application/json                             |
| errors.SDKError                              | 400-600                                      | */*                                          |

## editionGetRoyaltyInfoForToken

Get Royalty Info for Token	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

(async() => {
  const sdk = new GlobalTest2({
    security: {
      default: "",
    },
  });

  const res = await sdk.functionsRead.editionGetRoyaltyInfoForToken({
    requestBody: {},
    template: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.EditionGetRoyaltyInfoForTokenRequest](../../sdk/models/operations/editiongetroyaltyinfofortokenrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.EditionGetRoyaltyInfoForTokenResponse](../../sdk/models/operations/editiongetroyaltyinfofortokenresponse.md)>**
### Errors

| Error Object                                     | Status Code                                      | Content Type                                     |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| errors.EditionGetRoyaltyInfoForTokenResponseBody | 401                                              | application/json                                 |
| errors.SDKError                                  | 400-600                                          | */*                                              |

## editionHasRole

Has Role

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

(async() => {
  const sdk = new GlobalTest2({
    security: {
      default: "",
    },
  });

  const res = await sdk.functionsRead.editionHasRole({
    requestBody: {},
    template: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.EditionHasRoleRequest](../../sdk/models/operations/editionhasrolerequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.EditionHasRoleResponse](../../sdk/models/operations/editionhasroleresponse.md)>**
### Errors

| Error Object                      | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.EditionHasRoleResponseBody | 401                               | application/json                  |
| errors.SDKError                   | 400-600                           | */*                               |

## editionIsApprovedForAll

Is Approved for all

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

(async() => {
  const sdk = new GlobalTest2({
    security: {
      default: "",
    },
  });

  const res = await sdk.functionsRead.editionIsApprovedForAll({
    requestBody: {},
    template: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.EditionIsApprovedForAllRequest](../../sdk/models/operations/editionisapprovedforallrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.EditionIsApprovedForAllResponse](../../sdk/models/operations/editionisapprovedforallresponse.md)>**
### Errors

| Error Object                               | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.EditionIsApprovedForAllResponseBody | 401                                        | application/json                           |
| errors.SDKError                            | 400-600                                    | */*                                        |

## editionIsTrustedForwarder

Is Trusted Forwarder

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

(async() => {
  const sdk = new GlobalTest2({
    security: {
      default: "",
    },
  });

  const res = await sdk.functionsRead.editionIsTrustedForwarder({
    requestBody: {},
    template: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.EditionIsTrustedForwarderRequest](../../sdk/models/operations/editionistrustedforwarderrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.EditionIsTrustedForwarderResponse](../../sdk/models/operations/editionistrustedforwarderresponse.md)>**
### Errors

| Error Object                                 | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.EditionIsTrustedForwarderResponseBody | 401                                          | application/json                             |
| errors.SDKError                              | 400-600                                      | */*                                          |

## editionName

Name

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

(async() => {
  const sdk = new GlobalTest2({
    security: {
      default: "",
    },
  });

  const res = await sdk.functionsRead.editionName({
    template: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.EditionNameRequest](../../sdk/models/operations/editionnamerequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.EditionNameResponse](../../sdk/models/operations/editionnameresponse.md)>**
### Errors

| Error Object                   | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.EditionNameResponseBody | 401                            | application/json               |
| errors.SDKError                | 400-600                        | */*                            |

## editionNextTokenIdToMint

Next TokenId To Mint

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

(async() => {
  const sdk = new GlobalTest2({
    security: {
      default: "",
    },
  });

  const res = await sdk.functionsRead.editionNextTokenIdToMint({
    template: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.EditionNextTokenIdToMintRequest](../../sdk/models/operations/editionnexttokenidtomintrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.EditionNextTokenIdToMintResponse](../../sdk/models/operations/editionnexttokenidtomintresponse.md)>**
### Errors

| Error Object                                | Status Code                                 | Content Type                                |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| errors.EditionNextTokenIdToMintResponseBody | 401                                         | application/json                            |
| errors.SDKError                             | 400-600                                     | */*                                         |

## editionOperatorRestriction

Operator Restriction

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

(async() => {
  const sdk = new GlobalTest2({
    security: {
      default: "",
    },
  });

  const res = await sdk.functionsRead.editionOperatorRestriction({
    template: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.EditionOperatorRestrictionRequest](../../sdk/models/operations/editionoperatorrestrictionrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.EditionOperatorRestrictionResponse](../../sdk/models/operations/editionoperatorrestrictionresponse.md)>**
### Errors

| Error Object                                  | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.EditionOperatorRestrictionResponseBody | 401                                           | application/json                              |
| errors.SDKError                               | 400-600                                       | */*                                           |

## editionOwner

Owner

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

(async() => {
  const sdk = new GlobalTest2({
    security: {
      default: "",
    },
  });

  const res = await sdk.functionsRead.editionOwner({
    template: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.EditionOwnerRequest](../../sdk/models/operations/editionownerrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.EditionOwnerResponse](../../sdk/models/operations/editionownerresponse.md)>**
### Errors

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.EditionOwnerResponseBody | 401                             | application/json                |
| errors.SDKError                 | 400-600                         | */*                             |

## editionPlatformFeeRecipient

Recipient of platform fees	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

(async() => {
  const sdk = new GlobalTest2({
    security: {
      default: "",
    },
  });

  const res = await sdk.functionsRead.editionPlatformFeeRecipient({
    template: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.EditionPlatformFeeRecipientRequest](../../sdk/models/operations/editionplatformfeerecipientrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.EditionPlatformFeeRecipientResponse](../../sdk/models/operations/editionplatformfeerecipientresponse.md)>**
### Errors

| Error Object                                   | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| errors.EditionPlatformFeeRecipientResponseBody | 401                                            | application/json                               |
| errors.SDKError                                | 400-600                                        | */*                                            |

## editionPrimarySaleRecipient

Primary Sale Recipient

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

(async() => {
  const sdk = new GlobalTest2({
    security: {
      default: "",
    },
  });

  const res = await sdk.functionsRead.editionPrimarySaleRecipient({
    template: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.EditionPrimarySaleRecipientRequest](../../sdk/models/operations/editionprimarysalerecipientrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.EditionPrimarySaleRecipientResponse](../../sdk/models/operations/editionprimarysalerecipientresponse.md)>**
### Errors

| Error Object                                   | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| errors.EditionPrimarySaleRecipientResponseBody | 401                                            | application/json                               |
| errors.SDKError                                | 400-600                                        | */*                                            |

## editionRoyaltyInfo

Royalty Info

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

(async() => {
  const sdk = new GlobalTest2({
    security: {
      default: "",
    },
  });

  const res = await sdk.functionsRead.editionRoyaltyInfo({
    requestBody: {},
    template: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.EditionRoyaltyInfoRequest](../../sdk/models/operations/editionroyaltyinforequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.EditionRoyaltyInfoResponse](../../sdk/models/operations/editionroyaltyinforesponse.md)>**
### Errors

| Error Object                          | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.EditionRoyaltyInfoResponseBody | 401                                   | application/json                      |
| errors.SDKError                       | 400-600                               | */*                                   |

## editionSaleRecipientForToken

Recipient of sales proceeds for a token	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

(async() => {
  const sdk = new GlobalTest2({
    security: {
      default: "",
    },
  });

  const res = await sdk.functionsRead.editionSaleRecipientForToken({
    requestBody: {},
    template: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.EditionSaleRecipientForTokenRequest](../../sdk/models/operations/editionsalerecipientfortokenrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.EditionSaleRecipientForTokenResponse](../../sdk/models/operations/editionsalerecipientfortokenresponse.md)>**
### Errors

| Error Object                                    | Status Code                                     | Content Type                                    |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| errors.EditionSaleRecipientForTokenResponseBody | 401                                             | application/json                                |
| errors.SDKError                                 | 400-600                                         | */*                                             |

## editionSupportsInterface

Supports Interface	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

(async() => {
  const sdk = new GlobalTest2({
    security: {
      default: "",
    },
  });

  const res = await sdk.functionsRead.editionSupportsInterface({
    requestBody: {},
    template: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.EditionSupportsInterfaceRequest](../../sdk/models/operations/editionsupportsinterfacerequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.EditionSupportsInterfaceResponse](../../sdk/models/operations/editionsupportsinterfaceresponse.md)>**
### Errors

| Error Object                                | Status Code                                 | Content Type                                |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| errors.EditionSupportsInterfaceResponseBody | 401                                         | application/json                            |
| errors.SDKError                             | 400-600                                     | */*                                         |

## editionSymbol

Symbol

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

(async() => {
  const sdk = new GlobalTest2({
    security: {
      default: "",
    },
  });

  const res = await sdk.functionsRead.editionSymbol({
    template: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.EditionSymbolRequest](../../sdk/models/operations/editionsymbolrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.EditionSymbolResponse](../../sdk/models/operations/editionsymbolresponse.md)>**
### Errors

| Error Object                     | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| errors.EditionSymbolResponseBody | 401                              | application/json                 |
| errors.SDKError                  | 400-600                          | */*                              |

## editionTotalSupply

Total Supply	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

(async() => {
  const sdk = new GlobalTest2({
    security: {
      default: "",
    },
  });

  const res = await sdk.functionsRead.editionTotalSupply({
    requestBody: {},
    template: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.EditionTotalSupplyRequest](../../sdk/models/operations/editiontotalsupplyrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.EditionTotalSupplyResponse](../../sdk/models/operations/editiontotalsupplyresponse.md)>**
### Errors

| Error Object                          | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.EditionTotalSupplyResponseBody | 401                                   | application/json                      |
| errors.SDKError                       | 400-600                               | */*                                   |

## editionUri

URI for a token	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

(async() => {
  const sdk = new GlobalTest2({
    security: {
      default: "",
    },
  });

  const res = await sdk.functionsRead.editionUri({
    requestBody: {},
    template: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.EditionUriRequest](../../sdk/models/operations/editionurirequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.EditionUriResponse](../../sdk/models/operations/editionuriresponse.md)>**
### Errors

| Error Object                  | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.EditionUriResponseBody | 401                           | application/json              |
| errors.SDKError               | 400-600                       | */*                           |

## editionVerify

Verifies a signature on a mint request	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

(async() => {
  const sdk = new GlobalTest2({
    security: {
      default: "",
    },
  });

  const res = await sdk.functionsRead.editionVerify({
    requestBody: {},
    template: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.EditionVerifyRequest](../../sdk/models/operations/editionverifyrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.EditionVerifyResponse](../../sdk/models/operations/editionverifyresponse.md)>**
### Errors

| Error Object                     | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| errors.EditionVerifyResponseBody | 401                              | application/json                 |
| errors.SDKError                  | 400-600                          | */*                              |
