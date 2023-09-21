# FunctionsRead

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
import { EditionDEFAULTADMINROLEResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsRead.editionDEFAULTADMINROLE({
  template: "ab",
}).then((res: EditionDEFAULTADMINROLEResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.EditionDEFAULTADMINROLERequest](../../models/operations/editiondefaultadminrolerequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.EditionDEFAULTADMINROLEResponse](../../models/operations/editiondefaultadminroleresponse.md)>**


## editionBalanceOf

Balance of

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionBalanceOfResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsRead.editionBalanceOf({
  requestBody: {},
  template: "quis",
}).then((res: EditionBalanceOfResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.EditionBalanceOfRequest](../../models/operations/editionbalanceofrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.EditionBalanceOfResponse](../../models/operations/editionbalanceofresponse.md)>**


## editionBalanceOfBatch

Balance of multiple accounts

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionBalanceOfBatchResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsRead.editionBalanceOfBatch({
  requestBody: {},
  template: "veritatis",
}).then((res: EditionBalanceOfBatchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.EditionBalanceOfBatchRequest](../../models/operations/editionbalanceofbatchrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.EditionBalanceOfBatchResponse](../../models/operations/editionbalanceofbatchresponse.md)>**


## editionContractURI

Contract URI	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionContractURIResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsRead.editionContractURI({
  template: "deserunt",
}).then((res: EditionContractURIResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.EditionContractURIRequest](../../models/operations/editioncontracturirequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.EditionContractURIResponse](../../models/operations/editioncontracturiresponse.md)>**


## editionContractVersion

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionContractVersionResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsRead.editionContractVersion({
  template: "perferendis",
}).then((res: EditionContractVersionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.EditionContractVersionRequest](../../models/operations/editioncontractversionrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.EditionContractVersionResponse](../../models/operations/editioncontractversionresponse.md)>**


## editionGetDefaultRoyaltyInfo

Get Default Royalty Info	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionGetDefaultRoyaltyInfoResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsRead.editionGetDefaultRoyaltyInfo({
  template: "ipsam",
}).then((res: EditionGetDefaultRoyaltyInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.EditionGetDefaultRoyaltyInfoRequest](../../models/operations/editiongetdefaultroyaltyinforequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.EditionGetDefaultRoyaltyInfoResponse](../../models/operations/editiongetdefaultroyaltyinforesponse.md)>**


## editionGetFlatPlatformFeeInfo

Flat platform fee information	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionGetFlatPlatformFeeInfoResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsRead.editionGetFlatPlatformFeeInfo({
  template: "repellendus",
}).then((res: EditionGetFlatPlatformFeeInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.EditionGetFlatPlatformFeeInfoRequest](../../models/operations/editiongetflatplatformfeeinforequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.EditionGetFlatPlatformFeeInfoResponse](../../models/operations/editiongetflatplatformfeeinforesponse.md)>**


## editionGetPlatformFeeInfo

Get Platform Fee Info	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionGetPlatformFeeInfoResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsRead.editionGetPlatformFeeInfo({
  template: "sapiente",
}).then((res: EditionGetPlatformFeeInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.EditionGetPlatformFeeInfoRequest](../../models/operations/editiongetplatformfeeinforequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.EditionGetPlatformFeeInfoResponse](../../models/operations/editiongetplatformfeeinforesponse.md)>**


## editionGetPlatformFeeType

Platform fee information	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionGetPlatformFeeTypeResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsRead.editionGetPlatformFeeType({
  template: "quo",
}).then((res: EditionGetPlatformFeeTypeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.EditionGetPlatformFeeTypeRequest](../../models/operations/editiongetplatformfeetyperequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.EditionGetPlatformFeeTypeResponse](../../models/operations/editiongetplatformfeetyperesponse.md)>**


## editionGetRoleAdmin

Get Role Admin	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionGetRoleAdminResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsRead.editionGetRoleAdmin({
  requestBody: {},
  template: "odit",
}).then((res: EditionGetRoleAdminResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.EditionGetRoleAdminRequest](../../models/operations/editiongetroleadminrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.EditionGetRoleAdminResponse](../../models/operations/editiongetroleadminresponse.md)>**


## editionGetRoleMember

Get Role Member	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionGetRoleMemberResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsRead.editionGetRoleMember({
  requestBody: {},
  template: "at",
}).then((res: EditionGetRoleMemberResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.EditionGetRoleMemberRequest](../../models/operations/editiongetrolememberrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.EditionGetRoleMemberResponse](../../models/operations/editiongetrolememberresponse.md)>**


## editionGetRoleMemberCount

Get Role Member Count	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionGetRoleMemberCountResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsRead.editionGetRoleMemberCount({
  requestBody: {},
  template: "at",
}).then((res: EditionGetRoleMemberCountResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.EditionGetRoleMemberCountRequest](../../models/operations/editiongetrolemembercountrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.EditionGetRoleMemberCountResponse](../../models/operations/editiongetrolemembercountresponse.md)>**


## editionGetRoyaltyInfoForToken

Get Royalty Info for Token	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionGetRoyaltyInfoForTokenResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsRead.editionGetRoyaltyInfoForToken({
  requestBody: {},
  template: "maiores",
}).then((res: EditionGetRoyaltyInfoForTokenResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.EditionGetRoyaltyInfoForTokenRequest](../../models/operations/editiongetroyaltyinfofortokenrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.EditionGetRoyaltyInfoForTokenResponse](../../models/operations/editiongetroyaltyinfofortokenresponse.md)>**


## editionHasRole

Has Role

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionHasRoleResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsRead.editionHasRole({
  requestBody: {},
  template: "molestiae",
}).then((res: EditionHasRoleResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.EditionHasRoleRequest](../../models/operations/editionhasrolerequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.EditionHasRoleResponse](../../models/operations/editionhasroleresponse.md)>**


## editionIsApprovedForAll

Is Approved for all

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionIsApprovedForAllResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsRead.editionIsApprovedForAll({
  requestBody: {},
  template: "quod",
}).then((res: EditionIsApprovedForAllResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.EditionIsApprovedForAllRequest](../../models/operations/editionisapprovedforallrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.EditionIsApprovedForAllResponse](../../models/operations/editionisapprovedforallresponse.md)>**


## editionIsTrustedForwarder

Is Trusted Forwarder

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionIsTrustedForwarderResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsRead.editionIsTrustedForwarder({
  requestBody: {},
  template: "quod",
}).then((res: EditionIsTrustedForwarderResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.EditionIsTrustedForwarderRequest](../../models/operations/editionistrustedforwarderrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.EditionIsTrustedForwarderResponse](../../models/operations/editionistrustedforwarderresponse.md)>**


## editionName

Name

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionNameResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsRead.editionName({
  template: "esse",
}).then((res: EditionNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.EditionNameRequest](../../models/operations/editionnamerequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.EditionNameResponse](../../models/operations/editionnameresponse.md)>**


## editionNextTokenIdToMint

Next TokenId To Mint

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionNextTokenIdToMintResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsRead.editionNextTokenIdToMint({
  template: "totam",
}).then((res: EditionNextTokenIdToMintResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.EditionNextTokenIdToMintRequest](../../models/operations/editionnexttokenidtomintrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.EditionNextTokenIdToMintResponse](../../models/operations/editionnexttokenidtomintresponse.md)>**


## editionOperatorRestriction

Operator Restriction

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionOperatorRestrictionResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsRead.editionOperatorRestriction({
  template: "porro",
}).then((res: EditionOperatorRestrictionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.EditionOperatorRestrictionRequest](../../models/operations/editionoperatorrestrictionrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.EditionOperatorRestrictionResponse](../../models/operations/editionoperatorrestrictionresponse.md)>**


## editionOwner

Owner

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionOwnerResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsRead.editionOwner({
  template: "dolorum",
}).then((res: EditionOwnerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.EditionOwnerRequest](../../models/operations/editionownerrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.EditionOwnerResponse](../../models/operations/editionownerresponse.md)>**


## editionPlatformFeeRecipient

Recipient of platform fees	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionPlatformFeeRecipientResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsRead.editionPlatformFeeRecipient({
  template: "dicta",
}).then((res: EditionPlatformFeeRecipientResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.EditionPlatformFeeRecipientRequest](../../models/operations/editionplatformfeerecipientrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.EditionPlatformFeeRecipientResponse](../../models/operations/editionplatformfeerecipientresponse.md)>**


## editionPrimarySaleRecipient

Primary Sale Recipient

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionPrimarySaleRecipientResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsRead.editionPrimarySaleRecipient({
  template: "nam",
}).then((res: EditionPrimarySaleRecipientResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.EditionPrimarySaleRecipientRequest](../../models/operations/editionprimarysalerecipientrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.EditionPrimarySaleRecipientResponse](../../models/operations/editionprimarysalerecipientresponse.md)>**


## editionRoyaltyInfo

Royalty Info

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionRoyaltyInfoResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsRead.editionRoyaltyInfo({
  requestBody: {},
  template: "officia",
}).then((res: EditionRoyaltyInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.EditionRoyaltyInfoRequest](../../models/operations/editionroyaltyinforequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.EditionRoyaltyInfoResponse](../../models/operations/editionroyaltyinforesponse.md)>**


## editionSaleRecipientForToken

Recipient of sales proceeds for a token	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionSaleRecipientForTokenResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsRead.editionSaleRecipientForToken({
  requestBody: {},
  template: "occaecati",
}).then((res: EditionSaleRecipientForTokenResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.EditionSaleRecipientForTokenRequest](../../models/operations/editionsalerecipientfortokenrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.EditionSaleRecipientForTokenResponse](../../models/operations/editionsalerecipientfortokenresponse.md)>**


## editionSupportsInterface

Supports Interface	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionSupportsInterfaceResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsRead.editionSupportsInterface({
  requestBody: {},
  template: "fugit",
}).then((res: EditionSupportsInterfaceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.EditionSupportsInterfaceRequest](../../models/operations/editionsupportsinterfacerequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.EditionSupportsInterfaceResponse](../../models/operations/editionsupportsinterfaceresponse.md)>**


## editionSymbol

Symbol

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionSymbolResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsRead.editionSymbol({
  template: "deleniti",
}).then((res: EditionSymbolResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.EditionSymbolRequest](../../models/operations/editionsymbolrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.EditionSymbolResponse](../../models/operations/editionsymbolresponse.md)>**


## editionTotalSupply

Total Supply	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionTotalSupplyResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsRead.editionTotalSupply({
  requestBody: {},
  template: "hic",
}).then((res: EditionTotalSupplyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.EditionTotalSupplyRequest](../../models/operations/editiontotalsupplyrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.EditionTotalSupplyResponse](../../models/operations/editiontotalsupplyresponse.md)>**


## editionUri

URI for a token	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionUriResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsRead.editionUri({
  requestBody: {},
  template: "optio",
}).then((res: EditionUriResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.EditionUriRequest](../../models/operations/editionurirequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.EditionUriResponse](../../models/operations/editionuriresponse.md)>**


## editionVerify

Verifies a signature on a mint request	

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { EditionVerifyResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.functionsRead.editionVerify({
  requestBody: {},
  template: "totam",
}).then((res: EditionVerifyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.EditionVerifyRequest](../../models/operations/editionverifyrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.EditionVerifyResponse](../../models/operations/editionverifyresponse.md)>**
