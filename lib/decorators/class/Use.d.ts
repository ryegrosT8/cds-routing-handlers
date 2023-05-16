/**
 * Middleware usage decorator.
 *
 * @export
 * @param {...Function[]} middlewares Middlewares to use
 * @returns {Function}
 */
export declare function Use(...middlewares: Function[]): ClassDecorator;
