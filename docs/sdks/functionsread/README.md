# FunctionsRead
(*.functionsRead*)

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

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.EditionVerifyRequest](../../models/operations/editionverifyrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.EditionVerifyResponse](../../models/operations/editionverifyresponse.md)>**

