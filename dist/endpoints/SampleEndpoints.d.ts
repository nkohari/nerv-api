import { ApiClient } from '../ApiClient';
import { Sample } from '../structures/Sample';
export declare class SampleEndpoints {
    client: ApiClient;
    constructor(client: ApiClient);
    listByUser(period: string): Promise<Sample[]>;
    listByGroup(groupid: string, period: string): Promise<Sample[]>;
    listByAgent(groupid: string, agentid: string, period: string): Promise<Sample[]>;
    listByDevice(groupid: string, agentid: string, deviceid: string, period: string): Promise<Sample[]>;
}
