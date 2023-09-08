# global

### Available Operations

* [newCustomer](#newcustomer) - New Customer

## newCustomer

Add a new customer to the project

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { NewCustomerResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2();

sdk.global.newCustomer({
  requestBody: {
    customIdentifier: "natus",
    email: "barton.janet@example.net",
    metadata: [
      {},
    ],
    name: "deserunt",
    thumb: {
      content: "nisi".encode(),
      thumb: "recusandae",
    },
  },
  projectId: "temporibus",
}).then((res: NewCustomerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.NewCustomerRequest](../../models/operations/newcustomerrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.NewCustomerResponse](../../models/operations/newcustomerresponse.md)>**

