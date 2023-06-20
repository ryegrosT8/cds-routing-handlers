"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Func = void 0;
var index_1 = require("../../index");
var HandlerType_1 = require("../../types/HandlerType");
var ODataOperation_1 = require("../../types/ODataOperation");
/**
 * Function handler decorator.
 *
 * @export
 * @param {string} name Name of the function
 * @returns {MethodDecorator}
 */
function Func(name) {
    return function (target, key, descriptor) {
        (0, index_1.getMetadataArgsStorage)().addActionMetadata({
            target: target.constructor,
            method: key,
            handler: HandlerType_1.HandlerType.On,
            operation: ODataOperation_1.ODataOperation.Function,
            functionImportName: name,
        });
    };
}
exports.Func = Func;
//# sourceMappingURL=Func.js.map