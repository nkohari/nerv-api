"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Collection_1 = require("../framework/Collection");
class ExchangeRateCollection extends Collection_1.Collection {
    for(symbol, currency) {
        return this.find(item => item.symbol === symbol && item.currency === currency);
    }
}
exports.ExchangeRateCollection = ExchangeRateCollection;
//# sourceMappingURL=ExchangeRateCollection.js.map