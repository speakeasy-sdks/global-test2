/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class PostV1UploadsRequestBodyFile extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "multipart_form, content=true" })
    content: Uint8Array;

    @SpeakeasyMetadata({ data: "multipart_form, name=file" })
    file: string;
}

export class PostV1UploadsRequestBody extends SpeakeasyBase {
    /**
     * Must be an image. Must not be greater than 5120 kilobytes.
     */
    @SpeakeasyMetadata({ data: "multipart_form, file=true" })
    file?: PostV1UploadsRequestBodyFile;

    @SpeakeasyMetadata({ data: "multipart_form, name=type" })
    type: string;
}

export class PostV1UploadsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}