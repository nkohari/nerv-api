"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function lastWriteWins(a, B) {
    return 1;
}
exports.lastWriteWins = lastWriteWins;
function highestVersionWins(a, b) {
    return a.version - b.version;
}
exports.highestVersionWins = highestVersionWins;
//# sourceMappingURL=comparators.js.map