import { IMiddlewareOptions } from "./options/IMiddlewareOptions";
/**
 * Middleware decorator.
 *
 * @export
 * @param {IMiddlewareOptions} [options] Middleware options, should only be used for global middlewares
 * @returns {ClassDecorator}
 */
export declare function Middleware(options?: IMiddlewareOptions): ClassDecorator;
