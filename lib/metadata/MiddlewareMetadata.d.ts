import { ParamMetadata } from "./ParamMetadata";
import { MiddlewareRuntime } from "../index";
import { ICdsMiddleware } from "../types/ICdsMiddleware";
import { IMiddlewareMetadataArgs } from "./args/IMiddlewareMetadataArgs";
import { Executor } from "./base/Executer";
import { IExecContext } from "../types/IExecContext";
import { UserCheckerMetadata } from "./UserCheckerMetadata";
/**
 * Middleware metadata and executer.
 *
 * @export
 * @class MiddlewareMetadata
 */
export declare class MiddlewareMetadata extends Executor {
    /**
     * Target: Typescript class.
     *
     * @type {Function}
     * @memberof MiddlewareMetadata
     */
    private _target;
    /**
     * Flag, whether this middleware is a global one.
     *
     * @type {boolean}
     * @memberof MiddlewareMetadata
     */
    private _global;
    /**
     * Priority of a global middleware.
     *
     * @type {number}
     * @memberof MiddlewareMetadata
     */
    private _priority;
    /**
     * Middleware runtime.
     *
     * @private
     * @type {MiddlewareRuntime}
     * @memberof MiddlewareMetadata
     */
    private _runtime;
    /**
     * Entities on which to apply the middleware.
     *
     * @type {string}
     * @memberof MiddlewareMetadata
     */
    private _entities?;
    /**
     * Middleware parameters.
     *
     * @type {ParamMetadata[]}
     * @memberof MiddlewareMetadata
     */
    private _params;
    /**
     * User checker.
     *
     * @private
     * @type {UserCheckerMetadata}
     * @memberof MiddlewareMetadata
     */
    private _userChecker?;
    /**
     * Target: Typescript class.
     *
     * @readonly
     * @type {Function}
     * @memberof MiddlewareMetadata
     */
    get target(): Function;
    /**
     * Flag, whether this middleware is a global one.
     *
     * @readonly
     * @type {boolean}
     * @memberof MiddlewareMetadata
     */
    get global(): boolean;
    /**
     * Priority of a global middleware.
     *
     * @readonly
     * @type {number}
     * @memberof MiddlewareMetadata
     */
    get priority(): number;
    /**
     * Middleware runtime.
     *
     * @readonly
     * @type {(MiddlewareRuntime | undefined)}
     * @memberof MiddlewareMetadata
     */
    get runtime(): MiddlewareRuntime;
    /**
     * Entities on which to apply the middleware.
     *
     * @type {string[]}
     * @memberof MiddlewareMetadata
     */
    get entities(): string[] | undefined;
    /**
     * Middleware parameters.
     *
     * @memberof MiddlewareMetadata
     */
    set params(value: ParamMetadata[]);
    /**
     * Entities on which to apply the middleware.
     *
     * @memberof MiddlewareMetadata
     */
    set entities(value: string[] | undefined);
    /**
     * User checker.
     *
     * @memberof MiddlewareMetadata
     */
    set userChecker(value: UserCheckerMetadata | undefined);
    /**
     * Returns the instance of the middleware target.
     *
     * @readonly
     * @type {ICdsMiddleware}
     * @memberof MiddlewareMetadata
     */
    get instance(): ICdsMiddleware;
    /**
     * Default constructor.
     *
     * @param {IMiddlewareMetadataArgs} args Middleware metadata arguments
     * @memberof MiddlewareMetadata
     */
    constructor(args: IMiddlewareMetadataArgs);
    /**
     * Executes the middleware.
     *
     * @param {IExecContext} context Execution context
     * @returns {*} Execution result
     * @memberof MiddlewareMetadata
     */
    exec(context: IExecContext): any;
}
