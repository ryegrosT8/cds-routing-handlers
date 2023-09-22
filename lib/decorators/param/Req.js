"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Req = void 0;
var index_1 = require("../../index");
var ParamType_1 = require("../../types/ParamType");
/**
 * Request parameter decorator.
 *
 * @export
 * @returns {ParameterDecorator}
 */
function Req() {
    return function (target, key, index) {
        (0, index_1.getMetadataArgsStorage)().addParamMetadata({
            object: target,
            method: key,
            index: index,
            type: ParamType_1.ParamType.Req,
        });
    };
}
exports.Req = Req;
//# sourceMappingURL=Req.js.map