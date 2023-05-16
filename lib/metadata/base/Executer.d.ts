import { ParamMetadata } from "../ParamMetadata";
import { IExecContext } from "../../types/IExecContext";
import { UserCheckerMetadata } from "../UserCheckerMetadata";
/**
 * Abstract executer class.
 *
 * Contains utils to build the necessary paramter list.
 *
 * @export
 * @abstract
 * @class Executer
 */
export declare abstract class Executor {
    /**
     * Abstract exec method, to be implemented in the child class.
     *
     * @protected
     * @abstract
     * @param {IExecContext} context Execution context to act on
     * @returns {*} Result
     * @memberof Executer
     */
    abstract exec(context: IExecContext): any;
    /**
     * Builds a paramter list out of all definied parameter decorators.
     *
     * @protected
     * @param {ParamMetadata[]} params Parameter metadata to build the list for
     * @param {IExecContext} context Execution context
     * @returns
     * @memberof Executer
     */
    protected buildParams(params: ParamMetadata[], context: IExecContext, userChecker?: UserCheckerMetadata): any[];
    /**
     * Retrieves the JWT token from a given request context object.
     * Try to get token with some fallback strategys.
     * @private
     * @param {*} req Request object to read the JWT token from
     * @returns {(string | undefined)} JWT token
     * @memberof ActionMetadata
     */
    private extractJwt;
    /**
     * Reads a parameter from the request data object.
     *
     * @protected
     * @param {ParamMetadata} param Parameter to read from the object
     * @param {*} req Incoming CDS request
     * @returns {*} Builds parameter
     * @memberof Executer
     */
    protected namedParam(param: ParamMetadata, req: any): any;
}
