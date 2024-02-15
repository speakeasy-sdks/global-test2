<!-- Start SDK Example Usage [usage] -->
```typescript
import { GlobalTest2 } from "global-test2";

async function run() {
    const sdk = new GlobalTest2({
        security: {
            default: "<YOUR_BEARER_TOKEN_HERE>",
        },
    });

    const res = await sdk.customers.deleteCustomer({
        customer: "<value>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->