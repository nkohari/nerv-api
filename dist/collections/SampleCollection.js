"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Collection_1 = require("../framework/Collection");
class SampleCollection extends Collection_1.Collection {
    forGroup(groupid) {
        return this.filter(item => item.groupid === groupid);
    }
    forAgent(agentid) {
        return this.filter(item => item.agentid === agentid);
    }
    forDevice(deviceid) {
        return this.filter(item => item.deviceid === deviceid);
    }
}
exports.SampleCollection = SampleCollection;
//# sourceMappingURL=SampleCollection.js.map