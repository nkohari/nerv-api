"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Model_1 = require("../framework/Model");
var Group = (function (_super) {
    tslib_1.__extends(Group, _super);
    function Group(data) {
        if (data === void 0) { data = {}; }
        var _this = _super.call(this, data) || this;
        _this.name = data.name;
        return _this;
    }
    return Group;
}(Model_1.Model));
exports.Group = Group;
//# sourceMappingURL=Group.js.map