"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AfterRead = exports.OnRead = exports.BeforeRead = void 0;
var index_1 = require("../../index");
var HandlerType_1 = require("../../types/HandlerType");
var ODataOperation_1 = require("../../types/ODataOperation");
/**
 * Before read handler decorator.
 *
 * @export
 * @returns {MethodDecorator}
 */
function BeforeRead() {
    return function (target, key, descriptor) {
        (0, index_1.getMetadataArgsStorage)().addActionMetadata({
            target: target.constructor,
            method: key,
            handler: HandlerType_1.HandlerType.Before,
            operation: ODataOperation_1.ODataOperation.Read,
        });
    };
}
exports.BeforeRead = BeforeRead;
/**
 * On read handler decorator.
 *
 * @export
 * @returns {MethodDecorator}
 */
function OnRead() {
    return function (target, key, descriptor) {
        (0, index_1.getMetadataArgsStorage)().addActionMetadata({
            target: target.constructor,
            method: key,
            handler: HandlerType_1.HandlerType.On,
            operation: ODataOperation_1.ODataOperation.Read,
        });
    };
}
exports.OnRead = OnRead;
/**
 * After read handler decorator.
 *
 * @export
 * @returns {MethodDecorator}
 */
function AfterRead() {
    return function (target, key, descriptor) {
        (0, index_1.getMetadataArgsStorage)().addActionMetadata({
            target: target.constructor,
            method: key,
            handler: HandlerType_1.HandlerType.After,
            operation: ODataOperation_1.ODataOperation.Read,
        });
    };
}
exports.AfterRead = AfterRead;
//# sourceMappingURL=Read.js.map