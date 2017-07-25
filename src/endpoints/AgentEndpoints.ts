import { ApiClient } from '../ApiClient';
import { Agent } from '../structures/Agent';

const createOne = result => new Agent(result.agent);
const createMany = result => result.agents.map(item => new Agent(item));

export class AgentEndpoints {

  client: ApiClient;

  constructor(client: ApiClient) {
    this.client = client;
  }

  get(groupid: string, agentid: string): Promise<Agent> {
    const url = `/groups/${groupid}/agents/${agentid}`;
    return this.client.get(url).then(createOne);
  }

  update(groupid: string, agentid: string, data: Partial<Agent>): Promise<Agent> {
    const url = `/groups/${groupid}/agents/${agentid}`;
    return this.client.put(url, { data }).then(createOne);
  }

  list(): Promise<Agent[]> {
    const url = '/agents';
    return this.client.get(url).then(createMany);
  }

  listByGroup(groupid: string): Promise<Agent[]> {
    const url = `/groups/${groupid}/agents`;
    return this.client.get(url).then(createMany);
  }

}
