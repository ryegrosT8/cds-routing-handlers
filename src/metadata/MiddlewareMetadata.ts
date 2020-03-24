import ParamMetadata from "./ParamMetadata";
import { getFromContainer } from "../index";
import { ICdsMiddleware } from "../types/ICdsMiddleware";
import { IMiddlewareMetadataArgs } from "./args/IMiddlewareMetadataArgs";
import { Executer } from "./base/Executer";
import { IExecContext } from "../types/IExecContext";

/**
 *
 *
 * @export
 * @class MiddlewareMetadata
 */
export class MiddlewareMetadata extends Executer {
    /**
     *
     *
     * @type {Function}
     * @memberof MiddlewareMetadata
     */
    target: Function;

    /**
     *
     *
     * @type {boolean}
     * @memberof MiddlewareMetadata
     */
    global: boolean;

    /**
     *
     *
     * @type {number}
     * @memberof MiddlewareMetadata
     */
    priority: number;

    /**
     *
     *
     * @type {string}
     * @memberof MiddlewareMetadata
     */
    entities?: string[];

    /**
     *
     *
     * @type {ParamMetadata[]}
     * @memberof MiddlewareMetadata
     */
    params: ParamMetadata[] = [];

    /**
     *
     *
     * @readonly
     * @type {ICdsMiddleware}
     * @memberof MiddlewareMetadata
     */
    get instance(): ICdsMiddleware {
        return getFromContainer<ICdsMiddleware>(this.target);
    }

    /**
     * Default constructor.
     *
     * @param {IMiddlewareMetadataArgs} args
     * @memberof MiddlewareMetadata
     */
    constructor(args: IMiddlewareMetadataArgs) {
        super();

        this.global = args.global;
        this.target = args.target;
        this.priority = args.priority;
    }

    /**
     *
     *
     * @param {IExecContext} context
     * @returns {*}
     * @memberof MiddlewareMetadata
     */
    public exec(context: IExecContext): any {
        const instance = this.instance;
        const params = this.buildParams(this.params, context);

        if (instance["use"]) {
            return instance["use"].apply(instance, params);
        }
    }
}
