"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AfterCancel = exports.OnCancel = exports.BeforeCancel = void 0;
var index_1 = require("../../index");
var ODataOperation_1 = require("../../types/ODataOperation");
var HandlerType_1 = require("../../types/HandlerType");
/**
 * Before delete handler decorator.
 *
 * @export
 * @returns {MethodDecorator}
 */
function BeforeCancel() {
    return function (target, key, descriptor) {
        (0, index_1.getMetadataArgsStorage)().addActionMetadata({
            target: target.constructor,
            method: key,
            handler: HandlerType_1.HandlerType.Before,
            operation: ODataOperation_1.ODataOperation.Cancel,
        });
    };
}
exports.BeforeCancel = BeforeCancel;
/**
 * On delete handler decorator.
 *
 * @export
 * @returns {MethodDecorator}
 */
function OnCancel() {
    return function (target, key, descriptor) {
        (0, index_1.getMetadataArgsStorage)().addActionMetadata({
            target: target.constructor,
            method: key,
            handler: HandlerType_1.HandlerType.On,
            operation: ODataOperation_1.ODataOperation.Cancel,
        });
    };
}
exports.OnCancel = OnCancel;
/**
 * After delete handler decorator.
 *
 * @export
 * @returns {MethodDecorator}
 */
function AfterCancel() {
    return function (target, key, descriptor) {
        (0, index_1.getMetadataArgsStorage)().addActionMetadata({
            target: target.constructor,
            method: key,
            handler: HandlerType_1.HandlerType.After,
            operation: ODataOperation_1.ODataOperation.Cancel,
        });
    };
}
exports.AfterCancel = AfterCancel;
//# sourceMappingURL=Cancel.js.map
