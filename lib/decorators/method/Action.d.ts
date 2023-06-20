/**
 * Action handler decorator.
 *
 * @export
 * @param {string} name Name of the action
 * @returns {MethodDecorator}
 */
export declare function Action(name: string): MethodDecorator;
/**
 * Before Action handler decorator.
 *
 * @export
 * @param {string} name Name of the action
 * @returns {MethodDecorator}
 */
export declare function BeforeAction(name: string): MethodDecorator;
/**
 * After Action decorator.
 *
 * @export
 * @param {string} name Name of the action
 * @returns {MethodDecorator}
 */
export declare function AfterAction(name: string): MethodDecorator;
