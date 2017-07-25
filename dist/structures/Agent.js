"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Model_1 = require("../framework/Model");
var Agent = (function (_super) {
    tslib_1.__extends(Agent, _super);
    function Agent(data) {
        if (data === void 0) { data = {}; }
        var _this = _super.call(this, data) || this;
        _this.name = data.name;
        _this.groupid = data.groupid;
        return _this;
    }
    return Agent;
}(Model_1.Model));
exports.Agent = Agent;
//# sourceMappingURL=Agent.js.map