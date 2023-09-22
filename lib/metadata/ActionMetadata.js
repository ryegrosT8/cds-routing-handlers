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
exports.ActionMetadata = void 0;
var Executer_1 = require("./base/Executer");
/**
 * Action metadata and executer.
 *
 * @export
 * @class ActionMetadata
 */
var ActionMetadata = /** @class */ (function (_super) {
    __extends(ActionMetadata, _super);
    /**
     * Default constructor.
     *
     * @param {HandlerMetadata} handlerMetadata Handler metadata
     * @param {IActionMetadataArgs} args Action metadata arguments
     * @memberof ActionMetadata
     */
    function ActionMetadata(handlerMetadata, args) {
        var _this = _super.call(this) || this;
        /**
         * Parameter metadata.
         *
         * @type {ParamMetadata[]}
         * @memberof ActionMetadata
         */
        _this._params = [];
        _this._handlerMetadata = handlerMetadata;
        _this._entity = handlerMetadata.entity;
        _this._target = args.target;
        _this._method = args.method;
        _this._handler = args.handler;
        _this._operation = args.operation;
        _this._functionImportName = args.functionImportName;
        return _this;
    }
    Object.defineProperty(ActionMetadata.prototype, "target", {
        /**
         * Target: Method on the handler class.
         *
         * @readonly
         * @type {Function}
         * @memberof ActionMetadata
         */
        get: function () {
            return this._target;
        },
        enumerable: false,
        configurable: true,
    });
    Object.defineProperty(ActionMetadata.prototype, "method", {
        /**
         * Action method on the handler class.
         *
         * @readonly
         * @type {string}
         * @memberof ActionMetadata
         */
        get: function () {
            return this._method;
        },
        enumerable: false,
        configurable: true,
    });
    Object.defineProperty(ActionMetadata.prototype, "handler", {
        /**
         * Handler type.
         *
         * @readonly
         * @type {HandlerType}
         * @memberof ActionMetadata
         */
        get: function () {
            return this._handler;
        },
        enumerable: false,
        configurable: true,
    });
    Object.defineProperty(ActionMetadata.prototype, "operation", {
        /**
         * Operation type.
         *
         * @readonly
         * @type {ODataOperation}
         * @memberof ActionMetadata
         */
        get: function () {
            return this._operation;
        },
        enumerable: false,
        configurable: true,
    });
    Object.defineProperty(ActionMetadata.prototype, "entity", {
        /**
         * Entity on which the action acts.
         *
         * @readonly
         * @type {string}
         * @memberof ActionMetadata
         */
        get: function () {
            return this._entity;
        },
        enumerable: false,
        configurable: true,
    });
    Object.defineProperty(ActionMetadata.prototype, "functionImportName", {
        /**
         * Function import name.
         *
         * @readonly
         * @type {(string | undefined)}
         * @memberof ActionMetadata
         */
        get: function () {
            return this._functionImportName;
        },
        enumerable: false,
        configurable: true,
    });
    Object.defineProperty(ActionMetadata.prototype, "reject", {
        /**
         * Reject metadata.
         *
         * @memberof ActionMetadata
         */
        set: function (value) {
            this._reject = value;
        },
        enumerable: false,
        configurable: true,
    });
    Object.defineProperty(ActionMetadata.prototype, "params", {
        /**
         * Parameter metadata.
         *
         * @memberof ActionMetadata
         */
        set: function (value) {
            this._params = value;
        },
        enumerable: false,
        configurable: true,
    });
    Object.defineProperty(ActionMetadata.prototype, "userChecker", {
        /**
         * User checker.
         *
         * @memberof ActionMetadata
         */
        set: function (value) {
            this._userChecker = value;
        },
        enumerable: false,
        configurable: true,
    });
    /**
     * Executs the action.
     *
     * @protected
     * @param {IExecContext} context Execution context
     * @returns {*} Execution result
     * @memberof ActionMetadata
     */
    ActionMetadata.prototype.exec = function (context) {
        var result = undefined;
        var instance = this._handlerMetadata.instance;
        var params = this.buildParams(this._params, context, this._userChecker);
        if (this._reject) {
            try {
                result = instance[this._method].apply(instance, params);
            } catch (error) {
                if (this._reject.appendErrorMessage) {
                    context.req.reject(this._reject.code, "".concat(this._reject.message, ": ").concat(error.message));
                } else {
                    context.req.reject(this._reject.code, this._reject.message);
                }
                return;
            }
        } else {
            result = instance[this._method].apply(instance, params);
        }
        return result;
    };
    return ActionMetadata;
})(Executer_1.Executor);
exports.ActionMetadata = ActionMetadata;
//# sourceMappingURL=ActionMetadata.js.map
