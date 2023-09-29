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
import { EditionBurnResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsWrite.editionBurn({
  requestBody: {},
  template: "generate Arkansas",
}).then((res: EditionBurnResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.EditionBurnRequest](../../models/operations/editionburnrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.EditionBurnResponse](../../models/operations/editionburnresponse.md)>**


## editionBurnBatch

Burns multiple tokens	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionBurnBatchResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsWrite.editionBurnBatch({
  requestBody: {},
  template: "Bicycle lux",
}).then((res: EditionBurnBatchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.EditionBurnBatchRequest](../../models/operations/editionburnbatchrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.EditionBurnBatchResponse](../../models/operations/editionburnbatchresponse.md)>**


## editionGrantRole

Grant Role

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionGrantRoleResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsWrite.editionGrantRole({
  requestBody: {},
  template: "League Northeast Beaumont",
}).then((res: EditionGrantRoleResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.EditionGrantRoleRequest](../../models/operations/editiongrantrolerequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.EditionGrantRoleResponse](../../models/operations/editiongrantroleresponse.md)>**


## editionInitialize

Initialize

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionInitializeResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsWrite.editionInitialize({
  requestBody: {},
  template: "Berkshire",
}).then((res: EditionInitializeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.EditionInitializeRequest](../../models/operations/editioninitializerequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.EditionInitializeResponse](../../models/operations/editioninitializeresponse.md)>**


## editionMintTo

Mints a token to an account	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionMintToResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsWrite.editionMintTo({
  requestBody: {},
  template: "SMTP quantifying unleash",
}).then((res: EditionMintToResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.EditionMintToRequest](../../models/operations/editionminttorequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.EditionMintToResponse](../../models/operations/editionminttoresponse.md)>**


## editionMintWithSignature

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionMintWithSignatureResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsWrite.editionMintWithSignature({
  requestBody: {},
  template: "Savings",
}).then((res: EditionMintWithSignatureResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.EditionMintWithSignatureRequest](../../models/operations/editionmintwithsignaturerequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.EditionMintWithSignatureResponse](../../models/operations/editionmintwithsignatureresponse.md)>**


## editionMulticall

Multicall

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionMulticallResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsWrite.editionMulticall({
  requestBody: {},
  template: "Throughway",
}).then((res: EditionMulticallResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.EditionMulticallRequest](../../models/operations/editionmulticallrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.EditionMulticallResponse](../../models/operations/editionmulticallresponse.md)>**


## editionRenounceRole

Renounce Role

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionRenounceRoleResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsWrite.editionRenounceRole({
  requestBody: {},
  template: "Bedfordshire capacitor",
}).then((res: EditionRenounceRoleResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.EditionRenounceRoleRequest](../../models/operations/editionrenouncerolerequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.EditionRenounceRoleResponse](../../models/operations/editionrenounceroleresponse.md)>**


## editionRevokeRole

Revoke Role

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionRevokeRoleResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsWrite.editionRevokeRole({
  requestBody: {},
  template: "middleware inasmuch enim",
}).then((res: EditionRevokeRoleResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.EditionRevokeRoleRequest](../../models/operations/editionrevokerolerequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.EditionRevokeRoleResponse](../../models/operations/editionrevokeroleresponse.md)>**


## editionSafeBatchTransferFrom

Safely transfer tokens from one address to another	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionSafeBatchTransferFromResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsWrite.editionSafeBatchTransferFrom({
  requestBody: {},
  template: "Stage",
}).then((res: EditionSafeBatchTransferFromResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.EditionSafeBatchTransferFromRequest](../../models/operations/editionsafebatchtransferfromrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.EditionSafeBatchTransferFromResponse](../../models/operations/editionsafebatchtransferfromresponse.md)>**


## editionSafeTransferFrom

Safe Transfer From

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionSafeTransferFromResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsWrite.editionSafeTransferFrom({
  requestBody: {},
  template: "connecting Metrics Southwest",
}).then((res: EditionSafeTransferFromResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.EditionSafeTransferFromRequest](../../models/operations/editionsafetransferfromrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.EditionSafeTransferFromResponse](../../models/operations/editionsafetransferfromresponse.md)>**


## editionSetApprovalForAll

Set Approval For All

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionSetApprovalForAllResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsWrite.editionSetApprovalForAll({
  requestBody: {},
  template: "female",
}).then((res: EditionSetApprovalForAllResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.EditionSetApprovalForAllRequest](../../models/operations/editionsetapprovalforallrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.EditionSetApprovalForAllResponse](../../models/operations/editionsetapprovalforallresponse.md)>**


## editionSetContractURI

Set Contract URI	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionSetContractURIResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsWrite.editionSetContractURI({
  requestBody: {},
  template: "argue red application",
}).then((res: EditionSetContractURIResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.EditionSetContractURIRequest](../../models/operations/editionsetcontracturirequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.EditionSetContractURIResponse](../../models/operations/editionsetcontracturiresponse.md)>**


## editionSetDefaultRoyaltyInfo

Set Default Royalty Info	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionSetDefaultRoyaltyInfoResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsWrite.editionSetDefaultRoyaltyInfo({
  requestBody: {},
  template: "Applications API Northeast",
}).then((res: EditionSetDefaultRoyaltyInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.EditionSetDefaultRoyaltyInfoRequest](../../models/operations/editionsetdefaultroyaltyinforequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.EditionSetDefaultRoyaltyInfoResponse](../../models/operations/editionsetdefaultroyaltyinforesponse.md)>**


## editionSetFlatPlatformFeeInfo

Sets the flat platform fee and recipient	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionSetFlatPlatformFeeInfoResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsWrite.editionSetFlatPlatformFeeInfo({
  requestBody: {},
  template: "slowly Washington",
}).then((res: EditionSetFlatPlatformFeeInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.EditionSetFlatPlatformFeeInfoRequest](../../models/operations/editionsetflatplatformfeeinforequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.EditionSetFlatPlatformFeeInfoResponse](../../models/operations/editionsetflatplatformfeeinforesponse.md)>**


## editionSetOperatorRestriction

Set Operator Restriction	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionSetOperatorRestrictionResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsWrite.editionSetOperatorRestriction({
  requestBody: {},
  template: "Account",
}).then((res: EditionSetOperatorRestrictionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.EditionSetOperatorRestrictionRequest](../../models/operations/editionsetoperatorrestrictionrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.EditionSetOperatorRestrictionResponse](../../models/operations/editionsetoperatorrestrictionresponse.md)>**


## editionSetOwner

Set Owner	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionSetOwnerResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsWrite.editionSetOwner({
  requestBody: {},
  template: "models Rubber supposing",
}).then((res: EditionSetOwnerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.EditionSetOwnerRequest](../../models/operations/editionsetownerrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.EditionSetOwnerResponse](../../models/operations/editionsetownerresponse.md)>**


## editionSetPlatformFeeInfo

Set Platform Fee Info	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionSetPlatformFeeInfoResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsWrite.editionSetPlatformFeeInfo({
  requestBody: {},
  template: "programming Northeast",
}).then((res: EditionSetPlatformFeeInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.EditionSetPlatformFeeInfoRequest](../../models/operations/editionsetplatformfeeinforequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.EditionSetPlatformFeeInfoResponse](../../models/operations/editionsetplatformfeeinforesponse.md)>**


## editionSetPlatformFeeType

Sets the platform fee type	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionSetPlatformFeeTypeResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsWrite.editionSetPlatformFeeType({
  requestBody: {},
  template: "success",
}).then((res: EditionSetPlatformFeeTypeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.EditionSetPlatformFeeTypeRequest](../../models/operations/editionsetplatformfeetyperequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.EditionSetPlatformFeeTypeResponse](../../models/operations/editionsetplatformfeetyperesponse.md)>**


## editionSetPrimarySaleRecipient

Set Primary Sale Recipient	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionSetPrimarySaleRecipientResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsWrite.editionSetPrimarySaleRecipient({
  requestBody: {},
  template: "Cambridgeshire Forest",
}).then((res: EditionSetPrimarySaleRecipientResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.EditionSetPrimarySaleRecipientRequest](../../models/operations/editionsetprimarysalerecipientrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.EditionSetPrimarySaleRecipientResponse](../../models/operations/editionsetprimarysalerecipientresponse.md)>**


## editionSetRoyaltyInfoForToken

Set Royalty Info For Token	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionSetRoyaltyInfoForTokenResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsWrite.editionSetRoyaltyInfoForToken({
  requestBody: {},
  template: "compressing teaching until",
}).then((res: EditionSetRoyaltyInfoForTokenResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.EditionSetRoyaltyInfoForTokenRequest](../../models/operations/editionsetroyaltyinfofortokenrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.EditionSetRoyaltyInfoForTokenResponse](../../models/operations/editionsetroyaltyinfofortokenresponse.md)>**


## editionSubscribeToRegistry

Subscribe To Registry	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionSubscribeToRegistryResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsWrite.editionSubscribeToRegistry({
  requestBody: {},
  template: "Music salmon International",
}).then((res: EditionSubscribeToRegistryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.EditionSubscribeToRegistryRequest](../../models/operations/editionsubscribetoregistryrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.EditionSubscribeToRegistryResponse](../../models/operations/editionsubscribetoregistryresponse.md)>**

