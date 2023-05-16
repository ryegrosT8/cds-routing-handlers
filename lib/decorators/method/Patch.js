"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AfterPatch = exports.OnPatch = exports.BeforePatch = void 0;
var index_1 = require("../../index");
var HandlerType_1 = require("../../types/HandlerType");
var ODataOperation_1 = require("../../types/ODataOperation");
/**
 * Before patch handler decorator.
 *
 * @export
 * @returns {MethodDecorator}
 */
function BeforePatch() {
    return function (target, key, descriptor) {
        (0, index_1.getMetadataArgsStorage)().addActionMetadata({
            target: target.constructor,
            method: key,
            handler: HandlerType_1.HandlerType.Before,
            operation: ODataOperation_1.ODataOperation.Patch,
        });
    };
}
exports.BeforePatch = BeforePatch;
/**
 * On patch handler decorator.
 *
 * @export
 * @returns {MethodDecorator}
 */
function OnPatch() {
    return function (target, key, descriptor) {
        (0, index_1.getMetadataArgsStorage)().addActionMetadata({
            target: target.constructor,
            method: key,
            handler: HandlerType_1.HandlerType.On,
            operation: ODataOperation_1.ODataOperation.Patch,
        });
    };
}
exports.OnPatch = OnPatch;
/**
 * After patch handler decorator.
 *
 * @export
 * @returns {MethodDecorator}
 */
function AfterPatch() {
    return function (target, key, descriptor) {
        (0, index_1.getMetadataArgsStorage)().addActionMetadata({
            target: target.constructor,
            method: key,
            handler: HandlerType_1.HandlerType.After,
            operation: ODataOperation_1.ODataOperation.Patch,
        });
    };
}
exports.AfterPatch = AfterPatch;
//# sourceMappingURL=Patch.js.map
