"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Model_1 = require("../framework/Model");
var User = (function (_super) {
    tslib_1.__extends(User, _super);
    function User(data) {
        if (data === void 0) { data = {}; }
        var _this = _super.call(this, data) || this;
        _this.username = data.username;
        _this.email = data.email;
        _this.currency = data.currency;
        return _this;
    }
    return User;
}(Model_1.Model));
exports.User = User;
//# sourceMappingURL=User.js.map