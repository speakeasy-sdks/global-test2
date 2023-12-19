# FunctionsWrite
(*functionsWrite*)

## Overview

All Edition's Write functions

### Available Operations

* [editionBurn](#editionburn) - Burn
* [editionBurnBatch](#editionburnbatch) - Burns multiple tokens	
* [editionGrantRole](#editiongrantrole) - Grant Role
* [editionInitialize](#editioninitialize) - Initialize
* [editionMintTo](#editionmintto) - Mints a token to an account	
* [editionMintWithSignature](#editionmintwithsignature)
* [editionMulticall](#editionmulticall) - Multicall
* [editionRenounceRole](#editionrenouncerole) - Renounce Role
* [editionRevokeRole](#editionrevokerole) - Revoke Role
* [editionSafeBatchTransferFrom](#editionsafebatchtransferfrom) - Safely transfer tokens from one address to another	
* [editionSafeTransferFrom](#editionsafetransferfrom) - Safe Transfer From
* [editionSetApprovalForAll](#editionsetapprovalforall) - Set Approval For All
* [editionSetContractURI](#editionsetcontracturi) - Set Contract URI	
* [editionSetDefaultRoyaltyInfo](#editionsetdefaultroyaltyinfo) - Set Default Royalty Info	
* [editionSetFlatPlatformFeeInfo](#editionsetflatplatformfeeinfo) - Sets the flat platform fee and recipient	
* [editionSetOperatorRestriction](#editionsetoperatorrestriction) - Set Operator Restriction	
* [editionSetOwner](#editionsetowner) - Set Owner	
* [editionSetPlatformFeeInfo](#editionsetplatformfeeinfo) - Set Platform Fee Info	
* [editionSetPlatformFeeType](#editionsetplatformfeetype) - Sets the platform fee type	
* [editionSetPrimarySaleRecipient](#editionsetprimarysalerecipient) - Set Primary Sale Recipient	
* [editionSetRoyaltyInfoForToken](#editionsetroyaltyinfofortoken) - Set Royalty Info For Token	
* [editionSubscribeToRegistry](#editionsubscribetoregistry) - Subscribe To Registry	

## editionBurn

Burn

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsWrite.editionBurn({
    requestBody: {},
    template: "string",
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
| `request`                                                                          | [operations.EditionBurnRequest](../../sdk/models/operations/editionburnrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.EditionBurnResponse](../../sdk/models/operations/editionburnresponse.md)>**
### Errors

| Error Object                   | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.EditionBurnResponseBody | 401                            | application/json               |
| errors.SDKError                | 4xx-5xx                        | */*                            |

## editionBurnBatch

Burns multiple tokens	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsWrite.editionBurnBatch({
    requestBody: {},
    template: "string",
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
| `request`                                                                                    | [operations.EditionBurnBatchRequest](../../sdk/models/operations/editionburnbatchrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.EditionBurnBatchResponse](../../sdk/models/operations/editionburnbatchresponse.md)>**
### Errors

| Error Object                        | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.EditionBurnBatchResponseBody | 401                                 | application/json                    |
| errors.SDKError                     | 4xx-5xx                             | */*                                 |

## editionGrantRole

Grant Role

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsWrite.editionGrantRole({
    requestBody: {},
    template: "string",
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
| `request`                                                                                    | [operations.EditionGrantRoleRequest](../../sdk/models/operations/editiongrantrolerequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.EditionGrantRoleResponse](../../sdk/models/operations/editiongrantroleresponse.md)>**
### Errors

| Error Object                        | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.EditionGrantRoleResponseBody | 401                                 | application/json                    |
| errors.SDKError                     | 4xx-5xx                             | */*                                 |

## editionInitialize

Initialize

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsWrite.editionInitialize({
    requestBody: {},
    template: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.EditionInitializeRequest](../../sdk/models/operations/editioninitializerequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.EditionInitializeResponse](../../sdk/models/operations/editioninitializeresponse.md)>**
### Errors

| Error Object                         | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.EditionInitializeResponseBody | 401                                  | application/json                     |
| errors.SDKError                      | 4xx-5xx                              | */*                                  |

## editionMintTo

Mints a token to an account	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsWrite.editionMintTo({
    requestBody: {},
    template: "string",
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
| `request`                                                                              | [operations.EditionMintToRequest](../../sdk/models/operations/editionminttorequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.EditionMintToResponse](../../sdk/models/operations/editionminttoresponse.md)>**
### Errors

| Error Object                     | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| errors.EditionMintToResponseBody | 401                              | application/json                 |
| errors.SDKError                  | 4xx-5xx                          | */*                              |

## editionMintWithSignature

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsWrite.editionMintWithSignature({
    requestBody: {},
    template: "string",
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
| `request`                                                                                                    | [operations.EditionMintWithSignatureRequest](../../sdk/models/operations/editionmintwithsignaturerequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.EditionMintWithSignatureResponse](../../sdk/models/operations/editionmintwithsignatureresponse.md)>**
### Errors

| Error Object                                | Status Code                                 | Content Type                                |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| errors.EditionMintWithSignatureResponseBody | 401                                         | application/json                            |
| errors.SDKError                             | 4xx-5xx                                     | */*                                         |

## editionMulticall

Multicall

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsWrite.editionMulticall({
    requestBody: {},
    template: "string",
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
| `request`                                                                                    | [operations.EditionMulticallRequest](../../sdk/models/operations/editionmulticallrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.EditionMulticallResponse](../../sdk/models/operations/editionmulticallresponse.md)>**
### Errors

| Error Object                        | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.EditionMulticallResponseBody | 401                                 | application/json                    |
| errors.SDKError                     | 4xx-5xx                             | */*                                 |

## editionRenounceRole

Renounce Role

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsWrite.editionRenounceRole({
    requestBody: {},
    template: "string",
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
| `request`                                                                                          | [operations.EditionRenounceRoleRequest](../../sdk/models/operations/editionrenouncerolerequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.EditionRenounceRoleResponse](../../sdk/models/operations/editionrenounceroleresponse.md)>**
### Errors

| Error Object                           | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.EditionRenounceRoleResponseBody | 401                                    | application/json                       |
| errors.SDKError                        | 4xx-5xx                                | */*                                    |

## editionRevokeRole

Revoke Role

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsWrite.editionRevokeRole({
    requestBody: {},
    template: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.EditionRevokeRoleRequest](../../sdk/models/operations/editionrevokerolerequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.EditionRevokeRoleResponse](../../sdk/models/operations/editionrevokeroleresponse.md)>**
### Errors

| Error Object                         | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.EditionRevokeRoleResponseBody | 401                                  | application/json                     |
| errors.SDKError                      | 4xx-5xx                              | */*                                  |

## editionSafeBatchTransferFrom

Safely transfer tokens from one address to another	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsWrite.editionSafeBatchTransferFrom({
    requestBody: {},
    template: "string",
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
| `request`                                                                                                            | [operations.EditionSafeBatchTransferFromRequest](../../sdk/models/operations/editionsafebatchtransferfromrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.EditionSafeBatchTransferFromResponse](../../sdk/models/operations/editionsafebatchtransferfromresponse.md)>**
### Errors

| Error Object                                    | Status Code                                     | Content Type                                    |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| errors.EditionSafeBatchTransferFromResponseBody | 401                                             | application/json                                |
| errors.SDKError                                 | 4xx-5xx                                         | */*                                             |

## editionSafeTransferFrom

Safe Transfer From

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsWrite.editionSafeTransferFrom({
    requestBody: {},
    template: "string",
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
| `request`                                                                                                  | [operations.EditionSafeTransferFromRequest](../../sdk/models/operations/editionsafetransferfromrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.EditionSafeTransferFromResponse](../../sdk/models/operations/editionsafetransferfromresponse.md)>**
### Errors

| Error Object                               | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.EditionSafeTransferFromResponseBody | 401                                        | application/json                           |
| errors.SDKError                            | 4xx-5xx                                    | */*                                        |

## editionSetApprovalForAll

Set Approval For All

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsWrite.editionSetApprovalForAll({
    requestBody: {},
    template: "string",
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
| `request`                                                                                                    | [operations.EditionSetApprovalForAllRequest](../../sdk/models/operations/editionsetapprovalforallrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.EditionSetApprovalForAllResponse](../../sdk/models/operations/editionsetapprovalforallresponse.md)>**
### Errors

| Error Object                                | Status Code                                 | Content Type                                |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| errors.EditionSetApprovalForAllResponseBody | 401                                         | application/json                            |
| errors.SDKError                             | 4xx-5xx                                     | */*                                         |

## editionSetContractURI

Set Contract URI	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsWrite.editionSetContractURI({
    requestBody: {},
    template: "string",
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
| `request`                                                                                              | [operations.EditionSetContractURIRequest](../../sdk/models/operations/editionsetcontracturirequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.EditionSetContractURIResponse](../../sdk/models/operations/editionsetcontracturiresponse.md)>**
### Errors

| Error Object                             | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.EditionSetContractURIResponseBody | 401                                      | application/json                         |
| errors.SDKError                          | 4xx-5xx                                  | */*                                      |

## editionSetDefaultRoyaltyInfo

Set Default Royalty Info	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsWrite.editionSetDefaultRoyaltyInfo({
    requestBody: {},
    template: "string",
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
| `request`                                                                                                            | [operations.EditionSetDefaultRoyaltyInfoRequest](../../sdk/models/operations/editionsetdefaultroyaltyinforequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.EditionSetDefaultRoyaltyInfoResponse](../../sdk/models/operations/editionsetdefaultroyaltyinforesponse.md)>**
### Errors

| Error Object                                    | Status Code                                     | Content Type                                    |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| errors.EditionSetDefaultRoyaltyInfoResponseBody | 401                                             | application/json                                |
| errors.SDKError                                 | 4xx-5xx                                         | */*                                             |

## editionSetFlatPlatformFeeInfo

Sets the flat platform fee and recipient	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsWrite.editionSetFlatPlatformFeeInfo({
    requestBody: {},
    template: "string",
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
| `request`                                                                                                              | [operations.EditionSetFlatPlatformFeeInfoRequest](../../sdk/models/operations/editionsetflatplatformfeeinforequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.EditionSetFlatPlatformFeeInfoResponse](../../sdk/models/operations/editionsetflatplatformfeeinforesponse.md)>**
### Errors

| Error Object                                     | Status Code                                      | Content Type                                     |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| errors.EditionSetFlatPlatformFeeInfoResponseBody | 401                                              | application/json                                 |
| errors.SDKError                                  | 4xx-5xx                                          | */*                                              |

## editionSetOperatorRestriction

Set Operator Restriction	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsWrite.editionSetOperatorRestriction({
    requestBody: {},
    template: "string",
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
| `request`                                                                                                              | [operations.EditionSetOperatorRestrictionRequest](../../sdk/models/operations/editionsetoperatorrestrictionrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.EditionSetOperatorRestrictionResponse](../../sdk/models/operations/editionsetoperatorrestrictionresponse.md)>**
### Errors

| Error Object                                     | Status Code                                      | Content Type                                     |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| errors.EditionSetOperatorRestrictionResponseBody | 401                                              | application/json                                 |
| errors.SDKError                                  | 4xx-5xx                                          | */*                                              |

## editionSetOwner

Set Owner	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsWrite.editionSetOwner({
    requestBody: {},
    template: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.EditionSetOwnerRequest](../../sdk/models/operations/editionsetownerrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.EditionSetOwnerResponse](../../sdk/models/operations/editionsetownerresponse.md)>**
### Errors

| Error Object                       | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.EditionSetOwnerResponseBody | 401                                | application/json                   |
| errors.SDKError                    | 4xx-5xx                            | */*                                |

## editionSetPlatformFeeInfo

Set Platform Fee Info	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsWrite.editionSetPlatformFeeInfo({
    requestBody: {},
    template: "string",
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
| `request`                                                                                                      | [operations.EditionSetPlatformFeeInfoRequest](../../sdk/models/operations/editionsetplatformfeeinforequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.EditionSetPlatformFeeInfoResponse](../../sdk/models/operations/editionsetplatformfeeinforesponse.md)>**
### Errors

| Error Object                                 | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.EditionSetPlatformFeeInfoResponseBody | 401                                          | application/json                             |
| errors.SDKError                              | 4xx-5xx                                      | */*                                          |

## editionSetPlatformFeeType

Sets the platform fee type	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsWrite.editionSetPlatformFeeType({
    requestBody: {},
    template: "string",
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
| `request`                                                                                                      | [operations.EditionSetPlatformFeeTypeRequest](../../sdk/models/operations/editionsetplatformfeetyperequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.EditionSetPlatformFeeTypeResponse](../../sdk/models/operations/editionsetplatformfeetyperesponse.md)>**
### Errors

| Error Object                                 | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.EditionSetPlatformFeeTypeResponseBody | 401                                          | application/json                             |
| errors.SDKError                              | 4xx-5xx                                      | */*                                          |

## editionSetPrimarySaleRecipient

Set Primary Sale Recipient	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsWrite.editionSetPrimarySaleRecipient({
    requestBody: {},
    template: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.EditionSetPrimarySaleRecipientRequest](../../sdk/models/operations/editionsetprimarysalerecipientrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.EditionSetPrimarySaleRecipientResponse](../../sdk/models/operations/editionsetprimarysalerecipientresponse.md)>**
### Errors

| Error Object                                      | Status Code                                       | Content Type                                      |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| errors.EditionSetPrimarySaleRecipientResponseBody | 401                                               | application/json                                  |
| errors.SDKError                                   | 4xx-5xx                                           | */*                                               |

## editionSetRoyaltyInfoForToken

Set Royalty Info For Token	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsWrite.editionSetRoyaltyInfoForToken({
    requestBody: {},
    template: "string",
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
| `request`                                                                                                              | [operations.EditionSetRoyaltyInfoForTokenRequest](../../sdk/models/operations/editionsetroyaltyinfofortokenrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.EditionSetRoyaltyInfoForTokenResponse](../../sdk/models/operations/editionsetroyaltyinfofortokenresponse.md)>**
### Errors

| Error Object                                     | Status Code                                      | Content Type                                     |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| errors.EditionSetRoyaltyInfoForTokenResponseBody | 401                                              | application/json                                 |
| errors.SDKError                                  | 4xx-5xx                                          | */*                                              |

## editionSubscribeToRegistry

Subscribe To Registry	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.functionsWrite.editionSubscribeToRegistry({
    requestBody: {},
    template: "string",
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
| `request`                                                                                                        | [operations.EditionSubscribeToRegistryRequest](../../sdk/models/operations/editionsubscribetoregistryrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.EditionSubscribeToRegistryResponse](../../sdk/models/operations/editionsubscribetoregistryresponse.md)>**
### Errors

| Error Object                                  | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.EditionSubscribeToRegistryResponseBody | 401                                           | application/json                              |
| errors.SDKError                               | 4xx-5xx                                       | */*                                           |
