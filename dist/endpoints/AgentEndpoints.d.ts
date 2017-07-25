import { ApiClient } from '../ApiClient';
import { Agent } from '../structures/Agent';
export declare class AgentEndpoints {
    client: ApiClient;
    constructor(client: ApiClient);
    get(groupid: string, agentid: string): Promise<Agent>;
    update(groupid: string, agentid: string, data: Partial<Agent>): Promise<Agent>;
    list(): Promise<Agent[]>;
    listByGroup(groupid: string): Promise<Agent[]>;
}
