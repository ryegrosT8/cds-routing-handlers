"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AfterCreate = exports.OnCreate = exports.BeforeCreate = void 0;
var index_1 = require("../../index");
var HandlerType_1 = require("../../types/HandlerType");
var ODataOperation_1 = require("../../types/ODataOperation");
/**
 * Before create handler decorator.
 *
 * @export
 * @returns {MethodDecorator}
 */
function BeforeCreate() {
    return function (target, key, descriptor) {
        (0, index_1.getMetadataArgsStorage)().addActionMetadata({
            target: target.constructor,
            method: key.toString(),
            handler: HandlerType_1.HandlerType.Before,
            operation: ODataOperation_1.ODataOperation.Create,
        });
    };
}
exports.BeforeCreate = BeforeCreate;
/**
 * On create handler decorator.
 *
 * @export
 * @returns {MethodDecorator}
 */
function OnCreate() {
    return function (target, key, descriptor) {
        (0, index_1.getMetadataArgsStorage)().addActionMetadata({
            target: target.constructor,
            method: key.toString(),
            handler: HandlerType_1.HandlerType.On,
            operation: ODataOperation_1.ODataOperation.Create,
        });
    };
}
exports.OnCreate = OnCreate;
/**
 * After create handler decorator.
 *
 * @export
 * @returns {MethodDecorator}
 */
function AfterCreate() {
    return function (target, key, descriptor) {
        (0, index_1.getMetadataArgsStorage)().addActionMetadata({
            target: target.constructor,
            method: key.toString(),
            handler: HandlerType_1.HandlerType.After,
            operation: ODataOperation_1.ODataOperation.Create,
        });
    };
}
exports.AfterCreate = AfterCreate;
//# sourceMappingURL=Create.js.map