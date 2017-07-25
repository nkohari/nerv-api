"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Measure = (function () {
    function Measure(data) {
        if (data === void 0) { data = {}; }
        this.id = data.id;
        this.time = new Date(data.time);
        this.groupid = data.groupid;
        this.agentid = data.agentid;
        this.deviceid = data.deviceid;
        this.symbol = data.symbol;
        this.hashrate = data.hashrate;
        this.load = data.load;
        this.power = data.power;
        this.coreclock = data.coreclock;
        this.ramclock = data.ramclock;
        this.temp = data.temp;
        this.fanrpm = data.fanrpm;
        this.fanpercent = data.fanpercent;
    }
    Measure.prototype.toJSON = function () {
        return {
            id: this.id,
            time: this.time,
            groupid: this.groupid,
            agentid: this.agentid,
            deviceid: this.deviceid,
            symbol: this.symbol,
            hashrate: this.hashrate,
            load: this.load,
            power: this.power,
            coreclock: this.coreclock,
            ramclock: this.ramclock,
            temp: this.temp,
            fanrpm: this.fanrpm,
            fanpercent: this.fanpercent
        };
    };
    return Measure;
}());
exports.Measure = Measure;
//# sourceMappingURL=Measure.js.map