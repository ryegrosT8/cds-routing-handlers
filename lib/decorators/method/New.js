"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AfterNew = exports.OnNew = exports.BeforeNew = void 0;
var index_1 = require("../../index");
var HandlerType_1 = require("../../types/HandlerType");
var ODataOperation_1 = require("../../types/ODataOperation");
/**
 * Before new handler decorator.
 *
 * @export
 * @returns {MethodDecorator}
 */
function BeforeNew() {
    return function (target, key, descriptor) {
        (0, index_1.getMetadataArgsStorage)().addActionMetadata({
            target: target.constructor,
            method: key.toString(),
            handler: HandlerType_1.HandlerType.Before,
            operation: ODataOperation_1.ODataOperation.New,
        });
    };
}
exports.BeforeNew = BeforeNew;
/**
 * On new handler decorator.
 *
 * @export
 * @returns {MethodDecorator}
 */
function OnNew() {
    return function (target, key, descriptor) {
        (0, index_1.getMetadataArgsStorage)().addActionMetadata({
            target: target.constructor,
            method: key.toString(),
            handler: HandlerType_1.HandlerType.On,
            operation: ODataOperation_1.ODataOperation.New,
        });
    };
}
exports.OnNew = OnNew;
/**
 * After new handler decorator.
 *
 * @export
 * @returns {MethodDecorator}
 */
function AfterNew() {
    return function (target, key, descriptor) {
        (0, index_1.getMetadataArgsStorage)().addActionMetadata({
            target: target.constructor,
            method: key.toString(),
            handler: HandlerType_1.HandlerType.After,
            operation: ODataOperation_1.ODataOperation.New,
        });
    };
}
exports.AfterNew = AfterNew;
//# sourceMappingURL=New.js.map