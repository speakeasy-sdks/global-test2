<!-- Start SDK Example Usage -->


```typescript
import { GlobalTest2 } from "global-test2";
import { DeleteV1CustomersCustomerIdResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.endpoints.deleteV1CustomersCustomerId({
  customerId: "corrupti",
}).then((res: DeleteV1CustomersCustomerIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->