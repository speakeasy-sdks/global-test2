/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class EditionSubscribeToRegistryRequestBody extends SpeakeasyBase {}

export class EditionSubscribeToRegistryRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: EditionSubscribeToRegistryRequestBody;

    /**
     * Template id
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=template" })
    template: string;
}

export class EditionSubscribeToRegistryResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Transaction submitted on chain!
     */
    @SpeakeasyMetadata()
    editionSubscribeToRegistry200ApplicationJSONString?: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
