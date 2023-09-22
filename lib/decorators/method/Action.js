"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AfterAction = exports.BeforeAction = exports.Action = void 0;
var index_1 = require("../../index");
var HandlerType_1 = require("../../types/HandlerType");
var ODataOperation_1 = require("../../types/ODataOperation");
/**
 * Action handler decorator.
 *
 * @export
 * @param {string} name Name of the action
 * @returns {MethodDecorator}
 */
function Action(name) {
    return function (target, key, descriptor) {
        (0, index_1.getMetadataArgsStorage)().addActionMetadata({
            target: target.constructor,
            method: key,
            handler: HandlerType_1.HandlerType.On,
            operation: ODataOperation_1.ODataOperation.Action,
            functionImportName: name,
        });
    };
}
exports.Action = Action;
/**
 * Before Action handler decorator.
 *
 * @export
 * @param {string} name Name of the action
 * @returns {MethodDecorator}
 */
function BeforeAction(name) {
    return function (target, key, descriptor) {
        (0, index_1.getMetadataArgsStorage)().addActionMetadata({
            target: target.constructor,
            method: key,
            handler: HandlerType_1.HandlerType.Before,
            operation: ODataOperation_1.ODataOperation.Action,
            functionImportName: name,
        });
    };
}
exports.BeforeAction = BeforeAction;
/**
 * After Action decorator.
 *
 * @export
 * @param {string} name Name of the action
 * @returns {MethodDecorator}
 */
function AfterAction(name) {
    return function (target, key, descriptor) {
        (0, index_1.getMetadataArgsStorage)().addActionMetadata({
            target: target.constructor,
            method: key,
            handler: HandlerType_1.HandlerType.On,
            operation: ODataOperation_1.ODataOperation.Action,
            functionImportName: name,
        });
    };
}
exports.AfterAction = AfterAction;
//# sourceMappingURL=Action.js.map
