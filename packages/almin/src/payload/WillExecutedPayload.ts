// LICENSE : MIT
"use strict";
import { Payload } from "./Payload";

/**
 *  XXX: This is exported for an unit testing.
 *  DO NOT USE THIS in your application.
 */
export const TYPE = "ALMIN__WILL_EXECUTED_EACH_USECASE__";

export class WillExecutedPayload extends Payload {
    /**
     * a array for argument of the useCase
     */
    args: Array<any>;

    constructor({ args = [] }: { args?: Array<any>; }) {
        super({ type: TYPE });
        this.args = args;
    }
}

export function isWillExecutedPayload(v: Payload): v is WillExecutedPayload {
    return v.type === TYPE;
}