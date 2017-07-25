import { Requester } from '../framework/Requester';
import { Sample } from '../structures/Sample';
export declare class SampleEndpoints {
    requester: Requester;
    constructor(requester: Requester);
    listByUser(period: string): Promise<Sample[]>;
    listByGroup(groupid: string, period: string): Promise<Sample[]>;
    listByAgent(groupid: string, agentid: string, period: string): Promise<Sample[]>;
    listByDevice(groupid: string, agentid: string, deviceid: string, period: string): Promise<Sample[]>;
}
