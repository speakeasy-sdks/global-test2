/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { classToPlain, Exclude, Expose } from "class-transformer";

/**
 * Unauthorized!
 */
export class EditionSubscribeToRegistry401ApplicationJSON extends Error {
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

    constructor(err?: EditionSubscribeToRegistry401ApplicationJSON) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "EditionSubscribeToRegistry401ApplicationJSON";
        Object.setPrototypeOf(this, EditionSubscribeToRegistry401ApplicationJSON.prototype);
    }
}
