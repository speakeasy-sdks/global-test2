/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class EditionOwnerRequest extends SpeakeasyBase {
    /**
     * Template id
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=template" })
    template: string;
}

export class EditionOwnerResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Transaction submitted on chain!
     */
    @SpeakeasyMetadata()
    editionOwner200ApplicationJSONString?: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}