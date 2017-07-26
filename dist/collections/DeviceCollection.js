"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Collection_1 = require("../framework/Collection");
class DeviceCollection extends Collection_1.Collection {
    forGroup(groupid) {
        return this.filter(item => item.groupid === groupid);
    }
    forAgent(agentid) {
        return this.filter(item => item.agentid === agentid);
    }
}
exports.DeviceCollection = DeviceCollection;
//# sourceMappingURL=DeviceCollection.js.map