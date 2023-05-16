"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RejectMetadata = void 0;
/**
 * Rejection metadata.
 *
 * @export
 * @class RejectMetadata
 */
var RejectMetadata = /** @class */ (function () {
    /**
     * Default constructor.
     *
     * @param {IRejectMetadataArgs} args Metadata arguments
     * @memberof RejectMetadata
     */
    function RejectMetadata(args) {
        this._target = args.target;
        this._method = args.method;
        this._code = args.code;
        this._message = args.message;
        this._appendErrorMessage = args.appendErrorMessage;
    }
    Object.defineProperty(RejectMetadata.prototype, "code", {
        /**
         * HTTP Response code.
         *
         * @readonly
         * @type {number}
         * @memberof RejectMetadata
         */
        get: function () {
            return this._code;
        },
        enumerable: false,
        configurable: true,
    });
    Object.defineProperty(RejectMetadata.prototype, "message", {
        /**
         * Response message.
         *
         * @readonly
         * @type {string}
         * @memberof RejectMetadata
         */
        get: function () {
            return this._message;
        },
        enumerable: false,
        configurable: true,
    });
    Object.defineProperty(RejectMetadata.prototype, "appendErrorMessage", {
        /**
         * Flag, whether the JS error message should be appended.
         *
         * @readonly
         * @type {boolean}
         * @memberof RejectMetadata
         */
        get: function () {
            return this._appendErrorMessage;
        },
        enumerable: false,
        configurable: true,
    });
    return RejectMetadata;
})();
exports.RejectMetadata = RejectMetadata;
//# sourceMappingURL=RejectMetadata.js.map
