import { ParamType } from "../types/ParamType";
import { IParamMetadataArgs } from "./args/IParamMetadataArgs";
/**
 * Parameter metadata.
 *
 * @export
 * @class ParamMetadata
 */
export declare class ParamMetadata {
    /**
     * Class object.
     *
     * @type {*}
     * @memberof ParamMetadata
     */
    private _object;
    /**
     * Target: JS function that represents the Typescript class.
     *
     * @type {Function}
     * @memberof ParamMetadata
     */
    private _target;
    /**
     * Method the parameter belongs to.
     *
     * @type {string}
     * @memberof ParamMetadata
     */
    private _method;
    /**
     * Index of the parameter.
     *
     * @type {number}
     * @memberof ParamMetadata
     */
    private _index;
    /**
     * Parameter type.
     *
     * @type {ParamType}
     * @memberof ParamMetadata
     */
    private _type;
    /**
     * Name of the parameter.
     *
     * @type {string}
     * @memberof ParamMetadata
     */
    private _name?;
    /**
     * Target type of the parameter.
     *
     * @type {*}
     * @memberof ParamMetadata
     */
    private _targetType?;
    /**
     * Name of the target class.
     *
     * @type {string}
     * @memberof ParamMetadata
     */
    private _targetName;
    /**
     * Flag, whether the target is a object.
     *
     * @type {boolean}
     * @memberof ParamMetadata
     */
    private _isTargetObject;
    /**
     * Parameter index.
     *
     * @readonly
     * @type {number}
     * @memberof ParamMetadata
     */
    get index(): number;
    /**
     * Parameter type.
     *
     * @readonly
     * @type {ParamType}
     * @memberof ParamMetadata
     */
    get type(): ParamType;
    /**
     * Name of the parameter.
     *
     * @readonly
     * @type {(string | undefined)}
     * @memberof ParamMetadata
     */
    get name(): string | undefined;
    /**
     * Default constructor.
     *
     * @param {ActionMetadata} actionMetadata Action metadata
     * @param {IParamMetadataArgs} args Parameter arguments
     * @memberof ParamMetadata
     */
    constructor(args: IParamMetadataArgs);
}
