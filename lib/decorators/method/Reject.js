"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnReject = void 0;
var index_1 = require("../../index");
/**
 * Reject handler decorator.
 *
 * @export
 * @param {number} code HTTP response code
 * @param {string} message Response message
 * @returns {MethodDecorator}
 */
function OnReject(code, message, appendErrorMessage) {
    if (appendErrorMessage === void 0) { appendErrorMessage = false; }
    return function (target, key, descriptor) {
        (0, index_1.getMetadataArgsStorage)().addRejectMetadata({
            target: target.constructor,
            method: key,
            code: code,
            message: message,
            appendErrorMessage: appendErrorMessage,
        });
    };
}
exports.OnReject = OnReject;
//# sourceMappingURL=Reject.js.map