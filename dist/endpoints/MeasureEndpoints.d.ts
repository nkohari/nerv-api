import { ApiClient } from '../ApiClient';
import { Measure } from '../structures/Measure';
export declare class MeasureEndpoints {
    client: ApiClient;
    constructor(client: ApiClient);
    listByGroup(groupid: string): Promise<Measure[]>;
    listByAgent(groupid: string, agentid: string): Promise<Measure[]>;
    listByDevice(groupid: string, agentid: string, deviceid: string): Promise<Measure[]>;
}
