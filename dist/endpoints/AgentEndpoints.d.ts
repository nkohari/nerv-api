import { Requester } from '../framework/Requester';
import { Agent } from '../structures/Agent';
export declare class AgentEndpoints {
    requester: Requester;
    constructor(requester: Requester);
    get(groupid: string, agentid: string): Promise<Agent>;
    update(groupid: string, agentid: string, data: Partial<Agent>): Promise<Agent>;
    list(): Promise<Agent[]>;
    listByGroup(groupid: string): Promise<Agent[]>;
}
