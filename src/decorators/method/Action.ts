import { getMetadataArgsStorage } from "../../index";
import { HandlerType } from "../../types/HandlerType";
import { ODataOperation } from "../../types/ODataOperation";

/**
 * Action handler decorator.
 *
 * @export
 * @param {string} name Name of the action
 * @returns {MethodDecorator}
 */
export function Action(name: string): MethodDecorator {
    return (target: Object, key: string | symbol, descriptor: PropertyDescriptor) => {
        getMetadataArgsStorage().addActionMetadata({
            target: target.constructor,
            method: key as string,
            handler: HandlerType.On,
            operation: ODataOperation.Action,
            functionImportName: name,
        });
    };
}

/**
 * Before Action handler decorator.
 *
 * @export
 * @param {string} name Name of the action
 * @returns {MethodDecorator}
 */
export function BeforeAction(name: string): MethodDecorator {
    return (target: Object, key: string | symbol, descriptor: PropertyDescriptor) => {
        getMetadataArgsStorage().addActionMetadata({
            target: target.constructor,
            method: key as string,
            handler: HandlerType.Before,
            operation: ODataOperation.Action,
            functionImportName: name,
        });
    };
}

/**
 * After Action decorator.
 *
 * @export
 * @param {string} name Name of the action
 * @returns {MethodDecorator}
 */
export function AfterAction(name: string): MethodDecorator {
    return (target: Object, key: string | symbol, descriptor: PropertyDescriptor) => {
        getMetadataArgsStorage().addActionMetadata({
            target: target.constructor,
            method: key as string,
            handler: HandlerType.On,
            operation: ODataOperation.Action,
            functionImportName: name,
        });
    };
}
