"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Measure_1 = require("../structures/Measure");
const createMany = result => result.measures.map(item => new Measure_1.Measure(item));
class MeasureEndpoints {
    constructor(requester) {
        this.requester = requester;
    }
    listByGroup(groupid) {
        const url = `/groups/${groupid}/measures`;
        return this.requester.get(url).then(createMany);
    }
    listByAgent(groupid, agentid) {
        const url = `/groups/${groupid}/agents/${agentid}/measures`;
        return this.requester.get(url).then(createMany);
    }
    listByDevice(groupid, agentid, deviceid) {
        const url = `/groups/${groupid}/agents/${agentid}/devices/${deviceid}/measures`;
        return this.requester.get(url).then(createMany);
    }
}
exports.MeasureEndpoints = MeasureEndpoints;
//# sourceMappingURL=MeasureEndpoints.js.map