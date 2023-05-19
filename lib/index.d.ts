import { MetadataArgsStorage } from "./metadata-builder/MetadataArgsStorage";
import { ICdsRoutingHandlerOptions } from "./types/ICdsRoutingHandlerOptions";
export * from "./container";
export * from "./decorators/class/options/IMiddlewareOptions";
export * from "./decorators/class/Handler";
export * from "./decorators/class/Use";
export * from "./decorators/class/Middleware";
export * from "./decorators/class/UserChecker";
export * from "./decorators/method/Create";
export * from "./decorators/method/Read";
export * from "./decorators/method/Update";
export * from "./decorators/method/Delete";
export * from "./decorators/method/Reject";
export * from "./decorators/method/Func";
export * from "./decorators/method/Action";
export * from "./decorators/param/Srv";
export * from "./decorators/param/Req";
export * from "./decorators/param/ParamObj";
export * from "./decorators/param/Param";
export * from "./decorators/param/Jwt";
export * from "./decorators/param/Entities";
export * from "./decorators/param/Data";
export * from "./decorators/param/Next";
export * from "./decorators/param/Locale";
export * from "./decorators/param/User";
export * from "./types/ODataOperation";
export * from "./types/ICdsMiddleware";
export * from "./types/IUserChecker";
export * from "./types/ICdsRoutingHandlerOptions";
export * from "./types/MiddlewareRuntime";
export * from "./decorators/method/New";
export * from "./decorators/method/Edit";
export * from "./decorators/method/Patch";
export * from "./decorators/method/Save";
export * from "./decorators/method/Cancel";
/**
 * Returns the metadata arguments storage.
 *
 * @export
 * @returns {MetadataArgsStorage} Metadata arguments storage
 */
export declare function getMetadataArgsStorage(): MetadataArgsStorage;
/**
 * Create combined handler.
 *
 * @export
 * @param {(Function[] | string[])} handlers Handlers; either classes directly or the directories where the handlers reside
 * @returns {(srv: any) => void} Function that is used to register all endpoints
 */
export declare function createCombinedHandler(options: ICdsRoutingHandlerOptions): (srv: any) => void;
