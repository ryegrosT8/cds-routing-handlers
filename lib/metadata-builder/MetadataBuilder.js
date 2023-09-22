"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetadataBuilder = void 0;
var index_1 = require("../index");
var ActionMetadata_1 = require("../metadata/ActionMetadata");
var RejectMetadata_1 = require("../metadata/RejectMetadata");
var ParamMetadata_1 = require("../metadata/ParamMetadata");
var HandlerMetadata_1 = require("../metadata/HandlerMetadata");
var MiddlewareMetadata_1 = require("../metadata/MiddlewareMetadata");
var UserCheckerMetadata_1 = require("../metadata/UserCheckerMetadata");
/**
 * Metadata builder.
 *
 * @export
 * @class MetadataBuilder
 */
var MetadataBuilder = /** @class */ (function () {
    function MetadataBuilder() {
    }
    /**
     * Builds handler metadata for a given set of handler classes.
     *
     * @param {Function[]} [classes] Handler classes
     * @returns {MiddlewareMetadata[]} Build handler metadata
     * @memberof MetadataBuilder
     */
    MetadataBuilder.prototype.buildHandlerMetadata = function (classes, userChecker) {
        var userCheckerMetadata = (0, index_1.getMetadataArgsStorage)().findUserCheckerWithTarget(userChecker);
        return this.createHandler(classes, userCheckerMetadata);
    };
    /**
     * Builds middleware metadata for a given set of middleware classes.
     *
     * @param {Function[]} [classes] Middleware classes
     * @returns {MiddlewareMetadata[]} Buiild middleware metadata
     * @memberof MetadataBuilder
     */
    MetadataBuilder.prototype.buildMiddlewareMetadata = function (classes, userChecker) {
        var userCheckerMetadata = (0, index_1.getMetadataArgsStorage)().findUserCheckerWithTarget(userChecker);
        return this.createMiddlewares(classes, userCheckerMetadata);
    };
    /**
     * Create handler metadata.
     *
     * @param {Function[]} [classes] Handler classes to build for
     * @returns {MiddlewareMetadata[]} Created handler metadata
     * @memberof MetadataBuilder
     */
    MetadataBuilder.prototype.createHandler = function (classes, userCheckerMetadataArg) {
        var _this = this;
        var handlers = !classes
            ? (0, index_1.getMetadataArgsStorage)().handlerMetadata
            : (0, index_1.getMetadataArgsStorage)().filterHandlerMetadataForClasses(classes);
        return handlers.map(function (handlerArgs) {
            var handler = new HandlerMetadata_1.HandlerMetadata(handlerArgs);
            handler.actions = _this.createActions(handler, userCheckerMetadataArg);
            return handler;
        });
    };
    /**
     * Creates middleware metadata.
     *
     * @private
     * @param {Function[]} [classes] Middleware classes to build for
     * @returns {MiddlewareMetadata[]} Created middleware metadata
     * @memberof MetadataBuilder
     */
    MetadataBuilder.prototype.createMiddlewares = function (classes, userCheckerMetadataArg) {
        var _this = this;
        var middlewares = !classes
            ? (0, index_1.getMetadataArgsStorage)().middlewareMetadata
            : (0, index_1.getMetadataArgsStorage)().filterMiddlewareMetadataForClasses(classes);
        return middlewares.map(function (middlewareArgs) {
            var middleware = new MiddlewareMetadata_1.MiddlewareMetadata(middlewareArgs);
            middleware.params = _this.createMiddlewareParams(middleware);
            middleware.userChecker = _this.createUserChecker(userCheckerMetadataArg);
            if (!middleware.global) {
                var uses = (0, index_1.getMetadataArgsStorage)().filterUsesWithMiddleware(middleware.target);
                var handler = (0, index_1.getMetadataArgsStorage)().filterHandlerMetadataForClasses(uses.map(function (u) { return u.target; }));
                middleware.entities = handler
                    .filter(function (h) { return h.entity; })
                    .map(function (h) { return h.entity || ""; })
                    .filter(function (s) { return s !== ""; });
            }
            return middleware;
        });
    };
    /**
     * Creates action metadata.
     *
     * @param {MiddlewareMetadata} handler Handler metadata
     * @returns {ActionMetadata[]} Created action metadata
     * @memberof MetadataBuilder
     */
    MetadataBuilder.prototype.createActions = function (handler, userCheckerArg) {
        var _this = this;
        return (0, index_1.getMetadataArgsStorage)()
            .filterActionsWithTarget(handler.target)
            .map(function (actionArgs) {
            var action = new ActionMetadata_1.ActionMetadata(handler, actionArgs);
            action.reject = _this.createReject(action);
            action.params = _this.createParams(action);
            action.userChecker = _this.createUserChecker(userCheckerArg);
            return action;
        });
    };
    /**
     * Creates a reject.
     *
     * @private
     * @param {ActionMetadata} action Action to create metadata for
     * @returns {(RejectMetadata | undefined)} Created rejection metadata
     * @memberof MetadataBuilder
     */
    MetadataBuilder.prototype.createReject = function (action) {
        var result;
        var args = (0, index_1.getMetadataArgsStorage)().filterRejectWithTargetAndMethod(action.target, action.method);
        if (args) {
            result = new RejectMetadata_1.RejectMetadata(args);
        }
        return result;
    };
    /**
     * Creates action parameters.
     *
     * @private
     * @param {ActionMetadata} action Action to create the parameters for
     * @returns {ParamMetadata[]} Created parameters
     * @memberof MetadataBuilder
     */
    MetadataBuilder.prototype.createParams = function (action) {
        return (0, index_1.getMetadataArgsStorage)()
            .filterParamsWithTargetAndMethod(action.target, action.method)
            .map(function (paramArgs) { return new ParamMetadata_1.ParamMetadata(paramArgs); });
    };
    /**
     * Creates middleware paramters.
     *
     * @private
     * @param {MiddlewareMetadata} middleware Middleware to create parameters for
     * @returns {ParamMetadata[]} Created parameters
     * @memberof MetadataBuilder
     */
    MetadataBuilder.prototype.createMiddlewareParams = function (middleware) {
        return (0, index_1.getMetadataArgsStorage)()
            .filterParamsWithTargetAndMethod(middleware.target, "use")
            .map(function (paramArgs) { return new ParamMetadata_1.ParamMetadata(paramArgs); });
    };
    /**
     * Creates user checker parameters.
     *
     * @private
     * @param {UserCheckerMetadata} userchecker Middleware to create parameters for
     * @returns {ParamMetadata[]} Created parameters
     * @memberof MetadataBuilder
     */
    MetadataBuilder.prototype.createUserCheckerParams = function (userChecker) {
        return (0, index_1.getMetadataArgsStorage)()
            .filterParamsWithTargetAndMethod(userChecker.target, "check")
            .map(function (paramArgs) { return new ParamMetadata_1.ParamMetadata(paramArgs); });
    };
    /**
     * Creates a user checker.
     *
     * @private
     * @param {(IUserCheckerMetadataArgs | undefined)} userCheckerArg User checker metadata arguments
     * @returns {(UserCheckerMetadata | undefined)} Creates user checker
     * @memberof MetadataBuilder
     */
    MetadataBuilder.prototype.createUserChecker = function (userCheckerArg) {
        if (userCheckerArg) {
            var userChecker = new UserCheckerMetadata_1.UserCheckerMetadata(userCheckerArg);
            userChecker.params = this.createUserCheckerParams(userChecker);
            return userChecker;
        }
    };
    return MetadataBuilder;
}());
exports.MetadataBuilder = MetadataBuilder;
//# sourceMappingURL=MetadataBuilder.js.map