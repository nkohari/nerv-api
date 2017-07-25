"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Device_1 = require("../structures/Device");
var createOne = function (result) { return new Device_1.Device(result.device); };
var createMany = function (result) { return result.devices.map(function (item) { return new Device_1.Device(item); }); };
var DeviceEndpoints = (function () {
    function DeviceEndpoints(requester) {
        this.requester = requester;
    }
    DeviceEndpoints.prototype.get = function (groupid, agentid, deviceid) {
        var url = "/groups/" + groupid + "/agents/" + agentid + "/devices/" + deviceid;
        return this.requester.get(url).then(createOne);
    };
    DeviceEndpoints.prototype.update = function (groupid, agentid, deviceid, data) {
        var url = "/groups/" + groupid + "/agents/" + agentid + "/devices/" + deviceid;
        return this.requester.put(url, { data: data }).then(createOne);
    };
    DeviceEndpoints.prototype.listByGroup = function (groupid) {
        var url = "/groups/" + groupid + "/devices";
        return this.requester.get(url).then(createMany);
    };
    DeviceEndpoints.prototype.listByAgent = function (groupid, agentid) {
        var url = "/groups/" + groupid + "/agents/" + agentid + "/devices";
        return this.requester.get(url).then(createMany);
    };
    return DeviceEndpoints;
}());
exports.DeviceEndpoints = DeviceEndpoints;
//# sourceMappingURL=DeviceEndpoints.js.map