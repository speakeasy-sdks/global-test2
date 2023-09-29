<!-- Start SDK Example Usage -->


```typescript
import { GlobalTest2 } from "global-test2";
import { DeleteCustomerResponse } from "global-test2/dist/sdk/models/operations";

const sdk = new GlobalTest2({
  security: {
    default: "",
  },
});

sdk.customers.deleteCustomer({
  customer: "IP deposit transmitting",
}).then((res: DeleteCustomerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->