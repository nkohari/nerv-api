"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sample_1 = require("../structures/Sample");
const createMany = result => result.samples.map(item => new Sample_1.Sample(item));
class SampleEndpoints {
    constructor(requester) {
        this.requester = requester;
    }
    list(period) {
        const url = '/samples';
        const params = { period };
        return this.requester.get(url, { params }).then(createMany);
    }
    listByGroup(groupid, period) {
        const url = `/groups/${groupid}/samples`;
        const params = { period };
        return this.requester.get(url, { params }).then(createMany);
    }
    listByAgent(groupid, agentid, period) {
        const url = `/groups/${groupid}/agents/${agentid}/samples`;
        const params = { period };
        return this.requester.get(url, { params }).then(createMany);
    }
    listByDevice(groupid, agentid, deviceid, period) {
        const url = `/groups/${groupid}/agents/${agentid}/devices/${deviceid}/samples`;
        const params = { period };
        return this.requester.get(url, { params }).then(createMany);
    }
}
exports.SampleEndpoints = SampleEndpoints;
//# sourceMappingURL=SampleEndpoints.js.map