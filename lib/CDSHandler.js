"use strict";
var __awaiter =
    (this && this.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function (resolve) {
                      resolve(value);
                  });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator["throw"](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
var __generator =
    (this && this.__generator) ||
    function (thisArg, body) {
        var _ = {
                label: 0,
                sent: function () {
                    if (t[0] & 1) throw t[1];
                    return t[1];
                },
                trys: [],
                ops: [],
            },
            f,
            y,
            t,
            g;
        return (
            (g = { next: verb(0), throw: verb(1), return: verb(2) }),
            typeof Symbol === "function" &&
                (g[Symbol.iterator] = function () {
                    return this;
                }),
            g
        );
        function verb(n) {
            return function (v) {
                return step([n, v]);
            };
        }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (
                        ((f = 1),
                        y &&
                            (t =
                                op[0] & 2
                                    ? y["return"]
                                    : op[0]
                                    ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                                    : y.next) &&
                            !(t = t.call(y, op[1])).done)
                    )
                        return t;
                    if (((y = 0), t)) op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (
                                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                                (op[0] === 6 || op[0] === 2)
                            ) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2]) _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                } catch (e) {
                    op = [6, e];
                    y = 0;
                } finally {
                    f = t = 0;
                }
            if (op[0] & 5) throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
Object.defineProperty(exports, "__esModule", { value: true });
exports.CDSHandler = void 0;
var MetadataBuilder_1 = require("./metadata-builder/MetadataBuilder");
var HandlerType_1 = require("./types/HandlerType");
var ODataOperation_1 = require("./types/ODataOperation");
var MiddlewareRuntime_1 = require("./types/MiddlewareRuntime");
/**
 * CDS Handler.
 *
 * @export
 * @class CDSHandler
 */
var CDSHandler = /** @class */ (function () {
    function CDSHandler() {}
    /**
     * Registers all handlers and middlewares on the given service.
     *
     * @static
     * @param {*} srv Service to register the handlers on
     * @param {Function[]} handlerClasses Handler classes
     * @param {Function[]} middlewareClasses Middleware classes
     * @memberof CDSHandler
     */
    CDSHandler.register = function (srv, options) {
        var metadataBuilder = new MetadataBuilder_1.MetadataBuilder();
        if (options.middlewares) {
            this.registerMiddlewareClasses(metadataBuilder, srv, options.middlewares, options.userChecker);
        }
        this.registerHandlerClasses(metadataBuilder, srv, options.handler, options.userChecker);
    };
    /**
     * Registers all middleware classes.
     *
     * @private
     * @static
     * @param {MetadataBuilder} metadataBuilder Metadata builder
     * @param {*} srv Service to register the handlers to
     * @param {Function[]} middlewareClasses Middleware classes
     * @memberof CDSHandler
     */
    CDSHandler.registerMiddlewareClasses = function (metadataBuilder, srv, middlewareClasses, userChecker) {
        var _this = this;
        var middlewares = metadataBuilder.buildMiddlewareMetadata(middlewareClasses, userChecker);
        var globalSortedMiddlewares = middlewares
            .filter(function (m) {
                return m.global;
            })
            .sort(function (a, b) {
                if (a.priority > b.priority) return 1;
                if (b.priority > a.priority) return -1;
                return 0;
            });
        globalSortedMiddlewares.forEach(function (middleware) {
            _this.registerMiddleware(srv, middleware);
        });
        var usageMiddlewares = middlewares.filter(function (m) {
            return !m.global;
        });
        usageMiddlewares.forEach(function (middleware) {
            _this.registerMiddleware(srv, middleware);
        });
    };
    /**
     * Register all handler classes.
     *
     * @private
     * @static
     * @param {MetadataBuilder} metadataBuilder Metadata builder
     * @param {*} srv Service to register the handlers to
     * @param {Function[]} handlerClasses Handler classes
     * @memberof CDSHandler
     */
    CDSHandler.registerHandlerClasses = function (metadataBuilder, srv, handlerClasses, userChecker) {
        var _this = this;
        var handlers = metadataBuilder.buildHandlerMetadata(handlerClasses, userChecker);
        handlers.forEach(function (handler) {
            handler.actions.forEach(function (action) {
                try {
                    switch (action.handler) {
                        case HandlerType_1.HandlerType.Before:
                            _this.registerBeforeHandler(srv, action);
                            break;
                        case HandlerType_1.HandlerType.On:
                            if (
                                action.operation === ODataOperation_1.ODataOperation.Function ||
                                action.operation === ODataOperation_1.ODataOperation.Action
                            ) {
                                _this.registerFunctionImportHandler(srv, action);
                            } else {
                                _this.registerOnHandler(srv, action);
                            }
                            break;
                        case HandlerType_1.HandlerType.After:
                            _this.registerAfterHandler(srv, action);
                    }
                } catch (error) {
                    console.error(error.message);
                }
            });
        });
    };
    /**
     * Registers before handler.
     *
     * @private
     * @static
     * @param {*} srv Service to register to
     * @param {ActionMetadata} action Action to register
     * @memberof CDSHandler
     */
    CDSHandler.registerBeforeHandler = function (srv, action) {
        var _this = this;
        if (action.entity !== undefined) {
            srv.before(action.operation, action.entity, function (req, next) {
                return __awaiter(_this, void 0, void 0, function () {
                    var context;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                context = this.createExecutionContext(srv, req, next);
                                return [4 /*yield*/, action.exec(context)];
                            case 1:
                                return [2 /*return*/, _a.sent()];
                        }
                    });
                });
            });
        }
    };
    /**
     * Registers on handler.
     *
     * @private
     * @static
     * @param {*} srv Service to register to
     * @param {ActionMetadata} action Action to register
     * @memberof CDSHandler
     */
    CDSHandler.registerOnHandler = function (srv, action) {
        var _this = this;
        if (action.entity !== undefined) {
            srv.on(action.operation, action.entity, function (req, next) {
                return __awaiter(_this, void 0, void 0, function () {
                    var context;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                context = this.createExecutionContext(srv, req, next);
                                return [4 /*yield*/, action.exec(context)];
                            case 1:
                                return [2 /*return*/, _a.sent()];
                        }
                    });
                });
            });
        }
    };
    /**
     * Registers after handler.
     *
     * @private
     * @static
     * @param {*} srv Service to register to
     * @param {ActionMetadata} action Action to register
     * @memberof CDSHandler
     */
    CDSHandler.registerAfterHandler = function (srv, action) {
        var _this = this;
        if (action.entity !== undefined) {
            srv.after(action.operation, action.entity, function (entities, req) {
                return __awaiter(_this, void 0, void 0, function () {
                    var context;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                context = this.createExecutionContext(srv, req, undefined, entities);
                                return [4 /*yield*/, action.exec(context)];
                            case 1:
                                return [2 /*return*/, _a.sent()];
                        }
                    });
                });
            });
        }
    };
    /**
     * Registers function import handler.
     *
     * @private
     * @static
     * @param {*} srv Service to register to
     * @param {ActionMetadata} action Action to register
     * @memberof CDSHandler
     */
    CDSHandler.registerFunctionImportHandler = function (srv, action) {
        var _this = this;
        if (action.entity === undefined) {
            srv.on(action.functionImportName, function (req, next) {
                return __awaiter(_this, void 0, void 0, function () {
                    var context;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                context = this.createExecutionContext(srv, req, next);
                                return [4 /*yield*/, action.exec(context)];
                            case 1:
                                return [2 /*return*/, _a.sent()];
                        }
                    });
                });
            });
        } else {
            srv.on(action.functionImportName, action.entity, function (req, next) {
                return __awaiter(_this, void 0, void 0, function () {
                    var context;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                context = this.createExecutionContext(srv, req, next);
                                return [4 /*yield*/, action.exec(context)];
                            case 1:
                                return [2 /*return*/, _a.sent()];
                        }
                    });
                });
            });
        }
    };
    /**
     * Registers a middleware with CDS.
     *
     * @private
     * @static
     * @param {*} srv Service to register to
     * @param {MiddlewareMetadata} middleware Middleware to register
     * @memberof CDSHandler
     */
    CDSHandler.registerMiddleware = function (srv, middleware) {
        var _this = this;
        var _a, _b;
        switch (middleware.runtime) {
            case MiddlewareRuntime_1.MiddlewareRuntime.Normal:
                srv.before("*", function (req, next) {
                    return __awaiter(_this, void 0, void 0, function () {
                        var context;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    context = this.createExecutionContext(srv, req, next);
                                    return [4 /*yield*/, middleware.exec(context)];
                                case 1:
                                    return [2 /*return*/, _a.sent()];
                            }
                        });
                    });
                });
                break;
            case MiddlewareRuntime_1.MiddlewareRuntime.BeforeDefaults:
                if (
                    (_b =
                        (_a = srv === null || srv === void 0 ? void 0 : srv._handlers) === null || _a === void 0
                            ? void 0
                            : _a.initial) === null || _b === void 0
                        ? void 0
                        : _b._handlers
                ) {
                    srv._handlers.initial._handlers.unshift({
                        event: "*",
                        entity: undefined,
                        handler: function (req, next) {
                            return __awaiter(_this, void 0, void 0, function () {
                                var context;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            context = this.createExecutionContext(srv, req, next);
                                            return [4 /*yield*/, middleware.exec(context)];
                                        case 1:
                                            return [2 /*return*/, _a.sent()];
                                    }
                                });
                            });
                        },
                    });
                } else {
                    console.log("WARNING cds-routing-handler: Can't register MiddlewareRuntime.BeforeDefaults Handler");
                }
                break;
            case MiddlewareRuntime_1.MiddlewareRuntime.AfterDefaults:
                if (srv === null || srv === void 0 ? void 0 : srv._initial) {
                    srv._initial("*", function (req, next) {
                        return __awaiter(_this, void 0, void 0, function () {
                            var context;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        context = this.createExecutionContext(srv, req, next);
                                        return [4 /*yield*/, middleware.exec(context)];
                                    case 1:
                                        return [2 /*return*/, _a.sent()];
                                }
                            });
                        });
                    });
                } else {
                    console.log("WARNING cds-routing-handler: Can't register MiddlewareRuntime.AfterDefaults Handler");
                }
                break;
        }
    };
    /**
     * Creates a execution context.
     *
     * @private
     * @static
     * @param {*} srv CDS service
     * @param {*} req Incoming CDS request
     * @param {(Function | undefined)} next Next handler function
     * @param {(any[] | any)} [e] Entities on a after handler
     * @returns {IExecContext}
     * @memberof CDSHandler
     */
    CDSHandler.createExecutionContext = function (srv, req, next, e) {
        return {
            srv: srv,
            req: req,
            next: next,
            e: e,
        };
    };
    return CDSHandler;
})();
exports.CDSHandler = CDSHandler;
//# sourceMappingURL=CDSHandler.js.map
