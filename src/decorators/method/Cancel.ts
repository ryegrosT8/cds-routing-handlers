import { getMetadataArgsStorage } from "../../index";
import { ODataOperation } from "../../types/ODataOperation";
import { HandlerType } from "../../types/HandlerType";

/**
 * Before delete handler decorator.
 *
 * @export
 * @returns {MethodDecorator}
 */
export function BeforeCancel(): MethodDecorator {
    return (target: Object, key: string | symbol, descriptor: PropertyDescriptor) => {
        getMetadataArgsStorage().addActionMetadata({
            target: target.constructor,
            method: key as string,
            handler: HandlerType.Before,
            operation: ODataOperation.Cancel,
        });
    };
}

/**
 * On delete handler decorator.
 *
 * @export
 * @returns {MethodDecorator}
 */
export function OnCancel(): MethodDecorator {
    return (target: Object, key: string | symbol, descriptor: PropertyDescriptor) => {
        getMetadataArgsStorage().addActionMetadata({
            target: target.constructor,
            method: key as string,
            handler: HandlerType.On,
            operation: ODataOperation.Cancel,
        });
    };
}

/**
 * After delete handler decorator.
 *
 * @export
 * @returns {MethodDecorator}
 */
export function AfterCancel(): MethodDecorator {
    return (target: Object, key: string | symbol, descriptor: PropertyDescriptor) => {
        getMetadataArgsStorage().addActionMetadata({
            target: target.constructor,
            method: key as string,
            handler: HandlerType.After,
            operation: ODataOperation.Cancel,
        });
    };
}
