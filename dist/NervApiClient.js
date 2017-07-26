"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Requester_1 = require("./framework/Requester");
const AgentEndpoints_1 = require("./endpoints/AgentEndpoints");
const AuthEndpoints_1 = require("./endpoints/AuthEndpoints");
const DeviceEndpoints_1 = require("./endpoints/DeviceEndpoints");
const ExchangeRateEndpoints_1 = require("./endpoints/ExchangeRateEndpoints");
const GroupEndpoints_1 = require("./endpoints/GroupEndpoints");
const MeasureEndpoints_1 = require("./endpoints/MeasureEndpoints");
const SampleEndpoints_1 = require("./endpoints/SampleEndpoints");
class NervApiClient {
    constructor(baseUrl, options = {}) {
        this.requester = new Requester_1.Requester({
            baseUrl,
            scheme: options.scheme || 'https',
            credentials: options.credentials
        });
        this.agents = new AgentEndpoints_1.AgentEndpoints(this.requester);
        this.auth = new AuthEndpoints_1.AuthEndpoints(this.requester);
        this.devices = new DeviceEndpoints_1.DeviceEndpoints(this.requester);
        this.exchangeRates = new ExchangeRateEndpoints_1.ExchangeRateEndpoints(this.requester);
        this.groups = new GroupEndpoints_1.GroupEndpoints(this.requester);
        this.measures = new MeasureEndpoints_1.MeasureEndpoints(this.requester);
        this.samples = new SampleEndpoints_1.SampleEndpoints(this.requester);
    }
    setCredentials(credentials) {
        this.requester.setCredentials(credentials);
    }
}
exports.NervApiClient = NervApiClient;
exports.default = NervApiClient;
//# sourceMappingURL=NervApiClient.js.map