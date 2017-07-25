"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExchangeRate_1 = require("../structures/ExchangeRate");
var createMany = function (result) { return result.exchangeRates.map(function (item) { return new ExchangeRate_1.ExchangeRate(item); }); };
var ExchangeRateEndpoints = (function () {
    function ExchangeRateEndpoints(requester) {
        this.requester = requester;
    }
    ExchangeRateEndpoints.prototype.listByCurrency = function (currency) {
        var url = '/structures/exchangerates';
        var params = { currency: currency };
        return this.requester.get(url, { params: params }).then(createMany);
    };
    return ExchangeRateEndpoints;
}());
exports.ExchangeRateEndpoints = ExchangeRateEndpoints;
//# sourceMappingURL=ExchangeRateEndpoints.js.map