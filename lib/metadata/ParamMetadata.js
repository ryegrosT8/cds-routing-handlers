"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParamMetadata = void 0;
/**
 * Parameter metadata.
 *
 * @export
 * @class ParamMetadata
 */
var ParamMetadata = /** @class */ (function () {
    /**
     * Default constructor.
     *
     * @param {ActionMetadata} actionMetadata Action metadata
     * @param {IParamMetadataArgs} args Parameter arguments
     * @memberof ParamMetadata
     */
    function ParamMetadata(args) {
        /**
         * Name of the target class.
         *
         * @type {string}
         * @memberof ParamMetadata
         */
        this._targetName = "";
        /**
         * Flag, whether the target is a object.
         *
         * @type {boolean}
         * @memberof ParamMetadata
         */
        this._isTargetObject = false;
        this._target = args.object.constructor;
        this._method = args.method;
        this._index = args.index;
        this._type = args.type;
        this._name = args.name;
        var paramTypes = Reflect.getMetadata("design:paramtypes", args.object, args.method);
        if (paramTypes !== undefined) {
            this._targetType = paramTypes[args.index];
        }
        if (this._targetType) {
            if (this._targetType instanceof Function && this._targetType.name) {
                this._targetName = this._targetType.name.toLowerCase();
            } else if (typeof this._targetType === "string") {
                this._targetName = this._targetType.toLowerCase();
            }
            this._isTargetObject =
                this._targetType instanceof Function || typeof this._targetType == "string"
                    ? this._targetType.toLowerCase() === "object"
                    : typeof this._targetType === "object";
        }
    }
    Object.defineProperty(ParamMetadata.prototype, "index", {
        /**
         * Parameter index.
         *
         * @readonly
         * @type {number}
         * @memberof ParamMetadata
         */
        get: function () {
            return this._index;
        },
        enumerable: false,
        configurable: true,
    });
    Object.defineProperty(ParamMetadata.prototype, "type", {
        /**
         * Parameter type.
         *
         * @readonly
         * @type {ParamType}
         * @memberof ParamMetadata
         */
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true,
    });
    Object.defineProperty(ParamMetadata.prototype, "name", {
        /**
         * Name of the parameter.
         *
         * @readonly
         * @type {(string | undefined)}
         * @memberof ParamMetadata
         */
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true,
    });
    return ParamMetadata;
})();
exports.ParamMetadata = ParamMetadata;
//# sourceMappingURL=ParamMetadata.js.map
