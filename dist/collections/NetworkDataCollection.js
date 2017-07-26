"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Collection_1 = require("../framework/Collection");
class NetworkDataCollection extends Collection_1.Collection {
    for(symbol) {
        return this.find(item => item.symbol === symbol);
    }
}
exports.NetworkDataCollection = NetworkDataCollection;
//# sourceMappingURL=NetworkDataCollection.js.map