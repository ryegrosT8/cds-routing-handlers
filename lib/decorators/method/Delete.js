"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AfterDelete = exports.OnDelete = exports.BeforeDelete = void 0;
var index_1 = require("../../index");
var ODataOperation_1 = require("../../types/ODataOperation");
var HandlerType_1 = require("../../types/HandlerType");
/**
 * Before delete handler decorator.
 *
 * @export
 * @returns {MethodDecorator}
 */
function BeforeDelete() {
    return function (target, key, descriptor) {
        (0, index_1.getMetadataArgsStorage)().addActionMetadata({
            target: target.constructor,
            method: key,
            handler: HandlerType_1.HandlerType.Before,
            operation: ODataOperation_1.ODataOperation.Delete,
        });
    };
}
exports.BeforeDelete = BeforeDelete;
/**
 * On delete handler decorator.
 *
 * @export
 * @returns {MethodDecorator}
 */
function OnDelete() {
    return function (target, key, descriptor) {
        (0, index_1.getMetadataArgsStorage)().addActionMetadata({
            target: target.constructor,
            method: key,
            handler: HandlerType_1.HandlerType.On,
            operation: ODataOperation_1.ODataOperation.Delete,
        });
    };
}
exports.OnDelete = OnDelete;
/**
 * After delete handler decorator.
 *
 * @export
 * @returns {MethodDecorator}
 */
function AfterDelete() {
    return function (target, key, descriptor) {
        (0, index_1.getMetadataArgsStorage)().addActionMetadata({
            target: target.constructor,
            method: key,
            handler: HandlerType_1.HandlerType.After,
            operation: ODataOperation_1.ODataOperation.Delete,
        });
    };
}
exports.AfterDelete = AfterDelete;
//# sourceMappingURL=Delete.js.map