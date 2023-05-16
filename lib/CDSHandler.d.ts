import { IRegisterOptions } from "./types/IRegisterOptions";
/**
 * CDS Handler.
 *
 * @export
 * @class CDSHandler
 */
export declare class CDSHandler {
    /**
     * Registers all handlers and middlewares on the given service.
     *
     * @static
     * @param {*} srv Service to register the handlers on
     * @param {Function[]} handlerClasses Handler classes
     * @param {Function[]} middlewareClasses Middleware classes
     * @memberof CDSHandler
     */
    static register(srv: any, options: IRegisterOptions): void;
    /**
     * Registers all middleware classes.
     *
     * @private
     * @static
     * @param {MetadataBuilder} metadataBuilder Metadata builder
     * @param {*} srv Service to register the handlers to
     * @param {Function[]} middlewareClasses Middleware classes
     * @memberof CDSHandler
     */
    private static registerMiddlewareClasses;
    /**
     * Register all handler classes.
     *
     * @private
     * @static
     * @param {MetadataBuilder} metadataBuilder Metadata builder
     * @param {*} srv Service to register the handlers to
     * @param {Function[]} handlerClasses Handler classes
     * @memberof CDSHandler
     */
    private static registerHandlerClasses;
    /**
     * Registers before handler.
     *
     * @private
     * @static
     * @param {*} srv Service to register to
     * @param {ActionMetadata} action Action to register
     * @memberof CDSHandler
     */
    private static registerBeforeHandler;
    /**
     * Registers on handler.
     *
     * @private
     * @static
     * @param {*} srv Service to register to
     * @param {ActionMetadata} action Action to register
     * @memberof CDSHandler
     */
    private static registerOnHandler;
    /**
     * Registers after handler.
     *
     * @private
     * @static
     * @param {*} srv Service to register to
     * @param {ActionMetadata} action Action to register
     * @memberof CDSHandler
     */
    private static registerAfterHandler;
    /**
     * Registers function import handler.
     *
     * @private
     * @static
     * @param {*} srv Service to register to
     * @param {ActionMetadata} action Action to register
     * @memberof CDSHandler
     */
    private static registerFunctionImportHandler;
    /**
     * Registers a middleware with CDS.
     *
     * @private
     * @static
     * @param {*} srv Service to register to
     * @param {MiddlewareMetadata} middleware Middleware to register
     * @memberof CDSHandler
     */
    private static registerMiddleware;
    /**
     * Creates a execution context.
     *
     * @private
     * @static
     * @param {*} srv CDS service
     * @param {*} req Incoming CDS request
     * @param {(Function | undefined)} next Next handler function
     * @param {(any[] | any)} [e] Entities on a after handler
     * @returns {IExecContext}
     * @memberof CDSHandler
     */
    private static createExecutionContext;
}
