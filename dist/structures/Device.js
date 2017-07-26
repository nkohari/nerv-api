"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Model_1 = require("../framework/Model");
class Device extends Model_1.Model {
    constructor(data = {}) {
        super(data);
        this.groupid = data.groupid;
        this.agentid = data.agentid;
        this.type = data.type;
        this.name = data.name;
        this.vendor = data.vendor;
        this.model = data.model;
    }
}
exports.Device = Device;
//# sourceMappingURL=Device.js.map