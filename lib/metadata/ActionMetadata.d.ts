import { IActionMetadataArgs } from "./args/IActionMetadataArgs";
import { HandlerMetadata } from "./HandlerMetadata";
import { RejectMetadata } from "./RejectMetadata";
import { ParamMetadata } from "./ParamMetadata";
import { HandlerType } from "../types/HandlerType";
import { ODataOperation } from "../types/ODataOperation";
import { Executor } from "./base/Executer";
import { IExecContext } from "../types/IExecContext";
import { UserCheckerMetadata } from "./UserCheckerMetadata";
/**
 * Action metadata and executer.
 *
 * @export
 * @class ActionMetadata
 */
export declare class ActionMetadata extends Executor {
    /**
     * Parent handler metadata.
     *
     * @type {HandlerMetadata}
     * @memberof ActionMetadata
     */
    private _handlerMetadata;
    /**
     * Target: Method on the handler class.
     *
     * @type {Function}
     * @memberof ActionMetadata
     */
    private _target;
    /**
     * Action method on the handler class.
     *
     * @type {string}
     * @memberof ActionMetadata
     */
    private _method;
    /**
     * Entity on which the action acts.
     *
     * @type {string}
     * @memberof ActionMetadata
     */
    private _entity?;
    /**
     * Handler type.
     *
     * @type {HandlerType}
     * @memberof ActionMetadata
     */
    private _handler;
    /**
     * Operation type.
     *
     * @type {ODataOperation}
     * @memberof ActionMetadata
     */
    private _operation;
    /**
     * Function import name.
     *
     * @type {string}
     * @memberof ActionMetadata
     */
    private _functionImportName?;
    /**
     * Reject metadata.
     *
     * @type {RejectMetadata}
     * @memberof ActionMetadata
     */
    private _reject?;
    /**
     * Parameter metadata.
     *
     * @type {ParamMetadata[]}
     * @memberof ActionMetadata
     */
    private _params;
    /**
     * User checker.
     *
     * @private
     * @type {UserCheckerMetadata}
     * @memberof ActionMetadata
     */
    private _userChecker?;
    /**
     * Target: Method on the handler class.
     *
     * @readonly
     * @type {Function}
     * @memberof ActionMetadata
     */
    get target(): Function;
    /**
     * Action method on the handler class.
     *
     * @readonly
     * @type {string}
     * @memberof ActionMetadata
     */
    get method(): string;
    /**
     * Handler type.
     *
     * @readonly
     * @type {HandlerType}
     * @memberof ActionMetadata
     */
    get handler(): HandlerType;
    /**
     * Operation type.
     *
     * @readonly
     * @type {ODataOperation}
     * @memberof ActionMetadata
     */
    get operation(): ODataOperation;
    /**
     * Entity on which the action acts.
     *
     * @readonly
     * @type {string}
     * @memberof ActionMetadata
     */
    get entity(): string | undefined;
    /**
     * Function import name.
     *
     * @readonly
     * @type {(string | undefined)}
     * @memberof ActionMetadata
     */
    get functionImportName(): string | undefined;
    /**
     * Reject metadata.
     *
     * @memberof ActionMetadata
     */
    set reject(value: RejectMetadata | undefined);
    /**
     * Parameter metadata.
     *
     * @memberof ActionMetadata
     */
    set params(value: ParamMetadata[]);
    /**
     * User checker.
     *
     * @memberof ActionMetadata
     */
    set userChecker(value: UserCheckerMetadata | undefined);
    /**
     * Default constructor.
     *
     * @param {HandlerMetadata} handlerMetadata Handler metadata
     * @param {IActionMetadataArgs} args Action metadata arguments
     * @memberof ActionMetadata
     */
    constructor(handlerMetadata: HandlerMetadata, args: IActionMetadataArgs);
    /**
     * Executs the action.
     *
     * @protected
     * @param {IExecContext} context Execution context
     * @returns {*} Execution result
     * @memberof ActionMetadata
     */
    exec(context: IExecContext): any;
}
