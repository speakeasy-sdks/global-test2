<!-- Start SDK Example Usage -->


```typescript
import { GlobalTest2 } from "global-test2";
import { NewCustomerResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.global.newCustomer({
  requestBody: {
    customIdentifier: "iusto",
    email: "anya24@example.org",
    metadata: [
      {},
    ],
    name: "commodi",
    thumb: {
      content: "corrupti".encode(),
      thumb: "provident",
    },
  },
  projectId: "distinctio",
}).then((res: NewCustomerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->