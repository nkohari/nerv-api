"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Device_1 = require("../structures/Device");
const createOne = result => new Device_1.Device(result.device);
const createMany = result => result.devices.map(item => new Device_1.Device(item));
class DeviceEndpoints {
    constructor(requester) {
        this.requester = requester;
    }
    get(groupid, agentid, deviceid) {
        const url = `/groups/${groupid}/agents/${agentid}/devices/${deviceid}`;
        return this.requester.get(url).then(createOne);
    }
    update(groupid, agentid, deviceid, data) {
        const url = `/groups/${groupid}/agents/${agentid}/devices/${deviceid}`;
        return this.requester.put(url, { data }).then(createOne);
    }
    listByGroup(groupid) {
        const url = `/groups/${groupid}/devices`;
        return this.requester.get(url).then(createMany);
    }
    listByAgent(groupid, agentid) {
        const url = `/groups/${groupid}/agents/${agentid}/devices`;
        return this.requester.get(url).then(createMany);
    }
}
exports.DeviceEndpoints = DeviceEndpoints;
//# sourceMappingURL=DeviceEndpoints.js.map