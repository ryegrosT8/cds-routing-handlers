import { ParamMetadata } from "./ParamMetadata";
import { Executor } from "./base/Executer";
import { IExecContext } from "../types/IExecContext";
import { IUserChecker } from "../types/IUserChecker";
import { IUserCheckerMetadataArgs } from "./args/IUserCheckerMetadataArgs";
/**
 * Middleware metadata and executer.
 *
 * @export
 * @class UserCheckerMetadata
 */
export declare class UserCheckerMetadata extends Executor {
    /**
     * Target: Typescript class.
     *
     * @type {Function}
     * @memberof UserCheckerMetadata
     */
    private _target;
    /**
     * Middleware parameters.
     *
     * @type {ParamMetadata[]}
     * @memberof UserCheckerMetadata
     */
    private _params;
    /**
     * Target: Typescript class.
     *
     * @readonly
     * @type {Function}
     * @memberof UserCheckerMetadata
     */
    get target(): Function;
    /**
     * Middleware parameters.
     *
     * @memberof UserCheckerMetadata
     */
    set params(value: ParamMetadata[]);
    /**
     * Returns the instance of the middleware target.
     *
     * @readonly
     * @type {IUserChecker}
     * @memberof UserCheckerMetadata
     */
    get instance(): IUserChecker;
    /**
     * Default constructor.
     *
     * @param {IUserCheckerMetadataArgs} args User checker metadata arguments
     * @memberof UserCheckerMetadata
     */
    constructor(args: IUserCheckerMetadataArgs);
    /**
     * Executes the middleware.
     *
     * @param {IExecContext} context Execution context
     * @returns {*} Execution result
     * @memberof MiddlewareMetadata
     */
    exec(context: IExecContext): any;
}
