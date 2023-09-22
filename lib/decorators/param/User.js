"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var index_1 = require("../../index");
var ParamType_1 = require("../../types/ParamType");
/**
 * User parameter decorator.
 *
 * @export
 * @returns {ParameterDecorator}
 */
function User() {
    return function (target, key, index) {
        (0, index_1.getMetadataArgsStorage)().addParamMetadata({
            object: target,
            method: key,
            index: index,
            type: ParamType_1.ParamType.User,
        });
    };
}
exports.User = User;
//# sourceMappingURL=User.js.map