"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCombinedHandler = exports.getMetadataArgsStorage = void 0;
var path = __importStar(require("path"));
var CDSHandler_1 = require("./CDSHandler");
var MetadataArgsStorage_1 = require("./metadata-builder/MetadataArgsStorage");
__exportStar(require("./container"), exports);
__exportStar(require("./decorators/class/options/IMiddlewareOptions"), exports);
__exportStar(require("./decorators/class/Handler"), exports);
__exportStar(require("./decorators/class/Use"), exports);
__exportStar(require("./decorators/class/Middleware"), exports);
__exportStar(require("./decorators/class/UserChecker"), exports);
__exportStar(require("./decorators/method/Create"), exports);
__exportStar(require("./decorators/method/Read"), exports);
__exportStar(require("./decorators/method/Update"), exports);
__exportStar(require("./decorators/method/Delete"), exports);
__exportStar(require("./decorators/method/Reject"), exports);
__exportStar(require("./decorators/method/Func"), exports);
__exportStar(require("./decorators/method/Action"), exports);
__exportStar(require("./decorators/param/Srv"), exports);
__exportStar(require("./decorators/param/Req"), exports);
__exportStar(require("./decorators/param/ParamObj"), exports);
__exportStar(require("./decorators/param/Param"), exports);
__exportStar(require("./decorators/param/Jwt"), exports);
__exportStar(require("./decorators/param/Entities"), exports);
__exportStar(require("./decorators/param/Data"), exports);
__exportStar(require("./decorators/param/Next"), exports);
__exportStar(require("./decorators/param/Locale"), exports);
__exportStar(require("./decorators/param/User"), exports);
__exportStar(require("./types/ODataOperation"), exports);
__exportStar(require("./types/ICdsMiddleware"), exports);
__exportStar(require("./types/IUserChecker"), exports);
__exportStar(require("./types/ICdsRoutingHandlerOptions"), exports);
__exportStar(require("./types/MiddlewareRuntime"), exports);
//Draft events
__exportStar(require("./decorators/method/New"), exports);
__exportStar(require("./decorators/method/Edit"), exports);
__exportStar(require("./decorators/method/Patch"), exports);
__exportStar(require("./decorators/method/Save"), exports);
__exportStar(require("./decorators/method/Cancel"), exports);
/**
 * Returns the metadata arguments storage.
 *
 * @export
 * @returns {MetadataArgsStorage} Metadata arguments storage
 */
function getMetadataArgsStorage() {
    if (!global.cdsHandlersMetadataArgsStorage)
        global.cdsHandlersMetadataArgsStorage = new MetadataArgsStorage_1.MetadataArgsStorage();
    return global.cdsHandlersMetadataArgsStorage;
}
exports.getMetadataArgsStorage = getMetadataArgsStorage;
/**
 * Imports decorated classes from directories.
 *
 * @param {string[]} directories Directories to search in
 * @param {string} [formats=[".js", ".ts"]] Formats to import classes from
 * @returns {Function[]} Imported classes
 */
function importClassesFromDirectories(directories, formats) {
    if (formats === void 0) { formats = [".js", ".ts"]; }
    var loadFileClasses = function (exported, allLoaded) {
        if (exported instanceof Function) {
            allLoaded.push(exported);
        }
        else if (exported instanceof Array) {
            exported.forEach(function (i) { return loadFileClasses(i, allLoaded); });
        }
        else if (exported instanceof Object || typeof exported === "object") {
            Object.keys(exported).forEach(function (key) { return loadFileClasses(exported[key], allLoaded); });
        }
        return allLoaded;
    };
    var allFiles = directories.reduce(function (allDirs, dir) {
        return allDirs.concat(require("glob").sync(path.normalize(dir)));
    }, []);
    var dirs = allFiles
        .filter(function (file) {
        var dtsExtension = file.substring(file.length - 5, file.length);
        return formats.indexOf(path.extname(file)) !== -1 && dtsExtension !== ".d.ts";
    })
        .map(function (file) {
        return require(file);
    });
    return loadFileClasses(dirs, []);
}
/**
 * Create combined handler.
 *
 * @export
 * @param {(Function[] | string[])} handlers Handlers; either classes directly or the directories where the handlers reside
 * @returns {(srv: any) => void} Function that is used to register all endpoints
 */
function createCombinedHandler(options) {
    return function (srv) {
        if (!(srv.before && srv.on && srv.after)) {
            console.error("Service (srv) parameter does not seem to be a CDS service implementation");
            return;
        }
        var handlerClasses;
        if (options.handler && options.handler.length) {
            handlerClasses = options.handler.filter(function (controller) { return controller instanceof Function; });
            var handlerDirs = options.handler.filter(function (controller) { return typeof controller === "string"; });
            handlerClasses.push.apply(handlerClasses, importClassesFromDirectories(handlerDirs));
            CDSHandler_1.CDSHandler.register(srv, {
                handler: handlerClasses,
                middlewares: options.middlewares,
                userChecker: options.userChecker,
            });
        }
    };
}
exports.createCombinedHandler = createCombinedHandler;
//# sourceMappingURL=index.js.map