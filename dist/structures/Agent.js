"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Model_1 = require("../framework/Model");
class Agent extends Model_1.Model {
    constructor(data = {}) {
        super(data);
        this.name = data.name;
        this.groupid = data.groupid;
    }
}
exports.Agent = Agent;
//# sourceMappingURL=Agent.js.map