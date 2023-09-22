"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Srv = void 0;
var index_1 = require("../../index");
var ParamType_1 = require("../../types/ParamType");
/**
 * Service parameter decorator.
 *
 * @export
 * @returns {ParameterDecorator}
 */
function Srv() {
    return function (target, key, index) {
        (0, index_1.getMetadataArgsStorage)().addParamMetadata({
            object: target,
            method: key,
            index: index,
            type: ParamType_1.ParamType.Srv,
        });
    };
}
exports.Srv = Srv;
//# sourceMappingURL=Srv.js.map
