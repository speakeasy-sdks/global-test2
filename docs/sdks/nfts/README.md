# NFTs
(*nfTs*)

## Overview

API Endpoints of NFTs

### Available Operations

* [listNFTUsers](#listnftusers) - List all NFT Users
* [listNFTs](#listnfts) - List all NFTs
* [showNFT](#shownft) - Show a single NFTs

## listNFTUsers

Get a list of all the NFT Users

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.nfTs.listNFTUsers({
    template: "string",
    token: 1,
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
| `request`                                                                            | [operations.ListNFTUsersRequest](../../sdk/models/operations/listnftusersrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ListNFTUsersResponse](../../sdk/models/operations/listnftusersresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listNFTs

Get a list of all the NFTs of a Project

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.nfTs.listNFTs({
    template: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.ListNFTsRequest](../../sdk/models/operations/listnftsrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.ListNFTsResponse](../../sdk/models/operations/listnftsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## showNFT

Show a single NFT of a Template

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.nfTs.showNFT({
    template: "string",
    token: 1,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.ShowNFTRequest](../../sdk/models/operations/shownftrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.ShowNFTResponse](../../sdk/models/operations/shownftresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
