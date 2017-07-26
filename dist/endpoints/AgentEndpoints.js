"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Agent_1 = require("../structures/Agent");
const createOne = result => new Agent_1.Agent(result.agent);
const createMany = result => result.agents.map(item => new Agent_1.Agent(item));
class AgentEndpoints {
    constructor(requester) {
        this.requester = requester;
    }
    get(groupid, agentid) {
        const url = `/groups/${groupid}/agents/${agentid}`;
        return this.requester.get(url).then(createOne);
    }
    update(groupid, agentid, data) {
        const url = `/groups/${groupid}/agents/${agentid}`;
        return this.requester.put(url, { data }).then(createOne);
    }
    list() {
        const url = '/agents';
        return this.requester.get(url).then(createMany);
    }
    listByGroup(groupid) {
        const url = `/groups/${groupid}/agents`;
        return this.requester.get(url).then(createMany);
    }
}
exports.AgentEndpoints = AgentEndpoints;
//# sourceMappingURL=AgentEndpoints.js.map