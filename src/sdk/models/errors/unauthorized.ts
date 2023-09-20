/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyMetadata } from "../../../internal/utils";
import { classToPlain, Expose, Type } from "class-transformer";

/**
 * Error Data
 */
export class UnauthorizedData extends Error {
    constructor(err?: UnauthorizedData) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "UnauthorizedData";
        Object.setPrototypeOf(this, UnauthorizedData.prototype);
    }
}

/**
 * Unauthorized Response
 */
export class Unauthorized extends Error {
    /**
     * Error Data
     */
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => UnauthorizedData)
    data?: UnauthorizedData;

    /**
     * Error Code
     */
    @SpeakeasyMetadata()
    @Expose({ name: "error_code" })
    errorCode?: string;

    /**
     * Message
     */
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message: string;

    /**
     * Status Code
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status_code" })
    statusCode?: number;

    constructor(err?: Unauthorized) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "Unauthorized";
        Object.setPrototypeOf(this, Unauthorized.prototype);
    }
}
