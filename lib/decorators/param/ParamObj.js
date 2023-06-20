"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParamObj = void 0;
var index_1 = require("../../index");
var ParamType_1 = require("../../types/ParamType");
/**
 * Param object parameter decorator.
 *
 * @export
 * @returns {ParameterDecorator}
 */
function ParamObj() {
    return function (target, key, index) {
        (0, index_1.getMetadataArgsStorage)().addParamMetadata({
            object: target,
            method: key,
            index: index,
            type: ParamType_1.ParamType.ParamObj,
        });
    };
}
exports.ParamObj = ParamObj;
//# sourceMappingURL=ParamObj.js.map