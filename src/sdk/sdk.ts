/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as shared from "../sdk/models/shared";
import { Customers } from "./customers";
import { FunctionsRead } from "./functionsread";
import { FunctionsWrite } from "./functionswrite";
import { NFTs } from "./nfts";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
    /**
     * Legit API Core Server
     */
    "http://legit.test:8000/v1",
] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security | (() => Promise<shared.Security>);

    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: utils.RetryConfig;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    security?: shared.Security | (() => Promise<shared.Security>);
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "1.0.0";
    sdkVersion = "0.9.5";
    genVersion = "2.272.7";
    userAgent = "speakeasy-sdk/typescript 0.9.5 2.272.7 1.0.0 global-test2";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Legit OpenApi Documentation: Legit OpenApi Documentation
 */
export class GlobalTest2 {
    /**
     * API Endpoints of Customers
     */
    public customers: Customers;
    /**
     * API Endpoints of NFTs
     */
    public nfTs: NFTs;
    /**
     * All Edition's Read functions
     */
    public functionsRead: FunctionsRead;
    /**
     * All Edition's Write functions
     */
    public functionsWrite: FunctionsWrite;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create();
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: props?.security,
            serverURL: serverURL,
            retryConfig: props?.retryConfig,
        });

        this.customers = new Customers(this.sdkConfiguration);
        this.nfTs = new NFTs(this.sdkConfiguration);
        this.functionsRead = new FunctionsRead(this.sdkConfiguration);
        this.functionsWrite = new FunctionsWrite(this.sdkConfiguration);
    }
}
