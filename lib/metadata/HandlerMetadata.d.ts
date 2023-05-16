import { IHandlerMetadataArgs } from "./args/IHandlerMetadataArgs";
import { ActionMetadata } from "./ActionMetadata";
/**
 * Handler metadata.
 *
 * @export
 * @class HandlerMetadata
 */
export declare class HandlerMetadata {
    /**
     * Target: Typescript class.
     *
     * @type {Function}
     * @memberof HandlerMetadata
     */
    private _target;
    /**
     * Entity for which the handler is registerd.
     *
     * @type {string}
     * @memberof HandlerMetadata
     */
    private _entity?;
    /**
     * Actions metadata.
     *
     * @type {ActionMetadata[]}
     * @memberof HandlerMetadata
     */
    private _actions;
    /**
     * Target: Typescript class.
     *
     * @readonly
     * @type {Function}
     * @memberof HandlerMetadata
     */
    get target(): Function;
    /**
     * Entity for which the handler is registerd.
     *
     * @readonly
     * @type {(string | undefined)}
     * @memberof HandlerMetadata
     */
    get entity(): string | undefined;
    /**
     * Returns a instance of the handler.
     *
     * @readonly
     * @type {*} Instance of the handler class
     * @memberof HandlerMetadata
     */
    get instance(): any;
    /**
     * Actions metadata.
     *
     * @type {ActionMetadata[]}
     * @memberof HandlerMetadata
     */
    get actions(): ActionMetadata[];
    /**
     * Actions metadata.
     *
     * @memberof HandlerMetadata
     */
    set actions(value: ActionMetadata[]);
    /**
     * Default constructor.
     *
     * @param {IHandlerMetadataArgs} args Metadata arguments
     * @memberof HandlerMetadata
     */
    constructor(args: IHandlerMetadataArgs);
}
