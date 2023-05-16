"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Middleware = void 0;
var index_1 = require("../../index");
var MiddlewareRuntime_1 = require("../../types/MiddlewareRuntime");
/**
 * Middleware decorator.
 *
 * @export
 * @param {IMiddlewareOptions} [options] Middleware options, should only be used for global middlewares
 * @returns {ClassDecorator}
 */
function Middleware(options) {
    return function (target) {
        var global = options ? options.global || false : false;
        var priority = options ? options.priority || 99 : 99;
        var runtime = options
            ? options.runtime || MiddlewareRuntime_1.MiddlewareRuntime.Normal
            : MiddlewareRuntime_1.MiddlewareRuntime.Normal;
        (0, index_1.getMetadataArgsStorage)().addMiddlewareMetadata({
            target: target,
            global: global,
            priority: priority,
            runtime: runtime,
        });
    };
}
exports.Middleware = Middleware;
//# sourceMappingURL=Middleware.js.map
