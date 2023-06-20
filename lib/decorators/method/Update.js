"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AfterUpdate = exports.OnUpdate = exports.BeforeUpdate = void 0;
var index_1 = require("../../index");
var HandlerType_1 = require("../../types/HandlerType");
var ODataOperation_1 = require("../../types/ODataOperation");
/**
 * Before update handler decorator.
 *
 * @export
 * @returns {MethodDecorator}
 */
function BeforeUpdate() {
    return function (target, key, descriptor) {
        (0, index_1.getMetadataArgsStorage)().addActionMetadata({
            target: target.constructor,
            method: key,
            handler: HandlerType_1.HandlerType.Before,
            operation: ODataOperation_1.ODataOperation.Update,
        });
    };
}
exports.BeforeUpdate = BeforeUpdate;
/**
 * On update handler decorator.
 *
 * @export
 * @returns {MethodDecorator}
 */
function OnUpdate() {
    return function (target, key, descriptor) {
        (0, index_1.getMetadataArgsStorage)().addActionMetadata({
            target: target.constructor,
            method: key,
            handler: HandlerType_1.HandlerType.On,
            operation: ODataOperation_1.ODataOperation.Update,
        });
    };
}
exports.OnUpdate = OnUpdate;
/**
 * After update handler decorator.
 *
 * @export
 * @returns {MethodDecorator}
 */
function AfterUpdate() {
    return function (target, key, descriptor) {
        (0, index_1.getMetadataArgsStorage)().addActionMetadata({
            target: target.constructor,
            method: key,
            handler: HandlerType_1.HandlerType.After,
            operation: ODataOperation_1.ODataOperation.Update,
        });
    };
}
exports.AfterUpdate = AfterUpdate;
//# sourceMappingURL=Update.js.map