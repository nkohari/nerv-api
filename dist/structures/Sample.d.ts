import { HasIdentifier } from '../framework/HasIdentifier';
export declare class Sample implements HasIdentifier {
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
    constructor(data?: Partial<Sample>);
    toJSON(): {
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
        fanrpm: number;
        fanpercent: number;
    };
}
