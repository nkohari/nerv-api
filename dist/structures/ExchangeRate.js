"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExchangeRate {
    constructor(data = {}) {
        this.id = data.id;
        this.time = new Date(data.time);
        this.symbol = data.symbol;
        this.currency = data.currency;
        this.amount = Number(data.amount);
    }
}
exports.ExchangeRate = ExchangeRate;
//# sourceMappingURL=ExchangeRate.js.map