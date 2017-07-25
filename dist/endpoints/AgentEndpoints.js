"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Agent_1 = require("../structures/Agent");
var createOne = function (result) { return new Agent_1.Agent(result.agent); };
var createMany = function (result) { return result.agents.map(function (item) { return new Agent_1.Agent(item); }); };
var AgentEndpoints = (function () {
    function AgentEndpoints(client) {
        this.client = client;
    }
    AgentEndpoints.prototype.get = function (groupid, agentid) {
        var url = "/groups/" + groupid + "/agents/" + agentid;
        return this.client.get(url).then(createOne);
    };
    AgentEndpoints.prototype.update = function (groupid, agentid, data) {
        var url = "/groups/" + groupid + "/agents/" + agentid;
        return this.client.put(url, { data: data }).then(createOne);
    };
    AgentEndpoints.prototype.list = function () {
        var url = '/agents';
        return this.client.get(url).then(createMany);
    };
    AgentEndpoints.prototype.listByGroup = function (groupid) {
        var url = "/groups/" + groupid + "/agents";
        return this.client.get(url).then(createMany);
    };
    return AgentEndpoints;
}());
exports.AgentEndpoints = AgentEndpoints;
//# sourceMappingURL=AgentEndpoints.js.map