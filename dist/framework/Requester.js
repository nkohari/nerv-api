"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
class Requester {
    constructor(options = {}) {
        this.scheme = options.scheme;
        this.baseUrl = options.baseUrl;
        this.credentials = options.credentials;
    }
    setCredentials(credentials) {
        this.credentials = credentials;
    }
    get(path, config = {}) {
        return axios_1.default({
            method: 'get',
            url: this.getUrl(path),
            headers: this.getHeaders(),
            params: config.params
        }).then(response => response.data);
    }
    post(path, config) {
        return axios_1.default({
            method: 'post',
            url: this.getUrl(path),
            headers: this.getHeaders(),
            data: config.data
        }).then(response => response.data);
    }
    put(path, config) {
        return axios_1.default({
            method: 'put',
            url: this.getUrl(path),
            headers: this.getHeaders(),
            data: config.data
        }).then(response => response.data);
    }
    getHeaders() {
        return {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: this.credentials ? `Bearer ${this.credentials.token}` : null
        };
    }
    getUrl(path) {
        return `${this.scheme}://${this.baseUrl}${path}`;
    }
}
exports.Requester = Requester;
exports.default = Requester;
//# sourceMappingURL=Requester.js.map