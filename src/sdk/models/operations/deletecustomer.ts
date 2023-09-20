/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class DeleteCustomerRequest extends SpeakeasyBase {
    /**
     * Customer id
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer" })
    customer: string;
}

export class DeleteCustomerResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
