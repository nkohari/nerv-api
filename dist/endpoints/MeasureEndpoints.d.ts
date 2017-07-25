import { Requester } from '../framework/Requester';
import { Measure } from '../structures/Measure';
export declare class MeasureEndpoints {
    requester: Requester;
    constructor(requester: Requester);
    listByGroup(groupid: string): Promise<Measure[]>;
    listByAgent(groupid: string, agentid: string): Promise<Measure[]>;
    listByDevice(groupid: string, agentid: string, deviceid: string): Promise<Measure[]>;
}
