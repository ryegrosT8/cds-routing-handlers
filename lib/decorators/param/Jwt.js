"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jwt = void 0;
var index_1 = require("../../index");
var ParamType_1 = require("../../types/ParamType");
/**
 * JWT parameter decorator.
 *
 * @export
 * @returns {ParameterDecorator}
 */
function Jwt() {
    return function (target, key, index) {
        (0, index_1.getMetadataArgsStorage)().addParamMetadata({
            object: target,
            method: key,
            index: index,
            type: ParamType_1.ParamType.Jwt,
        });
    };
}
exports.Jwt = Jwt;
//# sourceMappingURL=Jwt.js.map