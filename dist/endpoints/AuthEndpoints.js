"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Credentials_1 = require("../structures/Credentials");
var User_1 = require("../structures/User");
var createOne = function (result) { return new Credentials_1.Credentials({ token: result.token, user: new User_1.User(result.user) }); };
var AuthEndpoints = (function () {
    function AuthEndpoints(requester) {
        this.requester = requester;
    }
    AuthEndpoints.prototype.login = function (data) {
        return this.requester.post('/auth', { data: data }).then(createOne);
    };
    AuthEndpoints.prototype.getToken = function () {
        return this.requester.get('/auth').then(createOne);
    };
    AuthEndpoints.prototype.createUser = function (data) {
        return this.requester.post('/users', { data: data }).then(createOne);
    };
    return AuthEndpoints;
}());
exports.AuthEndpoints = AuthEndpoints;
//# sourceMappingURL=AuthEndpoints.js.map