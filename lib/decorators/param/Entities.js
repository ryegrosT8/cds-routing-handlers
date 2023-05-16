"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entities = void 0;
var index_1 = require("../../index");
var ParamType_1 = require("../../types/ParamType");
/**
 * Entities parameter decorator.
 *
 * @export
 * @returns {ParameterDecorator}
 */
function Entities() {
    return function (target, key, index) {
        (0, index_1.getMetadataArgsStorage)().addParamMetadata({
            object: target,
            method: key,
            index: index,
            type: ParamType_1.ParamType.Entities,
        });
    };
}
exports.Entities = Entities;
//# sourceMappingURL=Entities.js.map
