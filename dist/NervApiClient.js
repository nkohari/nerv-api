"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Requester_1 = require("./framework/Requester");
var AgentEndpoints_1 = require("./endpoints/AgentEndpoints");
var AuthEndpoints_1 = require("./endpoints/AuthEndpoints");
var DeviceEndpoints_1 = require("./endpoints/DeviceEndpoints");
var ExchangeRateEndpoints_1 = require("./endpoints/ExchangeRateEndpoints");
var GroupEndpoints_1 = require("./endpoints/GroupEndpoints");
var MeasureEndpoints_1 = require("./endpoints/MeasureEndpoints");
var SampleEndpoints_1 = require("./endpoints/SampleEndpoints");
var NervApiClient = (function () {
    function NervApiClient(baseUrl, options) {
        if (options === void 0) { options = {}; }
        this.requester = new Requester_1.Requester(tslib_1.__assign({ baseUrl: baseUrl }, options));
        this.agents = new AgentEndpoints_1.AgentEndpoints(this.requester);
        this.auth = new AuthEndpoints_1.AuthEndpoints(this.requester);
        this.devices = new DeviceEndpoints_1.DeviceEndpoints(this.requester);
        this.exchangeRates = new ExchangeRateEndpoints_1.ExchangeRateEndpoints(this.requester);
        this.groups = new GroupEndpoints_1.GroupEndpoints(this.requester);
        this.measures = new MeasureEndpoints_1.MeasureEndpoints(this.requester);
        this.samples = new SampleEndpoints_1.SampleEndpoints(this.requester);
    }
    NervApiClient.prototype.setCredentials = function (credentials) {
        this.requester.setCredentials(credentials);
    };
    return NervApiClient;
}());
exports.NervApiClient = NervApiClient;
exports.default = NervApiClient;
//# sourceMappingURL=NervApiClient.js.map