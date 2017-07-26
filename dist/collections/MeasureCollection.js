"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Collection_1 = require("../framework/Collection");
class MeasureCollection extends Collection_1.Collection {
    forGroup(groupid) {
        return this.filter(item => item.groupid === groupid);
    }
    forAgent(agentid) {
        return this.filter(item => item.agentid === agentid);
    }
    forDevice(deviceid) {
        return this.filter(item => item.deviceid === deviceid);
    }
    mostRecentForDevice(deviceid) {
        return this.forDevice(deviceid).reduce((winner, item) => {
            return (!winner || item.time.valueOf() > winner.time.valueOf()) ? item : winner;
        }, null);
    }
    mostRecentForAgentByDevice(agentid) {
        return this.forAgent(agentid).reduce((winners, item) => {
            const winner = winners[item.deviceid];
            if (!winner || item.time.valueOf() > winner.time.valueOf()) {
                winners[item.deviceid] = item;
            }
            return winners;
        }, {});
    }
}
exports.MeasureCollection = MeasureCollection;
//# sourceMappingURL=MeasureCollection.js.map