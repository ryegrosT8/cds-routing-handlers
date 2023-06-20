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
exports.UserCheckerMetadata = void 0;
var index_1 = require("../index");
var Executer_1 = require("./base/Executer");
/**
 * Middleware metadata and executer.
 *
 * @export
 * @class UserCheckerMetadata
 */
var UserCheckerMetadata = /** @class */ (function (_super) {
    __extends(UserCheckerMetadata, _super);
    /**
     * Default constructor.
     *
     * @param {IUserCheckerMetadataArgs} args User checker metadata arguments
     * @memberof UserCheckerMetadata
     */
    function UserCheckerMetadata(args) {
        var _this = _super.call(this) || this;
        /**
         * Middleware parameters.
         *
         * @type {ParamMetadata[]}
         * @memberof UserCheckerMetadata
         */
        _this._params = [];
        _this._target = args.target;
        return _this;
    }
    Object.defineProperty(UserCheckerMetadata.prototype, "target", {
        /**
         * Target: Typescript class.
         *
         * @readonly
         * @type {Function}
         * @memberof UserCheckerMetadata
         */
        get: function () {
            return this._target;
        },
        enumerable: false,
        configurable: true,
    });
    Object.defineProperty(UserCheckerMetadata.prototype, "params", {
        /**
         * Middleware parameters.
         *
         * @memberof UserCheckerMetadata
         */
        set: function (value) {
            this._params = value;
        },
        enumerable: false,
        configurable: true,
    });
    Object.defineProperty(UserCheckerMetadata.prototype, "instance", {
        /**
         * Returns the instance of the middleware target.
         *
         * @readonly
         * @type {IUserChecker}
         * @memberof UserCheckerMetadata
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
    UserCheckerMetadata.prototype.exec = function (context) {
        var instance = this.instance;
        var params = this.buildParams(this._params, context);
        if (instance["check"]) {
            return instance.check.apply(instance, params);
        }
    };
    return UserCheckerMetadata;
})(Executer_1.Executor);
exports.UserCheckerMetadata = UserCheckerMetadata;
//# sourceMappingURL=UserCheckerMetadata.js.map
