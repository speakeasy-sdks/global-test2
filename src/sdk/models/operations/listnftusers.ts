/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class ListNFTUsersRequest extends SpeakeasyBase {
    /**
     * Template id
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=template" })
    template: string;

    /**
     * Token id
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=token" })
    token: number;
}

export class ListNFTUsersResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;

    /**
     * Successful operation
     */
    @SpeakeasyMetadata({ elemType: shared.NFTUser })
    classes?: shared.NFTUser[];
}
