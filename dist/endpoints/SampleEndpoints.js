"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sample_1 = require("../structures/Sample");
var createMany = function (result) { return result.samples.map(function (item) { return new Sample_1.Sample(item); }); };
var SampleEndpoints = (function () {
    function SampleEndpoints(requester) {
        this.requester = requester;
    }
    SampleEndpoints.prototype.list = function (period) {
        var url = '/samples';
        var params = { period: period };
        return this.requester.get(url, { params: params }).then(createMany);
    };
    SampleEndpoints.prototype.listByGroup = function (groupid, period) {
        var url = "/groups/" + groupid + "/samples";
        var params = { period: period };
        return this.requester.get(url, { params: params }).then(createMany);
    };
    SampleEndpoints.prototype.listByAgent = function (groupid, agentid, period) {
        var url = "/groups/" + groupid + "/agents/" + agentid + "/samples";
        var params = { period: period };
        return this.requester.get(url, { params: params }).then(createMany);
    };
    SampleEndpoints.prototype.listByDevice = function (groupid, agentid, deviceid, period) {
        var url = "/groups/" + groupid + "/agents/" + agentid + "/devices/" + deviceid + "/samples";
        var params = { period: period };
        return this.requester.get(url, { params: params }).then(createMany);
    };
    return SampleEndpoints;
}());
exports.SampleEndpoints = SampleEndpoints;
//# sourceMappingURL=SampleEndpoints.js.map