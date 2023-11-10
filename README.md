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
### Example

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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [customers](docs/sdks/customers/README.md)

* [deleteCustomer](docs/sdks/customers/README.md#deletecustomer) - Delete Customer
* [getCustomer](docs/sdks/customers/README.md#getcustomer) - View Customer
* [getProjectCustomers](docs/sdks/customers/README.md#getprojectcustomers) - List all Customers
* [newCustomer](docs/sdks/customers/README.md#newcustomer) - Add a Customer
* [updateCustomer](docs/sdks/customers/README.md#updatecustomer) - Update Customer

### [nfTs](docs/sdks/nfts/README.md)

* [listNFTUsers](docs/sdks/nfts/README.md#listnftusers) - List all NFT Users
* [listNFTs](docs/sdks/nfts/README.md#listnfts) - List all NFTs
* [showNFT](docs/sdks/nfts/README.md#shownft) - Show a single NFTs

### [functionsRead](docs/sdks/functionsread/README.md)

* [editionDEFAULTADMINROLE](docs/sdks/functionsread/README.md#editiondefaultadminrole) - Default Admin Role
* [editionBalanceOf](docs/sdks/functionsread/README.md#editionbalanceof) - Balance of
* [editionBalanceOfBatch](docs/sdks/functionsread/README.md#editionbalanceofbatch) - Balance of multiple accounts
* [editionContractURI](docs/sdks/functionsread/README.md#editioncontracturi) - Contract URI	
* [editionContractVersion](docs/sdks/functionsread/README.md#editioncontractversion)
* [editionGetDefaultRoyaltyInfo](docs/sdks/functionsread/README.md#editiongetdefaultroyaltyinfo) - Get Default Royalty Info	
* [editionGetFlatPlatformFeeInfo](docs/sdks/functionsread/README.md#editiongetflatplatformfeeinfo) - Flat platform fee information	
* [editionGetPlatformFeeInfo](docs/sdks/functionsread/README.md#editiongetplatformfeeinfo) - Get Platform Fee Info	
* [editionGetPlatformFeeType](docs/sdks/functionsread/README.md#editiongetplatformfeetype) - Platform fee information	
* [editionGetRoleAdmin](docs/sdks/functionsread/README.md#editiongetroleadmin) - Get Role Admin	
* [editionGetRoleMember](docs/sdks/functionsread/README.md#editiongetrolemember) - Get Role Member	
* [editionGetRoleMemberCount](docs/sdks/functionsread/README.md#editiongetrolemembercount) - Get Role Member Count	
* [editionGetRoyaltyInfoForToken](docs/sdks/functionsread/README.md#editiongetroyaltyinfofortoken) - Get Royalty Info for Token	
* [editionHasRole](docs/sdks/functionsread/README.md#editionhasrole) - Has Role
* [editionIsApprovedForAll](docs/sdks/functionsread/README.md#editionisapprovedforall) - Is Approved for all
* [editionIsTrustedForwarder](docs/sdks/functionsread/README.md#editionistrustedforwarder) - Is Trusted Forwarder
* [editionName](docs/sdks/functionsread/README.md#editionname) - Name
* [editionNextTokenIdToMint](docs/sdks/functionsread/README.md#editionnexttokenidtomint) - Next TokenId To Mint
* [editionOperatorRestriction](docs/sdks/functionsread/README.md#editionoperatorrestriction) - Operator Restriction
* [editionOwner](docs/sdks/functionsread/README.md#editionowner) - Owner
* [editionPlatformFeeRecipient](docs/sdks/functionsread/README.md#editionplatformfeerecipient) - Recipient of platform fees	
* [editionPrimarySaleRecipient](docs/sdks/functionsread/README.md#editionprimarysalerecipient) - Primary Sale Recipient
* [editionRoyaltyInfo](docs/sdks/functionsread/README.md#editionroyaltyinfo) - Royalty Info
* [editionSaleRecipientForToken](docs/sdks/functionsread/README.md#editionsalerecipientfortoken) - Recipient of sales proceeds for a token	
* [editionSupportsInterface](docs/sdks/functionsread/README.md#editionsupportsinterface) - Supports Interface	
* [editionSymbol](docs/sdks/functionsread/README.md#editionsymbol) - Symbol
* [editionTotalSupply](docs/sdks/functionsread/README.md#editiontotalsupply) - Total Supply	
* [editionUri](docs/sdks/functionsread/README.md#editionuri) - URI for a token	
* [editionVerify](docs/sdks/functionsread/README.md#editionverify) - Verifies a signature on a mint request	

### [functionsWrite](docs/sdks/functionswrite/README.md)

* [editionBurn](docs/sdks/functionswrite/README.md#editionburn) - Burn
* [editionBurnBatch](docs/sdks/functionswrite/README.md#editionburnbatch) - Burns multiple tokens	
* [editionGrantRole](docs/sdks/functionswrite/README.md#editiongrantrole) - Grant Role
* [editionInitialize](docs/sdks/functionswrite/README.md#editioninitialize) - Initialize
* [editionMintTo](docs/sdks/functionswrite/README.md#editionmintto) - Mints a token to an account	
* [editionMintWithSignature](docs/sdks/functionswrite/README.md#editionmintwithsignature)
* [editionMulticall](docs/sdks/functionswrite/README.md#editionmulticall) - Multicall
* [editionRenounceRole](docs/sdks/functionswrite/README.md#editionrenouncerole) - Renounce Role
* [editionRevokeRole](docs/sdks/functionswrite/README.md#editionrevokerole) - Revoke Role
* [editionSafeBatchTransferFrom](docs/sdks/functionswrite/README.md#editionsafebatchtransferfrom) - Safely transfer tokens from one address to another	
* [editionSafeTransferFrom](docs/sdks/functionswrite/README.md#editionsafetransferfrom) - Safe Transfer From
* [editionSetApprovalForAll](docs/sdks/functionswrite/README.md#editionsetapprovalforall) - Set Approval For All
* [editionSetContractURI](docs/sdks/functionswrite/README.md#editionsetcontracturi) - Set Contract URI	
* [editionSetDefaultRoyaltyInfo](docs/sdks/functionswrite/README.md#editionsetdefaultroyaltyinfo) - Set Default Royalty Info	
* [editionSetFlatPlatformFeeInfo](docs/sdks/functionswrite/README.md#editionsetflatplatformfeeinfo) - Sets the flat platform fee and recipient	
* [editionSetOperatorRestriction](docs/sdks/functionswrite/README.md#editionsetoperatorrestriction) - Set Operator Restriction	
* [editionSetOwner](docs/sdks/functionswrite/README.md#editionsetowner) - Set Owner	
* [editionSetPlatformFeeInfo](docs/sdks/functionswrite/README.md#editionsetplatformfeeinfo) - Set Platform Fee Info	
* [editionSetPlatformFeeType](docs/sdks/functionswrite/README.md#editionsetplatformfeetype) - Sets the platform fee type	
* [editionSetPrimarySaleRecipient](docs/sdks/functionswrite/README.md#editionsetprimarysalerecipient) - Set Primary Sale Recipient	
* [editionSetRoyaltyInfoForToken](docs/sdks/functionswrite/README.md#editionsetroyaltyinfofortoken) - Set Royalty Info For Token	
* [editionSubscribeToRegistry](docs/sdks/functionswrite/README.md#editionsubscribetoregistry) - Subscribe To Registry	
<!-- End SDK Available Operations -->



<!-- Start Dev Containers -->

<!-- End Dev Containers -->



<!-- Start Pagination -->
# Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you make your SDK calls as usual, but the
returned response object will have a `next` method that can be called to pull down the next group of results. If the
return value of `next` is `null`, then there are no more pages to be fetched.

Here's an example of one such pagination call:
<!-- End Pagination -->



<!-- Start Error Handling -->
## Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object        | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.Unauthorized | 401                 | application/json    |
| errors.SDKError     | 400-600             | */*                 |

Example

```typescript
import { GlobalTest2 } from "global-test2";

(async() => {
  const sdk = new GlobalTest2({
    security: {
      default: "",
    },
  });

  
  let res;
  try {
    res = await sdk.customers.deleteCustomer({
    customer: "string",
  });
  } catch (e) { 
    if (e instanceof errors.Unauthorized) {
      console.error(e) // handle exception 
    
  }

  if (res.statusCode == 200) {
    // handle response
  }
})();
```
<!-- End Error Handling -->



<!-- Start Server Selection -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `http://legit.test:8000/v1` | None |

#### Example

```typescript
import { GlobalTest2 } from "global-test2";

(async () => {
    const sdk = new GlobalTest2({
        serverIdx: 0,
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


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
```typescript
import { GlobalTest2 } from "global-test2";

(async () => {
    const sdk = new GlobalTest2({
        serverURL: "http://legit.test:8000/v1",
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
<!-- End Server Selection -->



<!-- Start Custom HTTP Client -->
## Custom HTTP Client

The Typescript SDK makes API calls using the (axios)[https://axios-http.com/docs/intro] HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.

For example, you could specify a header for every request that your sdk makes as follows:

```typescript
from global-test2 import GlobalTest2;
import axios;

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})

const sdk = new GlobalTest2({defaultClient: httpClient});
```
<!-- End Custom HTTP Client -->



<!-- Start Authentication -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name        | Type        | Scheme      |
| ----------- | ----------- | ----------- |
| `default`   | http        | HTTP Bearer |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. For example:
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
<!-- End Authentication -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
