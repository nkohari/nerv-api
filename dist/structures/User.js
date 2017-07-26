"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Model_1 = require("../framework/Model");
class User extends Model_1.Model {
    constructor(data = {}) {
        super(data);
        this.username = data.username;
        this.email = data.email;
        this.currency = data.currency;
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map