import { IRejectMetadataArgs } from "./args/IRejectMetadataArgs";
/**
 * Rejection metadata.
 *
 * @export
 * @class RejectMetadata
 */
export declare class RejectMetadata {
    /**
     * Target: JS function of the handler class method.
     *
     * @type {Function}
     * @memberof IRejectMetadataArgs
     */
    private _target;
    /**
     * Method name.
     *
     * @type {string}
     * @memberof IRejectMetadataArgs
     */
    private _method;
    /**
     * HTTP Response code.
     *
     * @type {number}
     * @memberof IRejectMetadataArgs
     */
    private _code;
    /**
     * Response message.
     *
     * @type {string}
     * @memberof IRejectMetadataArgs
     */
    private _message;
    /**
     * Flag, whether the JS error message should be appended.
     *
     * @type {boolean}
     * @memberof RejectMetadata
     */
    private _appendErrorMessage;
    /**
     * HTTP Response code.
     *
     * @readonly
     * @type {number}
     * @memberof RejectMetadata
     */
    get code(): number;
    /**
     * Response message.
     *
     * @readonly
     * @type {string}
     * @memberof RejectMetadata
     */
    get message(): string;
    /**
     * Flag, whether the JS error message should be appended.
     *
     * @readonly
     * @type {boolean}
     * @memberof RejectMetadata
     */
    get appendErrorMessage(): boolean;
    /**
     * Default constructor.
     *
     * @param {IRejectMetadataArgs} args Metadata arguments
     * @memberof RejectMetadata
     */
    constructor(args: IRejectMetadataArgs);
}
