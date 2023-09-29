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
import { ListNFTUsersResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.nfTs.listNFTUsers({
  template: "Diesel invoice",
  token: 1,
}).then((res: ListNFTUsersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.ListNFTUsersRequest](../../models/operations/listnftusersrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.ListNFTUsersResponse](../../models/operations/listnftusersresponse.md)>**


## listNFTs

Get a list of all the NFTs of a Project

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { ListNFTsResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.nfTs.listNFTs({
  template: "primary Coupe Integration",
}).then((res: ListNFTsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [operations.ListNFTsRequest](../../models/operations/listnftsrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.ListNFTsResponse](../../models/operations/listnftsresponse.md)>**


## showNFT

Show a single NFT of a Template

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { ShowNFTResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.nfTs.showNFT({
  template: "RAM Passenger",
  token: 1,
}).then((res: ShowNFTResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [operations.ShowNFTRequest](../../models/operations/shownftrequest.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.ShowNFTResponse](../../models/operations/shownftresponse.md)>**

