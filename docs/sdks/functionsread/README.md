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

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsRead.editionDEFAULTADMINROLE({
    template: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
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
| errors.SDKError                            | 4xx-5xx                                    | */*                                        |

## editionBalanceOf

Balance of

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsRead.editionBalanceOf({
    requestBody: {},
    template: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
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
| errors.SDKError                     | 4xx-5xx                             | */*                                 |

## editionBalanceOfBatch

Balance of multiple accounts

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsRead.editionBalanceOfBatch({
    requestBody: {},
    template: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
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
| errors.SDKError                          | 4xx-5xx                                  | */*                                      |

## editionContractURI

Contract URI	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsRead.editionContractURI({
    template: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
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
| errors.SDKError                       | 4xx-5xx                               | */*                                   |

## editionContractVersion

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsRead.editionContractVersion({
    template: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
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
| errors.SDKError                           | 4xx-5xx                                   | */*                                       |

## editionGetDefaultRoyaltyInfo

Get Default Royalty Info	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsRead.editionGetDefaultRoyaltyInfo({
    template: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
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
| errors.SDKError                                 | 4xx-5xx                                         | */*                                             |

## editionGetFlatPlatformFeeInfo

Flat platform fee information	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsRead.editionGetFlatPlatformFeeInfo({
    template: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
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
| errors.SDKError                                  | 4xx-5xx                                          | */*                                              |

## editionGetPlatformFeeInfo

Get Platform Fee Info	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsRead.editionGetPlatformFeeInfo({
    template: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
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
| errors.SDKError                              | 4xx-5xx                                      | */*                                          |

## editionGetPlatformFeeType

Platform fee information	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsRead.editionGetPlatformFeeType({
    template: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
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
| errors.SDKError                              | 4xx-5xx                                      | */*                                          |

## editionGetRoleAdmin

Get Role Admin	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsRead.editionGetRoleAdmin({
    requestBody: {},
    template: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
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
| errors.SDKError                        | 4xx-5xx                                | */*                                    |

## editionGetRoleMember

Get Role Member	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsRead.editionGetRoleMember({
    requestBody: {},
    template: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
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
| errors.SDKError                         | 4xx-5xx                                 | */*                                     |

## editionGetRoleMemberCount

Get Role Member Count	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsRead.editionGetRoleMemberCount({
    requestBody: {},
    template: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
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
| errors.SDKError                              | 4xx-5xx                                      | */*                                          |

## editionGetRoyaltyInfoForToken

Get Royalty Info for Token	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsRead.editionGetRoyaltyInfoForToken({
    requestBody: {},
    template: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
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
| errors.SDKError                                  | 4xx-5xx                                          | */*                                              |

## editionHasRole

Has Role

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsRead.editionHasRole({
    requestBody: {},
    template: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
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
| errors.SDKError                   | 4xx-5xx                           | */*                               |

## editionIsApprovedForAll

Is Approved for all

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsRead.editionIsApprovedForAll({
    requestBody: {},
    template: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
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
| errors.SDKError                            | 4xx-5xx                                    | */*                                        |

## editionIsTrustedForwarder

Is Trusted Forwarder

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsRead.editionIsTrustedForwarder({
    requestBody: {},
    template: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
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
| errors.SDKError                              | 4xx-5xx                                      | */*                                          |

## editionName

Name

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsRead.editionName({
    template: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
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
| errors.SDKError                | 4xx-5xx                        | */*                            |

## editionNextTokenIdToMint

Next TokenId To Mint

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsRead.editionNextTokenIdToMint({
    template: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
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
| errors.SDKError                             | 4xx-5xx                                     | */*                                         |

## editionOperatorRestriction

Operator Restriction

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsRead.editionOperatorRestriction({
    template: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
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
| errors.SDKError                               | 4xx-5xx                                       | */*                                           |

## editionOwner

Owner

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsRead.editionOwner({
    template: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
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
| errors.SDKError                 | 4xx-5xx                         | */*                             |

## editionPlatformFeeRecipient

Recipient of platform fees	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsRead.editionPlatformFeeRecipient({
    template: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
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
| errors.SDKError                                | 4xx-5xx                                        | */*                                            |

## editionPrimarySaleRecipient

Primary Sale Recipient

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsRead.editionPrimarySaleRecipient({
    template: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
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
| errors.SDKError                                | 4xx-5xx                                        | */*                                            |

## editionRoyaltyInfo

Royalty Info

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsRead.editionRoyaltyInfo({
    requestBody: {},
    template: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
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
| errors.SDKError                       | 4xx-5xx                               | */*                                   |

## editionSaleRecipientForToken

Recipient of sales proceeds for a token	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsRead.editionSaleRecipientForToken({
    requestBody: {},
    template: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
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
| errors.SDKError                                 | 4xx-5xx                                         | */*                                             |

## editionSupportsInterface

Supports Interface	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsRead.editionSupportsInterface({
    requestBody: {},
    template: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
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
| errors.SDKError                             | 4xx-5xx                                     | */*                                         |

## editionSymbol

Symbol

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsRead.editionSymbol({
    template: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
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
| errors.SDKError                  | 4xx-5xx                          | */*                              |

## editionTotalSupply

Total Supply	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsRead.editionTotalSupply({
    requestBody: {},
    template: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
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
| errors.SDKError                       | 4xx-5xx                               | */*                                   |

## editionUri

URI for a token	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsRead.editionUri({
    requestBody: {},
    template: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
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
| errors.SDKError               | 4xx-5xx                       | */*                           |

## editionVerify

Verifies a signature on a mint request	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsRead.editionVerify({
    requestBody: {},
    template: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
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
| errors.SDKError                  | 4xx-5xx                          | */*                              |
