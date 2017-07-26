"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Model {
    constructor(data = {}) {
        this.id = data.id;
        this.created = data.created ? new Date(data.created) : null;
        this.updated = data.updated ? new Date(data.updated) : null;
        this.deleted = data.deleted ? new Date(data.deleted) : null;
        this.version = data.version;
    }
}
exports.Model = Model;
//# sourceMappingURL=Model.js.map