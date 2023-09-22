"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandlerMetadata = void 0;
var container_1 = require("../container");
/**
 * Handler metadata.
 *
 * @export
 * @class HandlerMetadata
 */
var HandlerMetadata = /** @class */ (function () {
    /**
     * Default constructor.
     *
     * @param {IHandlerMetadataArgs} args Metadata arguments
     * @memberof HandlerMetadata
     */
    function HandlerMetadata(args) {
        /**
         * Actions metadata.
         *
         * @type {ActionMetadata[]}
         * @memberof HandlerMetadata
         */
        this._actions = [];
        this._target = args.target;
        this._entity = args.entity;
    }
    Object.defineProperty(HandlerMetadata.prototype, "target", {
        /**
         * Target: Typescript class.
         *
         * @readonly
         * @type {Function}
         * @memberof HandlerMetadata
         */
        get: function () {
            return this._target;
        },
        enumerable: false,
        configurable: true,
    });
    Object.defineProperty(HandlerMetadata.prototype, "entity", {
        /**
         * Entity for which the handler is registerd.
         *
         * @readonly
         * @type {(string | undefined)}
         * @memberof HandlerMetadata
         */
        get: function () {
            return this._entity;
        },
        enumerable: false,
        configurable: true,
    });
    Object.defineProperty(HandlerMetadata.prototype, "instance", {
        /**
         * Returns a instance of the handler.
         *
         * @readonly
         * @type {*} Instance of the handler class
         * @memberof HandlerMetadata
         */
        get: function () {
            return (0, container_1.getFromContainer)(this.target);
        },
        enumerable: false,
        configurable: true,
    });
    Object.defineProperty(HandlerMetadata.prototype, "actions", {
        /**
         * Actions metadata.
         *
         * @type {ActionMetadata[]}
         * @memberof HandlerMetadata
         */
        get: function () {
            return this._actions;
        },
        /**
         * Actions metadata.
         *
         * @memberof HandlerMetadata
         */
        set: function (value) {
            this._actions = value;
        },
        enumerable: false,
        configurable: true,
    });
    return HandlerMetadata;
})();
exports.HandlerMetadata = HandlerMetadata;
//# sourceMappingURL=HandlerMetadata.js.map
