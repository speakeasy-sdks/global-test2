# projects

## Overview

API Endpoints of Projects

### Available Operations

* [updateProject](#updateproject) - Update existing project

## updateProject

Returns updated project data

### Example Usage

```typescript
import { GlobalTest2 } from "global-test2";
import { UpdateProjectResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2();

sdk.projects.updateProject({
  requestBody: {
    customIdentifier: "The Custom Identifier of the customer in the organization",
    email: "The Email of the customer.",
    metadata: {},
    name: "The Name of the customer.",
    thumb: "The Avatar of the customer.",
  },
  id: 592845,
}).then((res: UpdateProjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.UpdateProjectRequest](../../models/operations/updateprojectrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.UpdateProjectResponse](../../models/operations/updateprojectresponse.md)>**
