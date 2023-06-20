"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Next = void 0;
var index_1 = require("../../index");
var ParamType_1 = require("../../types/ParamType");
/**
 * Next handler parameter decorator.
 *
 * @export
 * @returns {ParameterDecorator}
 */
function Next() {
    return function (target, key, index) {
        (0, index_1.getMetadataArgsStorage)().addParamMetadata({
            object: target,
            method: key,
            index: index,
            type: ParamType_1.ParamType.Next,
        });
    };
}
exports.Next = Next;
//# sourceMappingURL=Next.js.map