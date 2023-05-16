import { HandlerMetadata } from "../metadata/HandlerMetadata";
import { MiddlewareMetadata } from "../metadata/MiddlewareMetadata";
/**
 * Metadata builder.
 *
 * @export
 * @class MetadataBuilder
 */
export declare class MetadataBuilder {
    /**
     * Builds handler metadata for a given set of handler classes.
     *
     * @param {Function[]} [classes] Handler classes
     * @returns {MiddlewareMetadata[]} Build handler metadata
     * @memberof MetadataBuilder
     */
    buildHandlerMetadata(classes?: Function[], userChecker?: Function): HandlerMetadata[];
    /**
     * Builds middleware metadata for a given set of middleware classes.
     *
     * @param {Function[]} [classes] Middleware classes
     * @returns {MiddlewareMetadata[]} Buiild middleware metadata
     * @memberof MetadataBuilder
     */
    buildMiddlewareMetadata(classes?: Function[], userChecker?: Function): MiddlewareMetadata[];
    /**
     * Create handler metadata.
     *
     * @param {Function[]} [classes] Handler classes to build for
     * @returns {MiddlewareMetadata[]} Created handler metadata
     * @memberof MetadataBuilder
     */
    private createHandler;
    /**
     * Creates middleware metadata.
     *
     * @private
     * @param {Function[]} [classes] Middleware classes to build for
     * @returns {MiddlewareMetadata[]} Created middleware metadata
     * @memberof MetadataBuilder
     */
    private createMiddlewares;
    /**
     * Creates action metadata.
     *
     * @param {MiddlewareMetadata} handler Handler metadata
     * @returns {ActionMetadata[]} Created action metadata
     * @memberof MetadataBuilder
     */
    private createActions;
    /**
     * Creates a reject.
     *
     * @private
     * @param {ActionMetadata} action Action to create metadata for
     * @returns {(RejectMetadata | undefined)} Created rejection metadata
     * @memberof MetadataBuilder
     */
    private createReject;
    /**
     * Creates action parameters.
     *
     * @private
     * @param {ActionMetadata} action Action to create the parameters for
     * @returns {ParamMetadata[]} Created parameters
     * @memberof MetadataBuilder
     */
    private createParams;
    /**
     * Creates middleware paramters.
     *
     * @private
     * @param {MiddlewareMetadata} middleware Middleware to create parameters for
     * @returns {ParamMetadata[]} Created parameters
     * @memberof MetadataBuilder
     */
    private createMiddlewareParams;
    /**
     * Creates user checker parameters.
     *
     * @private
     * @param {UserCheckerMetadata} userchecker Middleware to create parameters for
     * @returns {ParamMetadata[]} Created parameters
     * @memberof MetadataBuilder
     */
    private createUserCheckerParams;
    /**
     * Creates a user checker.
     *
     * @private
     * @param {(IUserCheckerMetadataArgs | undefined)} userCheckerArg User checker metadata arguments
     * @returns {(UserCheckerMetadata | undefined)} Creates user checker
     * @memberof MetadataBuilder
     */
    private createUserChecker;
}
