"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Group_1 = require("../structures/Group");
var createOne = function (result) { return new Group_1.Group(result.group); };
var createMany = function (result) { return result.groups.map(function (item) { return new Group_1.Group(item); }); };
var GroupEndpoints = (function () {
    function GroupEndpoints(requester) {
        this.requester = requester;
    }
    GroupEndpoints.prototype.get = function (groupid) {
        var url = "/groups/" + groupid;
        return this.requester.get(url).then(createOne);
    };
    GroupEndpoints.prototype.update = function (groupid, data) {
        var url = "/groups/" + groupid;
        return this.requester.put(url, { data: data }).then(createOne);
    };
    GroupEndpoints.prototype.list = function () {
        var url = '/groups';
        return this.requester.get(url).then(createMany);
    };
    return GroupEndpoints;
}());
exports.GroupEndpoints = GroupEndpoints;
//# sourceMappingURL=GroupEndpoints.js.map