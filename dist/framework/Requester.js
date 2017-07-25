"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var Requester = (function () {
    function Requester(options) {
        if (options === void 0) { options = {}; }
        this.scheme = options.scheme;
        this.baseUrl = options.baseUrl;
        this.credentials = options.credentials;
    }
    Requester.prototype.setCredentials = function (credentials) {
        this.credentials = credentials;
    };
    Requester.prototype.get = function (path, config) {
        return axios_1.default({
            method: 'get',
            url: this.getUrl(path),
            headers: this.getHeaders(),
            params: config.params
        }).then(function (response) { return response.data; });
    };
    Requester.prototype.post = function (path, config) {
        return axios_1.default({
            method: 'post',
            url: this.getUrl(path),
            headers: this.getHeaders(),
            data: config.data
        }).then(function (response) { return response.data; });
    };
    Requester.prototype.put = function (path, config) {
        return axios_1.default({
            method: 'put',
            url: this.getUrl(path),
            headers: this.getHeaders(),
            data: config.data
        }).then(function (response) { return response.data; });
    };
    Requester.prototype.getHeaders = function () {
        return {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: this.credentials ? "Bearer " + this.credentials.token : null
        };
    };
    Requester.prototype.getUrl = function (path) {
        return this.scheme + "://" + this.baseUrl + path;
    };
    return Requester;
}());
exports.Requester = Requester;
exports.default = Requester;
//# sourceMappingURL=Requester.js.map