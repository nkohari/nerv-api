"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Measure_1 = require("../structures/Measure");
var createMany = function (result) { return result.measures.map(function (item) { return new Measure_1.Measure(item); }); };
var MeasureEndpoints = (function () {
    function MeasureEndpoints(client) {
        this.client = client;
    }
    MeasureEndpoints.prototype.listByGroup = function (groupid) {
        var url = "/groups/" + groupid + "/measures";
        return this.client.get(url).then(createMany);
    };
    MeasureEndpoints.prototype.listByAgent = function (groupid, agentid) {
        var url = "/groups/" + groupid + "/agents/" + agentid + "/measures";
        return this.client.get(url).then(createMany);
    };
    MeasureEndpoints.prototype.listByDevice = function (groupid, agentid, deviceid) {
        var url = "/groups/" + groupid + "/agents/" + agentid + "/devices/" + deviceid + "/measures";
        return this.client.get(url).then(createMany);
    };
    return MeasureEndpoints;
}());
exports.MeasureEndpoints = MeasureEndpoints;
//# sourceMappingURL=MeasureEndpoints.js.map