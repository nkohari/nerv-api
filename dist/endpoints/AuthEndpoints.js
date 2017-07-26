"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Credentials_1 = require("../structures/Credentials");
const User_1 = require("../structures/User");
const createOne = result => new Credentials_1.Credentials({ token: result.token, user: new User_1.User(result.user) });
class AuthEndpoints {
    constructor(requester) {
        this.requester = requester;
    }
    login(data) {
        return this.requester.post('/auth', { data }).then(createOne);
    }
    getToken() {
        return this.requester.get('/auth').then(createOne);
    }
    createUser(data) {
        return this.requester.post('/users', { data }).then(createOne);
    }
}
exports.AuthEndpoints = AuthEndpoints;
//# sourceMappingURL=AuthEndpoints.js.map