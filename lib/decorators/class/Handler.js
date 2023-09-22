"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Handler = void 0;
var index_1 = require("../../index");
/**
 * Handler decorator.
 *
 * @export
 * @param {string} entity Entity for which the decorator is used
 * @returns {ClassDecorator}
 */
function Handler(entity) {
    return function (target) {
        (0, index_1.getMetadataArgsStorage)().addHandlerMetadata({ target: target, entity: entity });
    };
}
exports.Handler = Handler;
//# sourceMappingURL=Handler.js.map
