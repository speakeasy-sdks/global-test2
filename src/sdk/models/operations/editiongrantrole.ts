/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class EditionGrantRoleRequestBody extends SpeakeasyBase {}

export class EditionGrantRoleRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: EditionGrantRoleRequestBody;

    /**
     * Template id
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=template" })
    template: string;
}

export class EditionGrantRoleResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Transaction submitted on chain!
     */
    @SpeakeasyMetadata()
    editionGrantRole200ApplicationJSONString?: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
