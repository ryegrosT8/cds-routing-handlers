"use strict";
var __extends =
    (this && this.__extends) ||
    (function () {
        var extendStatics = function (d, b) {
            extendStatics =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function (d, b) {
                        d.__proto__ = b;
                    }) ||
                function (d, b) {
                    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                };
            return extendStatics(d, b);
        };
        return function (d, b) {
            if (typeof b !== "function" && b !== null)
                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
        };
    })();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiddlewareMetadata = void 0;
var index_1 = require("../index");
var Executer_1 = require("./base/Executer");
/**
 * Middleware metadata and executer.
 *
 * @export
 * @class MiddlewareMetadata
 */
var MiddlewareMetadata = /** @class */ (function (_super) {
    __extends(MiddlewareMetadata, _super);
    /**
     * Default constructor.
     *
     * @param {IMiddlewareMetadataArgs} args Middleware metadata arguments
     * @memberof MiddlewareMetadata
     */
    function MiddlewareMetadata(args) {
        var _this = _super.call(this) || this;
        /**
         * Middleware parameters.
         *
         * @type {ParamMetadata[]}
         * @memberof MiddlewareMetadata
         */
        _this._params = [];
        _this._global = args.global;
        _this._target = args.target;
        _this._priority = args.priority;
        _this._runtime = args.runtime;
        return _this;
    }
    Object.defineProperty(MiddlewareMetadata.prototype, "target", {
        /**
         * Target: Typescript class.
         *
         * @readonly
         * @type {Function}
         * @memberof MiddlewareMetadata
         */
        get: function () {
            return this._target;
        },
        enumerable: false,
        configurable: true,
    });
    Object.defineProperty(MiddlewareMetadata.prototype, "global", {
        /**
         * Flag, whether this middleware is a global one.
         *
         * @readonly
         * @type {boolean}
         * @memberof MiddlewareMetadata
         */
        get: function () {
            return this._global;
        },
        enumerable: false,
        configurable: true,
    });
    Object.defineProperty(MiddlewareMetadata.prototype, "priority", {
        /**
         * Priority of a global middleware.
         *
         * @readonly
         * @type {number}
         * @memberof MiddlewareMetadata
         */
        get: function () {
            return this._priority;
        },
        enumerable: false,
        configurable: true,
    });
    Object.defineProperty(MiddlewareMetadata.prototype, "runtime", {
        /**
         * Middleware runtime.
         *
         * @readonly
         * @type {(MiddlewareRuntime | undefined)}
         * @memberof MiddlewareMetadata
         */
        get: function () {
            return this._runtime;
        },
        enumerable: false,
        configurable: true,
    });
    Object.defineProperty(MiddlewareMetadata.prototype, "entities", {
        /**
         * Entities on which to apply the middleware.
         *
         * @type {string[]}
         * @memberof MiddlewareMetadata
         */
        get: function () {
            return this._entities;
        },
        /**
         * Entities on which to apply the middleware.
         *
         * @memberof MiddlewareMetadata
         */
        set: function (value) {
            this._entities = value;
        },
        enumerable: false,
        configurable: true,
    });
    Object.defineProperty(MiddlewareMetadata.prototype, "params", {
        /**
         * Middleware parameters.
         *
         * @memberof MiddlewareMetadata
         */
        set: function (value) {
            this._params = value;
        },
        enumerable: false,
        configurable: true,
    });
    Object.defineProperty(MiddlewareMetadata.prototype, "userChecker", {
        /**
         * User checker.
         *
         * @memberof MiddlewareMetadata
         */
        set: function (value) {
            this._userChecker = value;
        },
        enumerable: false,
        configurable: true,
    });
    Object.defineProperty(MiddlewareMetadata.prototype, "instance", {
        /**
         * Returns the instance of the middleware target.
         *
         * @readonly
         * @type {ICdsMiddleware}
         * @memberof MiddlewareMetadata
         */
        get: function () {
            return (0, index_1.getFromContainer)(this._target);
        },
        enumerable: false,
        configurable: true,
    });
    /**
     * Executes the middleware.
     *
     * @param {IExecContext} context Execution context
     * @returns {*} Execution result
     * @memberof MiddlewareMetadata
     */
    MiddlewareMetadata.prototype.exec = function (context) {
        var instance = this.instance;
        var params = this.buildParams(this._params, context, this._userChecker);
        if (instance["use"]) {
            return instance.use.apply(instance, params);
        }
    };
    return MiddlewareMetadata;
})(Executer_1.Executor);
exports.MiddlewareMetadata = MiddlewareMetadata;
//# sourceMappingURL=MiddlewareMetadata.js.map
