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

(async() => {
  const sdk = new GlobalTest2({
    security: {
      default: "",
    },
  });

  const res = await sdk.customers.deleteCustomer({
    customer: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.DeleteCustomerRequest](../../models/operations/deletecustomerrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.DeleteCustomerResponse](../../models/operations/deletecustomerresponse.md)>**


## getCustomer

View a single Customer of a Project

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

(async() => {
  const sdk = new GlobalTest2({
    security: {
      default: "",
    },
  });

  const res = await sdk.customers.getCustomer({
    customer: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetCustomerRequest](../../models/operations/getcustomerrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetCustomerResponse](../../models/operations/getcustomerresponse.md)>**


## getProjectCustomers

Get a list of all the Customers of a Project

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

(async() => {
  const sdk = new GlobalTest2({
    security: {
      default: "",
    },
  });

  const res = await sdk.customers.getProjectCustomers({
    project: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetProjectCustomersRequest](../../models/operations/getprojectcustomersrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetProjectCustomersResponse](../../models/operations/getprojectcustomersresponse.md)>**


## newCustomer

Add a new customer to the project

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

(async() => {
  const sdk = new GlobalTest2({
    security: {
      default: "",
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
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.NewCustomerRequest](../../models/operations/newcustomerrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.NewCustomerResponse](../../models/operations/newcustomerresponse.md)>**


## updateCustomer

Update the record of an existing customer

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";

(async() => {
  const sdk = new GlobalTest2({
    security: {
      default: "",
    },
  });

  const res = await sdk.customers.updateCustomer({
    updateCustomer: {
      customIdentifier: "org-user-123",
      metadata: "[{\"key\":\"key1\",\"value\":\"value1\"},{\"value\":\"value1\",\"key\":\"key1\"}]",
      thumb: "|RIpQ_8pxC" as bytes <<<>>>,
    },
    customer: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.UpdateCustomerRequest](../../models/operations/updatecustomerrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.UpdateCustomerResponse](../../models/operations/updatecustomerresponse.md)>**

