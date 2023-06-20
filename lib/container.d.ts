/**
 * Container options.
 *
 * @export
 * @interface IUseContainerOptions
 */
export interface IUseContainerOptions {
    /**
     * If set to true, then default container will be used in the case if given container haven't returned anything.
     */
    fallback?: boolean;
    /**
     * If set to true, then default container will be used in the case if given container thrown an exception.
     */
    fallbackOnErrors?: boolean;
}
/**
 * Sets container to be used by this library.
 *
 * @export
 * @param {{ get(someClass: any): any }} iocContainer
 * @param {IUseContainerOptions} [options]
 */
export declare function useContainer(
    iocContainer: {
        get(someClass: any): any;
    },
    options?: IUseContainerOptions
): void;
/**
 * Gets the IOC container used by this library.
 *
 * @export
 * @template T
 * @param {({ new (...args: any[]): T } | Function)} someClass
 * @returns {T}
 */
export declare function getFromContainer<T>(
    someClass:
        | {
              new (...args: any[]): T;
          }
        | Function
): T;
