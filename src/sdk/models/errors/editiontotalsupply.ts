/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { classToPlain, Exclude, Expose } from "class-transformer";

/**
 * Unauthorized!
 */
export class EditionTotalSupplyResponseBody extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    @Exclude()
    rawResponse?: AxiosResponse;

    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    data?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "error_code" })
    errorCode?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message: string;

    @SpeakeasyMetadata()
    @Expose({ name: "status_code" })
    statusCode?: number;

    constructor(err?: EditionTotalSupplyResponseBody) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "EditionTotalSupplyResponseBody";
        Object.setPrototypeOf(this, EditionTotalSupplyResponseBody.prototype);
    }
}
