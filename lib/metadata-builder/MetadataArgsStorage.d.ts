import { IHandlerMetadataArgs } from "../metadata/args/IHandlerMetadataArgs";
import { IActionMetadataArgs } from "../metadata/args/IActionMetadataArgs";
import { IRejectMetadataArgs } from "../metadata/args/IRejectMetadataArgs";
import { IParamMetadataArgs } from "../metadata/args/IParamMetadataArgs";
import { IUseMetadataArgs } from "../metadata/args/IUseMetadataArgs";
import { IMiddlewareMetadataArgs } from "../metadata/args/IMiddlewareMetadataArgs";
import { IUserCheckerMetadataArgs } from "../metadata/args/IUserCheckerMetadataArgs";
/**
 * Metadata arguments storage.
 *
 * @export
 * @class MetadataArgsStorage
 */
export declare class MetadataArgsStorage {
    /**
     * Handler metadata arguments.
     *
     * @private
     * @type {IHandlerMetadataArgs[]}
     * @memberof MetadataArgsStorage
     */
    private handler;
    /**
     * Middleware metadata arguments.
     *
     * @private
     * @type {IMiddlewareMetadataArgs[]}
     * @memberof MetadataArgsStorage
     */
    private middlewares;
    /**
     * Registerd middleware usage metadata args.
     *
     * @private
     * @type {IUseMetadataArgs[]}
     * @memberof MetadataArgsStorage
     */
    private uses;
    /**
     * Action metadata arguments.
     *
     * @private
     * @type {IActionMetadataArgs[]}
     * @memberof MetadataArgsStorage
     */
    private actions;
    /**
     * Reject metadata arguments.
     *
     * @private
     * @type {IRejectMetadataArgs[]}
     * @memberof MetadataArgsStorage
     */
    private rejects;
    /**
     * Parameter metadata arguments.
     *
     * @private
     * @type {IParamMetadataArgs[]}
     * @memberof MetadataArgsStorage
     */
    private params;
    /**
     * User checker metadata arguments.
     *
     * @private
     * @type {IUserCheckerMetadataArgs}
     * @memberof MetadataArgsStorage
     */
    private userChecker;
    /**
     * Handler metadata.
     *
     * @readonly
     * @type {IHandlerMetadataArgs[]}
     * @memberof MetadataArgsStorage
     */
    get handlerMetadata(): IHandlerMetadataArgs[];
    /**
     * Middleware metadata.
     *
     * @readonly
     * @type {IMiddlewareMetadataArgs[]}
     * @memberof MetadataArgsStorage
     */
    get middlewareMetadata(): IMiddlewareMetadataArgs[];
    /**
     * Adds handler metadata.
     *
     * @param {IHandlerMetadataArgs} metadata Metadata arguments
     * @memberof MetadataArgsStorage
     */
    addHandlerMetadata(metadata: IHandlerMetadataArgs): void;
    /**
     * Adds middleware metadata.
     *
     * @param {IMiddlewareMetadataArgs} metadata Metadata arguments
     * @memberof MetadataArgsStorage
     */
    addMiddlewareMetadata(metadata: IMiddlewareMetadataArgs): void;
    /**
     * Adds a middleware usage metadata.
     *
     * @param {IUseMetadataArgs} metadata Metadata arguments
     * @memberof MetadataArgsStorage
     */
    addUseMetadata(metadata: IUseMetadataArgs): void;
    /**
     * Adds action metadata.
     *
     * @param {IActionMetadataArgs} metadata Metadata arguments
     * @memberof MetadataArgsStorage
     */
    addActionMetadata(metadata: IActionMetadataArgs): void;
    /**
     * Adds reject metadata.
     *
     * @param {IRejectMetadataArgs} metadata Metadata arguements
     * @memberof MetadataArgsStorage
     */
    addRejectMetadata(metadata: IRejectMetadataArgs): void;
    /**
     * Adds parameter metadata.
     *
     * @param {IParamMetadataArgs} metadata Metadata arguments
     * @memberof MetadataArgsStorage
     */
    addParamMetadata(metadata: IParamMetadataArgs): void;
    /**
     * Adds user checker metadata.
     *
     * @param {IUserCheckerMetadataArgs} metadata Metadata arguments
     * @memberof MetadataArgsStorage
     */
    addUserCheckerMetadata(metadata: IUserCheckerMetadataArgs): void;
    /**
     * Filters handler metadata for given classes.
     *
     * @param {Function[]} classes Handler classes
     * @returns {IHandlerMetadataArgs[]} Filtered handler metadata
     * @memberof MetadataArgsStorage
     */
    filterHandlerMetadataForClasses(classes: Function[]): IHandlerMetadataArgs[];
    /**
     * Filters middleware metadata for given classes.
     *
     * @param {Function} classes Middleware classes
     * @returns {IMiddlewareMetadataArgs[]} Filtered middleware metadata
     * @memberof MetadataArgsStorage
     */
    filterMiddlewareMetadataForClasses(classes: Function[]): IMiddlewareMetadataArgs[];
    /**
     * Filters registerd middleware usages for a given middleware.
     *
     * @param {Function} middleware Middleware to filter for
     * @returns {IUseMetadataArgs[]} Filterd usage metadata
     * @memberof MetadataArgsStorage
     */
    filterUsesWithMiddleware(middleware: Function): IUseMetadataArgs[];
    /**
     * Filters action metadata for given target.
     *
     * @param {Function} target Target of the action
     * @returns {IActionMetadataArgs[]} Filtered action metadata
     * @memberof MetadataArgsStorage
     */
    filterActionsWithTarget(target: Function): IActionMetadataArgs[];
    /**
     * Filters reject metadata for given target and method.
     *
     * @param {Function} target Target of the reject
     * @param {string} method Method of the reject
     * @returns {IRejectMetadataArgs}
     * @memberof MetadataArgsStorage
     */
    filterRejectWithTargetAndMethod(target: Function, method: string): IRejectMetadataArgs | undefined;
    /**
     * Filters parameter metadata for a given target and method.
     *
     * @param {Function} target Target of the parameter
     * @param {string} method Method of the parameter
     * @returns {IParamMetadataArgs[]}
     * @memberof MetadataArgsStorage
     */
    filterParamsWithTargetAndMethod(target: Function, method: string): IParamMetadataArgs[];
    /**
     * Finds a user checker for a given target.
     *
     * @param {Function} target Target to find for
     * @returns {(IUserCheckerMetadataArgs | undefined)} Found user checker
     * @memberof MetadataArgsStorage
     */
    findUserCheckerWithTarget(target: Function | undefined): IUserCheckerMetadataArgs | undefined;
    /**
     * Resets the storage.
     *
     * @memberof MetadataArgsStorage
     */
    reset(): void;
}
