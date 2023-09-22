"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserChecker = void 0;
var index_1 = require("../../index");
/**
 * User checker decorator.
 *
 * @export
 * @returns {ClassDecorator}
 */
function UserChecker() {
    return function (target) {
        (0, index_1.getMetadataArgsStorage)().addUserCheckerMetadata({
            target: target,
        });
    };
}
exports.UserChecker = UserChecker;
//# sourceMappingURL=UserChecker.js.map