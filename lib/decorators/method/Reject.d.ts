/**
 * Reject handler decorator.
 *
 * @export
 * @param {number} code HTTP response code
 * @param {string} message Response message
 * @returns {MethodDecorator}
 */
export declare function OnReject(code: number, message: string, appendErrorMessage?: boolean): MethodDecorator;
