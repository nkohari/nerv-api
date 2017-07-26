"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExchangeRate_1 = require("../structures/ExchangeRate");
const createMany = result => result.exchangeRates.map(item => new ExchangeRate_1.ExchangeRate(item));
class ExchangeRateEndpoints {
    constructor(requester) {
        this.requester = requester;
    }
    listByCurrency(currency) {
        const url = '/metadata/exchangerates';
        const params = { currency };
        return this.requester.get(url, { params }).then(createMany);
    }
}
exports.ExchangeRateEndpoints = ExchangeRateEndpoints;
//# sourceMappingURL=ExchangeRateEndpoints.js.map