"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AfterEdit = exports.OnEdit = exports.BeforeEdit = void 0;
var index_1 = require("../../index");
var HandlerType_1 = require("../../types/HandlerType");
var ODataOperation_1 = require("../../types/ODataOperation");
/**
 * Before edit handler decorator.
 *
 * @export
 * @returns {MethodDecorator}
 */
function BeforeEdit() {
    return function (target, key, descriptor) {
        (0, index_1.getMetadataArgsStorage)().addActionMetadata({
            target: target.constructor,
            method: key,
            handler: HandlerType_1.HandlerType.Before,
            operation: ODataOperation_1.ODataOperation.Edit,
        });
    };
}
exports.BeforeEdit = BeforeEdit;
/**
 * On edit handler decorator.
 *
 * @export
 * @returns {MethodDecorator}
 */
function OnEdit() {
    return function (target, key, descriptor) {
        (0, index_1.getMetadataArgsStorage)().addActionMetadata({
            target: target.constructor,
            method: key,
            handler: HandlerType_1.HandlerType.On,
            operation: ODataOperation_1.ODataOperation.Edit,
        });
    };
}
exports.OnEdit = OnEdit;
/**
 * After edit handler decorator.
 *
 * @export
 * @returns {MethodDecorator}
 */
function AfterEdit() {
    return function (target, key, descriptor) {
        (0, index_1.getMetadataArgsStorage)().addActionMetadata({
            target: target.constructor,
            method: key,
            handler: HandlerType_1.HandlerType.After,
            operation: ODataOperation_1.ODataOperation.Edit,
        });
    };
}
exports.AfterEdit = AfterEdit;
//# sourceMappingURL=Edit.js.map
