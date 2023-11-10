<!-- Start SDK Example Usage -->
```typescript
import { GlobalTest2 } from "global-test2";

(async () => {
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
<!-- End SDK Example Usage -->