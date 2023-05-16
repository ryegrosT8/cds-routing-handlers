"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrieveJwt = void 0;
function retrieveJwt(req) {
    var header = authHeader(req);
    if (validateAuthHeader(header)) {
        return header.split(" ")[1];
    }
}
exports.retrieveJwt = retrieveJwt;
function authHeader(req) {
    var entries = Object.entries(req.headers).find(function (_a) {
        var key = _a[0];
        return key.toLowerCase() === "authorization";
    });
    if (entries) {
        var header = entries[1];
        // Header could be a list of headers
        return Array.isArray(header) ? header[0] : header;
    }
    return undefined;
}
function validateAuthHeader(header) {
    if (typeof header === "undefined") {
        console.warn("Authorization header not set.");
        return false;
    }
    var _a = header.split(" "),
        authType = _a[0],
        token = _a[1];
    if (typeof token === "undefined") {
        console.warn("Token in auth header missing.");
        return false;
    }
    if (authType.toLowerCase() !== "bearer") {
        console.warn("Authorization type is not Bearer.");
        return false;
    }
    return true;
}
//# sourceMappingURL=CloudSdkReplacement.js.map
