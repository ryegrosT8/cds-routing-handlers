"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Use = void 0;
var index_1 = require("../../index");
/**
 * Middleware usage decorator.
 *
 * @export
 * @param {...Function[]} middlewares Middlewares to use
 * @returns {Function}
 */
function Use() {
    var middlewares = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        middlewares[_i] = arguments[_i];
    }
    return function (target) {
        middlewares.forEach(function (m) {
            (0, index_1.getMetadataArgsStorage)().addUseMetadata({ target: target, middleware: m });
        });
    };
}
exports.Use = Use;
//# sourceMappingURL=Use.js.map
