import { HasIdentifier } from '../framework/HasIdentifier';
export declare class Measure implements HasIdentifier {
    id: string;
    time: Date;
    groupid: string;
    agentid: string;
    deviceid: string;
    symbol: string;
    hashrate: number;
    load: number;
    power: number;
    coreclock: number;
    ramclock: number;
    temp: number;
    fanpercent: number;
    fanrpm: number;
    constructor(data?: Partial<Measure>);
    toJSON(): {
        id: string;
        time: Date;
        groupid: string;
        agentid: string;
        deviceid: string;
        symbol: string;
        hashrate: number;
        load: number;
        power: number;
        coreclock: number;
        ramclock: number;
        temp: number;
        fanrpm: number;
        fanpercent: number;
    };
}
