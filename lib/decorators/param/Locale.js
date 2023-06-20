"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Locale = void 0;
var index_1 = require("../../index");
var ParamType_1 = require("../../types/ParamType");
/**
 * Locale parameter decorator.
 *
 * @export
 * @returns {ParameterDecorator}
 */
function Locale() {
    return function (target, key, index) {
        (0, index_1.getMetadataArgsStorage)().addParamMetadata({
            object: target,
            method: key,
            index: index,
            type: ParamType_1.ParamType.Locale,
        });
    };
}
exports.Locale = Locale;
//# sourceMappingURL=Locale.js.map