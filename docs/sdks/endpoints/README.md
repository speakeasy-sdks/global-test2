# endpoints

### Available Operations

* [deleteV1CustomersCustomerId](#deletev1customerscustomerid)
* [getV1CustomersCustomerId](#getv1customerscustomerid)
* [getV1ProjectsProjectIdCustomers](#getv1projectsprojectidcustomers)
* [getV1ProjectsProjectIdTransactionsPendingSignatures](#getv1projectsprojectidtransactionspendingsignatures)
* [getV1TemplatesTemplateIdPlaygroundFunctions](#getv1templatestemplateidplaygroundfunctions)
* [getV1TemplatesTemplateIdTransactions](#getv1templatestemplateidtransactions)
* [getV1TransactionsTransactionId](#getv1transactionstransactionid)
* [postV1TemplatesTemplateIdPlaygroundFunctionsFunctionName](#postv1templatestemplateidplaygroundfunctionsfunctionname)
* [postV1TemplatesTemplateIdPlaygroundReadFunctionName](#postv1templatestemplateidplaygroundreadfunctionname)
* [postV1TemplatesTemplateIdPlaygroundTransactionsPayloadFunctionName](#postv1templatestemplateidplaygroundtransactionspayloadfunctionname)
* [postV1TemplatesTemplateIdPlaygroundTransactionsSignProcessFunctionName](#postv1templatestemplateidplaygroundtransactionssignprocessfunctionname)
* [postV1TransactionsTransactionIdCancel](#postv1transactionstransactionidcancel)
* [postV1TransactionsTransactionIdPrepare](#postv1transactionstransactionidprepare)
* [postV1UploadToIpfs](#postv1uploadtoipfs)
* [postV1Uploads](#postv1uploads)
* [putV1CustomersCustomerId](#putv1customerscustomerid)

## deleteV1CustomersCustomerId

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { DeleteV1CustomersCustomerIdResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.endpoints.deleteV1CustomersCustomerId({
  customerId: "provident",
}).then((res: DeleteV1CustomersCustomerIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.DeleteV1CustomersCustomerIdRequest](../../models/operations/deletev1customerscustomeridrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.DeleteV1CustomersCustomerIdResponse](../../models/operations/deletev1customerscustomeridresponse.md)>**


## getV1CustomersCustomerId

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { GetV1CustomersCustomerIdResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.endpoints.getV1CustomersCustomerId({
  customerId: "distinctio",
}).then((res: GetV1CustomersCustomerIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GetV1CustomersCustomerIdRequest](../../models/operations/getv1customerscustomeridrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetV1CustomersCustomerIdResponse](../../models/operations/getv1customerscustomeridresponse.md)>**


## getV1ProjectsProjectIdCustomers

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { GetV1ProjectsProjectIdCustomersResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.endpoints.getV1ProjectsProjectIdCustomers({
  projectId: "quibusdam",
}).then((res: GetV1ProjectsProjectIdCustomersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.GetV1ProjectsProjectIdCustomersRequest](../../models/operations/getv1projectsprojectidcustomersrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.GetV1ProjectsProjectIdCustomersResponse](../../models/operations/getv1projectsprojectidcustomersresponse.md)>**


## getV1ProjectsProjectIdTransactionsPendingSignatures

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { GetV1ProjectsProjectIdTransactionsPendingSignaturesResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.endpoints.getV1ProjectsProjectIdTransactionsPendingSignatures({
  projectId: "unde",
}).then((res: GetV1ProjectsProjectIdTransactionsPendingSignaturesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                      | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                      | [operations.GetV1ProjectsProjectIdTransactionsPendingSignaturesRequest](../../models/operations/getv1projectsprojectidtransactionspendingsignaturesrequest.md) | :heavy_check_mark:                                                                                                                                             | The request object to use for the request.                                                                                                                     |
| `config`                                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                   | :heavy_minus_sign:                                                                                                                                             | Available config options for making requests.                                                                                                                  |


### Response

**Promise<[operations.GetV1ProjectsProjectIdTransactionsPendingSignaturesResponse](../../models/operations/getv1projectsprojectidtransactionspendingsignaturesresponse.md)>**


## getV1TemplatesTemplateIdPlaygroundFunctions

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { GetV1TemplatesTemplateIdPlaygroundFunctionsResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.endpoints.getV1TemplatesTemplateIdPlaygroundFunctions({
  templateId: "nulla",
}).then((res: GetV1TemplatesTemplateIdPlaygroundFunctionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                      | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                      | [operations.GetV1TemplatesTemplateIdPlaygroundFunctionsRequest](../../models/operations/getv1templatestemplateidplaygroundfunctionsrequest.md) | :heavy_check_mark:                                                                                                                             | The request object to use for the request.                                                                                                     |
| `config`                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                   | :heavy_minus_sign:                                                                                                                             | Available config options for making requests.                                                                                                  |


### Response

**Promise<[operations.GetV1TemplatesTemplateIdPlaygroundFunctionsResponse](../../models/operations/getv1templatestemplateidplaygroundfunctionsresponse.md)>**


## getV1TemplatesTemplateIdTransactions

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { GetV1TemplatesTemplateIdTransactionsResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.endpoints.getV1TemplatesTemplateIdTransactions({
  templateId: "corrupti",
}).then((res: GetV1TemplatesTemplateIdTransactionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.GetV1TemplatesTemplateIdTransactionsRequest](../../models/operations/getv1templatestemplateidtransactionsrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.GetV1TemplatesTemplateIdTransactionsResponse](../../models/operations/getv1templatestemplateidtransactionsresponse.md)>**


## getV1TransactionsTransactionId

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { GetV1TransactionsTransactionIdResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.endpoints.getV1TransactionsTransactionId({
  transactionId: "illum",
}).then((res: GetV1TransactionsTransactionIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.GetV1TransactionsTransactionIdRequest](../../models/operations/getv1transactionstransactionidrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.GetV1TransactionsTransactionIdResponse](../../models/operations/getv1transactionstransactionidresponse.md)>**


## postV1TemplatesTemplateIdPlaygroundFunctionsFunctionName

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { PostV1TemplatesTemplateIdPlaygroundFunctionsFunctionNameResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.endpoints.postV1TemplatesTemplateIdPlaygroundFunctionsFunctionName({
  requestBody: {
    functionName: "sed",
  },
  functionName: "vel",
  templateId: "error",
}).then((res: PostV1TemplatesTemplateIdPlaygroundFunctionsFunctionNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                | [operations.PostV1TemplatesTemplateIdPlaygroundFunctionsFunctionNameRequest](../../models/operations/postv1templatestemplateidplaygroundfunctionsfunctionnamerequest.md) | :heavy_check_mark:                                                                                                                                                       | The request object to use for the request.                                                                                                                               |
| `config`                                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                             | :heavy_minus_sign:                                                                                                                                                       | Available config options for making requests.                                                                                                                            |


### Response

**Promise<[operations.PostV1TemplatesTemplateIdPlaygroundFunctionsFunctionNameResponse](../../models/operations/postv1templatestemplateidplaygroundfunctionsfunctionnameresponse.md)>**


## postV1TemplatesTemplateIdPlaygroundReadFunctionName

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { PostV1TemplatesTemplateIdPlaygroundReadFunctionNameResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.endpoints.postV1TemplatesTemplateIdPlaygroundReadFunctionName({
  requestBody: {
    functionName: "illo",
  },
  functionName: "deserunt",
  templateId: "suscipit",
}).then((res: PostV1TemplatesTemplateIdPlaygroundReadFunctionNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                      | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                      | [operations.PostV1TemplatesTemplateIdPlaygroundReadFunctionNameRequest](../../models/operations/postv1templatestemplateidplaygroundreadfunctionnamerequest.md) | :heavy_check_mark:                                                                                                                                             | The request object to use for the request.                                                                                                                     |
| `config`                                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                   | :heavy_minus_sign:                                                                                                                                             | Available config options for making requests.                                                                                                                  |


### Response

**Promise<[operations.PostV1TemplatesTemplateIdPlaygroundReadFunctionNameResponse](../../models/operations/postv1templatestemplateidplaygroundreadfunctionnameresponse.md)>**


## postV1TemplatesTemplateIdPlaygroundTransactionsPayloadFunctionName

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { PostV1TemplatesTemplateIdPlaygroundTransactionsPayloadFunctionNameResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.endpoints.postV1TemplatesTemplateIdPlaygroundTransactionsPayloadFunctionName({
  requestBody: {
    functionName: "soluta",
  },
  functionName: "iure",
  templateId: "magnam",
}).then((res: PostV1TemplatesTemplateIdPlaygroundTransactionsPayloadFunctionNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                    | Type                                                                                                                                                                                         | Required                                                                                                                                                                                     | Description                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                    | [operations.PostV1TemplatesTemplateIdPlaygroundTransactionsPayloadFunctionNameRequest](../../models/operations/postv1templatestemplateidplaygroundtransactionspayloadfunctionnamerequest.md) | :heavy_check_mark:                                                                                                                                                                           | The request object to use for the request.                                                                                                                                                   |
| `config`                                                                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                           | Available config options for making requests.                                                                                                                                                |


### Response

**Promise<[operations.PostV1TemplatesTemplateIdPlaygroundTransactionsPayloadFunctionNameResponse](../../models/operations/postv1templatestemplateidplaygroundtransactionspayloadfunctionnameresponse.md)>**


## postV1TemplatesTemplateIdPlaygroundTransactionsSignProcessFunctionName

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { PostV1TemplatesTemplateIdPlaygroundTransactionsSignProcessFunctionNameResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.endpoints.postV1TemplatesTemplateIdPlaygroundTransactionsSignProcessFunctionName({
  requestBody: {
    functionName: "vel",
  },
  functionName: "debitis",
  templateId: "ipsa",
}).then((res: PostV1TemplatesTemplateIdPlaygroundTransactionsSignProcessFunctionNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                            | Type                                                                                                                                                                                                 | Required                                                                                                                                                                                             | Description                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                            | [operations.PostV1TemplatesTemplateIdPlaygroundTransactionsSignProcessFunctionNameRequest](../../models/operations/postv1templatestemplateidplaygroundtransactionssignprocessfunctionnamerequest.md) | :heavy_check_mark:                                                                                                                                                                                   | The request object to use for the request.                                                                                                                                                           |
| `config`                                                                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                   | Available config options for making requests.                                                                                                                                                        |


### Response

**Promise<[operations.PostV1TemplatesTemplateIdPlaygroundTransactionsSignProcessFunctionNameResponse](../../models/operations/postv1templatestemplateidplaygroundtransactionssignprocessfunctionnameresponse.md)>**


## postV1TransactionsTransactionIdCancel

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { PostV1TransactionsTransactionIdCancelResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.endpoints.postV1TransactionsTransactionIdCancel({
  transactionId: "delectus",
}).then((res: PostV1TransactionsTransactionIdCancelResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.PostV1TransactionsTransactionIdCancelRequest](../../models/operations/postv1transactionstransactionidcancelrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.PostV1TransactionsTransactionIdCancelResponse](../../models/operations/postv1transactionstransactionidcancelresponse.md)>**


## postV1TransactionsTransactionIdPrepare

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { PostV1TransactionsTransactionIdPrepareResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.endpoints.postV1TransactionsTransactionIdPrepare({
  transactionId: "tempora",
}).then((res: PostV1TransactionsTransactionIdPrepareResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.PostV1TransactionsTransactionIdPrepareRequest](../../models/operations/postv1transactionstransactionidpreparerequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.PostV1TransactionsTransactionIdPrepareResponse](../../models/operations/postv1transactionstransactionidprepareresponse.md)>**


## postV1UploadToIpfs

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { PostV1UploadToIpfsResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.endpoints.postV1UploadToIpfs({
  file: {
    content: "suscipit".encode(),
    file: "molestiae",
  },
}).then((res: PostV1UploadToIpfsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.PostV1UploadToIpfsRequestBody](../../models/operations/postv1uploadtoipfsrequestbody.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.PostV1UploadToIpfsResponse](../../models/operations/postv1uploadtoipfsresponse.md)>**


## postV1Uploads

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { PostV1UploadsResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.endpoints.postV1Uploads({
  file: {
    content: "minus".encode(),
    file: "placeat",
  },
  type: "pariatur",
}).then((res: PostV1UploadsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.PostV1UploadsRequestBody](../../models/operations/postv1uploadsrequestbody.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.PostV1UploadsResponse](../../models/operations/postv1uploadsresponse.md)>**


## putV1CustomersCustomerId

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { PutV1CustomersCustomerIdResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.endpoints.putV1CustomersCustomerId({
  requestBody: {
    customIdentifier: "zvhfprn",
    email: "destiny.willms@example.org",
    name: "gcudbzsnhvzvbhj",
    thumb: {
      content: "voluptatum".encode(),
      thumb: "iusto",
    },
  },
  customerId: "excepturi",
}).then((res: PutV1CustomersCustomerIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.PutV1CustomersCustomerIdRequest](../../models/operations/putv1customerscustomeridrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.PutV1CustomersCustomerIdResponse](../../models/operations/putv1customerscustomeridresponse.md)>**

