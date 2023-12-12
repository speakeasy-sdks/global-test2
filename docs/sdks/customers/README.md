# Customers
(*customers*)

## Overview

API Endpoints of Customers

### Available Operations

* [deleteCustomer](#deletecustomer) - Delete Customer
* [getCustomer](#getcustomer) - View Customer
* [getProjectCustomers](#getprojectcustomers) - List all Customers
* [newCustomer](#newcustomer) - Add a Customer
* [updateCustomer](#updatecustomer) - Update Customer

## deleteCustomer

Delete the record of an existing customer

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.customers.deleteCustomer({
    customer: "string",
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
| `request`                                                                                | [operations.DeleteCustomerRequest](../../sdk/models/operations/deletecustomerrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.DeleteCustomerResponse](../../sdk/models/operations/deletecustomerresponse.md)>**
### Errors

| Error Object        | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.Unauthorized | 401                 | application/json    |
| errors.SDKError     | 400-600             | */*                 |

## getCustomer

View a single Customer of a Project

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.customers.getCustomer({
    customer: "string",
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
| `request`                                                                          | [operations.GetCustomerRequest](../../sdk/models/operations/getcustomerrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetCustomerResponse](../../sdk/models/operations/getcustomerresponse.md)>**
### Errors

| Error Object        | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.Unauthorized | 401                 | application/json    |
| errors.SDKError     | 400-600             | */*                 |

## getProjectCustomers

Get a list of all the Customers of a Project

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.customers.getProjectCustomers({
    project: "string",
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
| `request`                                                                                          | [operations.GetProjectCustomersRequest](../../sdk/models/operations/getprojectcustomersrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetProjectCustomersResponse](../../sdk/models/operations/getprojectcustomersresponse.md)>**
### Errors

| Error Object        | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.Unauthorized | 401                 | application/json    |
| errors.SDKError     | 400-600             | */*                 |

## newCustomer

Add a new customer to the project

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.customers.newCustomer({
    createCustomer: {
      customIdentifier: "org-user-123",
      metadata: "[{\"key\":\"key1\",\"value\":\"value1\"},{\"key\":\"key1\",\"value\":\"value1\"}]",
    },
    project: "string",
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
| `request`                                                                          | [operations.NewCustomerRequest](../../sdk/models/operations/newcustomerrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.NewCustomerResponse](../../sdk/models/operations/newcustomerresponse.md)>**
### Errors

| Error Object        | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.Unauthorized | 401                 | application/json    |
| errors.SDKError     | 400-600             | */*                 |

## updateCustomer

Update the record of an existing customer

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
  const sdk = new GlobalTest2({
    security: {
      default: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.customers.updateCustomer({
    updateCustomer: {
      customIdentifier: "org-user-123",
      metadata: "[{\"key\":\"key1\",\"value\":\"value1\"},{\"key\":\"key1\",\"value\":\"value1\"}]",
      thumb: new TextEncoder().encode("0xFb9Cbe5CE8"),
    },
    customer: "string",
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
| `request`                                                                                | [operations.UpdateCustomerRequest](../../sdk/models/operations/updatecustomerrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.UpdateCustomerResponse](../../sdk/models/operations/updatecustomerresponse.md)>**
### Errors

| Error Object        | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.Unauthorized | 401                 | application/json    |
| errors.SDKError     | 400-600             | */*                 |
