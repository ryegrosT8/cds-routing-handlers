"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Executor = void 0;
var ParamType_1 = require("../../types/ParamType");
var CloudSdkReplacement_1 = require("./CloudSdkReplacement");
/**
 * Abstract executer class.
 *
 * Contains utils to build the necessary paramter list.
 *
 * @export
 * @abstract
 * @class Executer
 */
var Executor = /** @class */ (function () {
    function Executor() {
    }
    /**
     * Builds a paramter list out of all definied parameter decorators.
     *
     * @protected
     * @param {ParamMetadata[]} params Parameter metadata to build the list for
     * @param {IExecContext} context Execution context
     * @returns
     * @memberof Executer
     */
    Executor.prototype.buildParams = function (params, context, userChecker) {
        var _this = this;
        var sortedParams = params.sort(function (a, b) {
            if (a.index > b.index)
                return 1;
            if (b.index > a.index)
                return -1;
            return 0;
        });
        return sortedParams.map(function (param) {
            switch (param.type) {
                case ParamType_1.ParamType.Srv:
                    return context.srv;
                case ParamType_1.ParamType.Req:
                    return context.req;
                case ParamType_1.ParamType.Data:
                    return context.req.data;
                case ParamType_1.ParamType.ParamObj:
                    return context.req.data;
                case ParamType_1.ParamType.Param:
                    return _this.namedParam(param, context.req);
                case ParamType_1.ParamType.Jwt:
                    return _this.extractJwt(context);
                case ParamType_1.ParamType.Entities:
                    return context.e;
                case ParamType_1.ParamType.Next:
                    return context.next;
                case ParamType_1.ParamType.Locale:
                    return context.req.user.locale;
                case ParamType_1.ParamType.User:
                    return userChecker ? userChecker.exec(context) : undefined;
            }
        });
    };
    /**
     * Retrieves the JWT token from a given request context object.
     * Try to get token with some fallback strategys.
     * @private
     * @param {*} req Request object to read the JWT token from
     * @returns {(string | undefined)} JWT token
     * @memberof ActionMetadata
     */
    Executor.prototype.extractJwt = function (context) {
        var token;
        try {
            token = (0, CloudSdkReplacement_1.retrieveJwt)(context.req._.req);
        }
        catch (error) {
            // silence
        }
        try {
            if (!token)
                token = (0, CloudSdkReplacement_1.retrieveJwt)(context.req);
        }
        catch (error) {
            // silence
        }
        try {
            if (!token)
                token = context.req.attr.token || "";
        }
        catch (error) {
            // silence
        }
        return token;
    };
    /**
     * Reads a parameter from the request data object.
     *
     * @protected
     * @param {ParamMetadata} param Parameter to read from the object
     * @param {*} req Incoming CDS request
     * @returns {*} Builds parameter
     * @memberof Executer
     */
    Executor.prototype.namedParam = function (param, req) {
        var result = undefined;
        if (param.name) {
            result = req.data[param.name];
        }
        return result;
    };
    return Executor;
}());
exports.Executor = Executor;
//# sourceMappingURL=Executer.js.map