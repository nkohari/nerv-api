"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExchangeRate = (function () {
    function ExchangeRate(data) {
        if (data === void 0) { data = {}; }
        this.id = data.id;
        this.time = new Date(data.time);
        this.symbol = data.symbol;
        this.currency = data.currency;
        this.amount = Number(data.amount);
    }
    return ExchangeRate;
}());
exports.ExchangeRate = ExchangeRate;
//# sourceMappingURL=ExchangeRate.js.map