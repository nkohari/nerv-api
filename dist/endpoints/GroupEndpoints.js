"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Group_1 = require("../structures/Group");
const createOne = result => new Group_1.Group(result.group);
const createMany = result => result.groups.map(item => new Group_1.Group(item));
class GroupEndpoints {
    constructor(requester) {
        this.requester = requester;
    }
    get(groupid) {
        const url = `/groups/${groupid}`;
        return this.requester.get(url).then(createOne);
    }
    update(groupid, data) {
        const url = `/groups/${groupid}`;
        return this.requester.put(url, { data }).then(createOne);
    }
    list() {
        const url = '/groups';
        return this.requester.get(url).then(createMany);
    }
}
exports.GroupEndpoints = GroupEndpoints;
//# sourceMappingURL=GroupEndpoints.js.map