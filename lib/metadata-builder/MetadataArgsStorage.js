"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetadataArgsStorage = void 0;
/**
 * Metadata arguments storage.
 *
 * @export
 * @class MetadataArgsStorage
 */
var MetadataArgsStorage = /** @class */ (function () {
    function MetadataArgsStorage() {
        /**
         * Handler metadata arguments.
         *
         * @private
         * @type {IHandlerMetadataArgs[]}
         * @memberof MetadataArgsStorage
         */
        this.handler = [];
        /**
         * Middleware metadata arguments.
         *
         * @private
         * @type {IMiddlewareMetadataArgs[]}
         * @memberof MetadataArgsStorage
         */
        this.middlewares = [];
        /**
         * Registerd middleware usage metadata args.
         *
         * @private
         * @type {IUseMetadataArgs[]}
         * @memberof MetadataArgsStorage
         */
        this.uses = [];
        /**
         * Action metadata arguments.
         *
         * @private
         * @type {IActionMetadataArgs[]}
         * @memberof MetadataArgsStorage
         */
        this.actions = [];
        /**
         * Reject metadata arguments.
         *
         * @private
         * @type {IRejectMetadataArgs[]}
         * @memberof MetadataArgsStorage
         */
        this.rejects = [];
        /**
         * Parameter metadata arguments.
         *
         * @private
         * @type {IParamMetadataArgs[]}
         * @memberof MetadataArgsStorage
         */
        this.params = [];
        /**
         * User checker metadata arguments.
         *
         * @private
         * @type {IUserCheckerMetadataArgs}
         * @memberof MetadataArgsStorage
         */
        this.userChecker = [];
    }
    Object.defineProperty(MetadataArgsStorage.prototype, "handlerMetadata", {
        /**
         * Handler metadata.
         *
         * @readonly
         * @type {IHandlerMetadataArgs[]}
         * @memberof MetadataArgsStorage
         */
        get: function () {
            return this.handler;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MetadataArgsStorage.prototype, "middlewareMetadata", {
        /**
         * Middleware metadata.
         *
         * @readonly
         * @type {IMiddlewareMetadataArgs[]}
         * @memberof MetadataArgsStorage
         */
        get: function () {
            return this.middlewares;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Adds handler metadata.
     *
     * @param {IHandlerMetadataArgs} metadata Metadata arguments
     * @memberof MetadataArgsStorage
     */
    MetadataArgsStorage.prototype.addHandlerMetadata = function (metadata) {
        this.handler.push(metadata);
    };
    /**
     * Adds middleware metadata.
     *
     * @param {IMiddlewareMetadataArgs} metadata Metadata arguments
     * @memberof MetadataArgsStorage
     */
    MetadataArgsStorage.prototype.addMiddlewareMetadata = function (metadata) {
        this.middlewares.push(metadata);
    };
    /**
     * Adds a middleware usage metadata.
     *
     * @param {IUseMetadataArgs} metadata Metadata arguments
     * @memberof MetadataArgsStorage
     */
    MetadataArgsStorage.prototype.addUseMetadata = function (metadata) {
        this.uses.push(metadata);
    };
    /**
     * Adds action metadata.
     *
     * @param {IActionMetadataArgs} metadata Metadata arguments
     * @memberof MetadataArgsStorage
     */
    MetadataArgsStorage.prototype.addActionMetadata = function (metadata) {
        this.actions.push(metadata);
    };
    /**
     * Adds reject metadata.
     *
     * @param {IRejectMetadataArgs} metadata Metadata arguements
     * @memberof MetadataArgsStorage
     */
    MetadataArgsStorage.prototype.addRejectMetadata = function (metadata) {
        if (this.filterRejectWithTargetAndMethod(metadata.target, metadata.method) === undefined) {
            this.rejects.push(metadata);
        }
        else {
            console.warn("Only one OnReject can be registerd per action (".concat(metadata.target.name, "::").concat(metadata.method, ")"));
        }
    };
    /**
     * Adds parameter metadata.
     *
     * @param {IParamMetadataArgs} metadata Metadata arguments
     * @memberof MetadataArgsStorage
     */
    MetadataArgsStorage.prototype.addParamMetadata = function (metadata) {
        this.params.push(metadata);
    };
    /**
     * Adds user checker metadata.
     *
     * @param {IUserCheckerMetadataArgs} metadata Metadata arguments
     * @memberof MetadataArgsStorage
     */
    MetadataArgsStorage.prototype.addUserCheckerMetadata = function (metadata) {
        this.userChecker.push(metadata);
    };
    /**
     * Filters handler metadata for given classes.
     *
     * @param {Function[]} classes Handler classes
     * @returns {IHandlerMetadataArgs[]} Filtered handler metadata
     * @memberof MetadataArgsStorage
     */
    MetadataArgsStorage.prototype.filterHandlerMetadataForClasses = function (classes) {
        return this.handler.filter(function (ctrl) {
            return classes.filter(function (cls) { return ctrl.target === cls; }).length > 0;
        });
    };
    /**
     * Filters middleware metadata for given classes.
     *
     * @param {Function} classes Middleware classes
     * @returns {IMiddlewareMetadataArgs[]} Filtered middleware metadata
     * @memberof MetadataArgsStorage
     */
    MetadataArgsStorage.prototype.filterMiddlewareMetadataForClasses = function (classes) {
        var _this = this;
        var middlewares = classes.map(function (cls) { return _this.middlewares.find(function (mid) { return mid.target === cls; }); });
        return middlewares.filter(function (midd) { return midd !== undefined; });
    };
    /**
     * Filters registerd middleware usages for a given middleware.
     *
     * @param {Function} middleware Middleware to filter for
     * @returns {IUseMetadataArgs[]} Filterd usage metadata
     * @memberof MetadataArgsStorage
     */
    MetadataArgsStorage.prototype.filterUsesWithMiddleware = function (middleware) {
        return this.uses.filter(function (use) {
            return use.middleware === middleware;
        });
    };
    /**
     * Filters action metadata for given target.
     *
     * @param {Function} target Target of the action
     * @returns {IActionMetadataArgs[]} Filtered action metadata
     * @memberof MetadataArgsStorage
     */
    MetadataArgsStorage.prototype.filterActionsWithTarget = function (target) {
        return this.actions.filter(function (action) { return action.target === target; });
    };
    /**
     * Filters reject metadata for given target and method.
     *
     * @param {Function} target Target of the reject
     * @param {string} method Method of the reject
     * @returns {IRejectMetadataArgs}
     * @memberof MetadataArgsStorage
     */
    MetadataArgsStorage.prototype.filterRejectWithTargetAndMethod = function (target, method) {
        var result;
        var rejects = this.rejects.filter(function (reject) { return reject.target === target && reject.method === method; });
        if (rejects.length === 1) {
            result = rejects[0];
        }
        return result;
    };
    /**
     * Filters parameter metadata for a given target and method.
     *
     * @param {Function} target Target of the parameter
     * @param {string} method Method of the parameter
     * @returns {IParamMetadataArgs[]}
     * @memberof MetadataArgsStorage
     */
    MetadataArgsStorage.prototype.filterParamsWithTargetAndMethod = function (target, method) {
        return this.params.filter(function (param) { return param.object.constructor === target && param.method === method; });
    };
    /**
     * Finds a user checker for a given target.
     *
     * @param {Function} target Target to find for
     * @returns {(IUserCheckerMetadataArgs | undefined)} Found user checker
     * @memberof MetadataArgsStorage
     */
    MetadataArgsStorage.prototype.findUserCheckerWithTarget = function (target) {
        if (target) {
            return this.userChecker.find(function (uc) { return uc.target === target; });
        }
    };
    /**
     * Resets the storage.
     *
     * @memberof MetadataArgsStorage
     */
    MetadataArgsStorage.prototype.reset = function () {
        this.handler = [];
        this.middlewares = [];
        this.uses = [];
        this.actions = [];
        this.rejects = [];
        this.params = [];
        this.userChecker = [];
    };
    return MetadataArgsStorage;
}());
exports.MetadataArgsStorage = MetadataArgsStorage;
//# sourceMappingURL=MetadataArgsStorage.js.map