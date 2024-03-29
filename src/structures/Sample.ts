import { HasIdentifier } from '../framework/HasIdentifier';

export class Sample implements HasIdentifier {

  id: string;
  time: Date;
  groupid: string;
  agentid: string;
  deviceid: string;
  symbol: string;
  hashrate: number;
  coins: number;
  load: number;
  power: number;
  coreclock: number;
  ramclock: number;
  temp: number;
  fanpercent: number;
  fanrpm: number;

  constructor(data: Partial<Sample> = {}) {
    this.id = data.id;
    this.time = new Date(data.time);
    this.groupid = data.groupid;
    this.agentid = data.agentid;
    this.deviceid = data.deviceid;
    this.symbol = data.symbol;
    this.hashrate = data.hashrate;
    this.coins = data.coins;
    this.load = data.load;
    this.power = data.power;
    this.coreclock = data.coreclock;
    this.ramclock = data.ramclock;
    this.temp = data.temp;
    this.fanrpm = data.fanrpm;
    this.fanpercent = data.fanpercent;
  }

  toJSON() {
    return {
      id: this.id,
      time: this.time,
      groupid: this.groupid,
      agentid: this.agentid,
      deviceid: this.deviceid,
      symbol: this.symbol,
      hashrate: this.hashrate,
      coins: this.coins,
      load: this.load,
      power: this.power,
      coreclock: this.coreclock,
      ramclock: this.ramclock,
      temp: this.temp,
      fanrpm: this.fanrpm,
      fanpercent: this.fanpercent
    };
  }

}
