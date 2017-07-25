"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Model_1 = require("../framework/Model");
var Device = (function (_super) {
    tslib_1.__extends(Device, _super);
    function Device(data) {
        if (data === void 0) { data = {}; }
        var _this = _super.call(this, data) || this;
        _this.groupid = data.groupid;
        _this.agentid = data.agentid;
        _this.type = data.type;
        _this.name = data.name;
        _this.vendor = data.vendor;
        _this.model = data.model;
        return _this;
    }
    return Device;
}(Model_1.Model));
exports.Device = Device;
//# sourceMappingURL=Device.js.map