# global-test2

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/speakeasy-sdks/global-test2.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/bolt-php/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/global-test2
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/global-test2
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Global](docs/sdks/global/README.md)

* [newCustomer](docs/sdks/global/README.md#newcustomer) - New Customer
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
