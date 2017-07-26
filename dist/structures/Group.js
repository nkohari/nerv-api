"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Model_1 = require("../framework/Model");
class Group extends Model_1.Model {
    constructor(data = {}) {
        super(data);
        this.name = data.name;
    }
}
exports.Group = Group;
//# sourceMappingURL=Group.js.map