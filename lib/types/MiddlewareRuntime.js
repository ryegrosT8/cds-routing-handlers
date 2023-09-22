"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiddlewareRuntime = void 0;
/**
 * Middleware runtime.
 *
 * @export
 * @enum {number}
 */
var MiddlewareRuntime;
(function (MiddlewareRuntime) {
    MiddlewareRuntime[MiddlewareRuntime["Normal"] = 0] = "Normal";
    /**
     * @deprecated: not available since @sap/cds > 3.31.2
     */
    MiddlewareRuntime[MiddlewareRuntime["BeforeDefaults"] = 1] = "BeforeDefaults";
    /**
     * @deprecated: not available since @sap/cds > 3.31.2
     */
    MiddlewareRuntime[MiddlewareRuntime["AfterDefaults"] = 2] = "AfterDefaults";
})(MiddlewareRuntime = exports.MiddlewareRuntime || (exports.MiddlewareRuntime = {}));
//# sourceMappingURL=MiddlewareRuntime.js.map