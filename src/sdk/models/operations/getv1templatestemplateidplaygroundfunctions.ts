/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class GetV1TemplatesTemplateIdPlaygroundFunctionsRequest extends SpeakeasyBase {
    /**
     * The ID of the template.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=template_id" })
    templateId: string;
}

export class GetV1TemplatesTemplateIdPlaygroundFunctionsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
