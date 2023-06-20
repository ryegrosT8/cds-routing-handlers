"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AfterSave = exports.OnSave = exports.BeforeSave = void 0;
var index_1 = require("../../index");
var HandlerType_1 = require("../../types/HandlerType");
var ODataOperation_1 = require("../../types/ODataOperation");
/**
 * Before save handler decorator.
 *
 * @export
 * @returns {MethodDecorator}
 */
function BeforeSave() {
    return function (target, key, descriptor) {
        (0, index_1.getMetadataArgsStorage)().addActionMetadata({
            target: target.constructor,
            method: key,
            handler: HandlerType_1.HandlerType.Before,
            operation: ODataOperation_1.ODataOperation.Save,
        });
    };
}
exports.BeforeSave = BeforeSave;
/**
 * On save handler decorator.
 *
 * @export
 * @returns {MethodDecorator}
 */
function OnSave() {
    return function (target, key, descriptor) {
        (0, index_1.getMetadataArgsStorage)().addActionMetadata({
            target: target.constructor,
            method: key,
            handler: HandlerType_1.HandlerType.On,
            operation: ODataOperation_1.ODataOperation.Save,
        });
    };
}
exports.OnSave = OnSave;
/**
 * After save handler decorator.
 *
 * @export
 * @returns {MethodDecorator}
 */
function AfterSave() {
    return function (target, key, descriptor) {
        (0, index_1.getMetadataArgsStorage)().addActionMetadata({
            target: target.constructor,
            method: key,
            handler: HandlerType_1.HandlerType.After,
            operation: ODataOperation_1.ODataOperation.Save,
        });
    };
}
exports.AfterSave = AfterSave;
//# sourceMappingURL=Save.js.map
