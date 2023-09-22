"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Param = void 0;
var index_1 = require("../../index");
var ParamType_1 = require("../../types/ParamType");
/**
 * Param parameter decorator.
 *
 * @export
 * @param {string} name Name of the parameter
 * @returns {ParameterDecorator}
 */
function Param(name) {
    return function (target, key, index) {
        (0, index_1.getMetadataArgsStorage)().addParamMetadata({
            object: target,
            method: key,
            index: index,
            type: ParamType_1.ParamType.Param,
            name: name,
        });
    };
}
exports.Param = Param;
//# sourceMappingURL=Param.js.map
