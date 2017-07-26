"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Collection_1 = require("../framework/Collection");
class AgentCollection extends Collection_1.Collection {
    forGroup(groupid) {
        return this.filter(item => item.groupid === groupid);
    }
}
exports.AgentCollection = AgentCollection;
//# sourceMappingURL=AgentCollection.js.map