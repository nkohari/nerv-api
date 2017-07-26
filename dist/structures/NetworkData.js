"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NetworkData {
    constructor(data = {}) {
        this.id = data.id;
        this.time = new Date(data.time);
        this.symbol = data.symbol;
        this.algorithm = data.algorithm;
        this.blockreward = data.blockreward;
        this.blocktime = data.blocktime;
        this.networkhashrate = data.networkhashrate;
    }
}
exports.NetworkData = NetworkData;
//# sourceMappingURL=NetworkData.js.map