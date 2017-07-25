"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var AgentEndpoints_1 = require("./endpoints/AgentEndpoints");
var AuthEndpoints_1 = require("./endpoints/AuthEndpoints");
var DeviceEndpoints_1 = require("./endpoints/DeviceEndpoints");
var ExchangeRateEndpoints_1 = require("./endpoints/ExchangeRateEndpoints");
var GroupEndpoints_1 = require("./endpoints/GroupEndpoints");
var MeasureEndpoints_1 = require("./endpoints/MeasureEndpoints");
var SampleEndpoints_1 = require("./endpoints/SampleEndpoints");
var ApiClient = (function () {
    function ApiClient(baseUrl, options) {
        if (options === void 0) { options = {}; }
        this.baseUrl = baseUrl;
        this.scheme = options.scheme || 'https';
        this.agents = new AgentEndpoints_1.AgentEndpoints(this);
        this.auth = new AuthEndpoints_1.AuthEndpoints(this);
        this.devices = new DeviceEndpoints_1.DeviceEndpoints(this);
        this.exchangeRates = new ExchangeRateEndpoints_1.ExchangeRateEndpoints(this);
        this.groups = new GroupEndpoints_1.GroupEndpoints(this);
        this.measures = new MeasureEndpoints_1.MeasureEndpoints(this);
        this.samples = new SampleEndpoints_1.SampleEndpoints(this);
    }
    ApiClient.prototype.setCredentials = function (credentials) {
        this.credentials = credentials;
    };
    ApiClient.prototype.get = function (path, config) {
        return axios_1.default({
            method: 'get',
            url: this.getUrl(path),
            headers: this.getHeaders(),
            params: config.params
        }).then(function (response) { return response.data; });
    };
    ApiClient.prototype.post = function (path, config) {
        return axios_1.default({
            method: 'post',
            url: this.getUrl(path),
            headers: this.getHeaders(),
            data: config.data
        }).then(function (response) { return response.data; });
    };
    ApiClient.prototype.put = function (path, config) {
        return axios_1.default({
            method: 'put',
            url: this.getUrl(path),
            headers: this.getHeaders(),
            data: config.data
        }).then(function (response) { return response.data; });
    };
    ApiClient.prototype.getHeaders = function () {
        return {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: this.credentials ? "Bearer " + this.credentials.token : null
        };
    };
    ApiClient.prototype.getUrl = function (path) {
        return this.scheme + "://" + this.baseUrl + path;
    };
    return ApiClient;
}());
exports.ApiClient = ApiClient;
//# sourceMappingURL=ApiClient.js.map