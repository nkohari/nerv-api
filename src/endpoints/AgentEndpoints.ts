import { Requester } from '../framework/Requester';
import { Agent } from '../structures/Agent';

const createOne = result => new Agent(result.agent);
const createMany = result => result.agents.map(item => new Agent(item));

export class AgentEndpoints {

  requester: Requester;

  constructor(requester: Requester) {
    this.requester = requester;
  }

  get(groupid: string, agentid: string): Promise<Agent> {
    const url = `/groups/${groupid}/agents/${agentid}`;
    return this.requester.get(url).then(createOne);
  }

  update(groupid: string, agentid: string, data: Partial<Agent>): Promise<Agent> {
    const url = `/groups/${groupid}/agents/${agentid}`;
    return this.requester.put(url, { data }).then(createOne);
  }

  list(): Promise<Agent[]> {
    const url = '/agents';
    return this.requester.get(url).then(createMany);
  }

  listByGroup(groupid: string): Promise<Agent[]> {
    const url = `/groups/${groupid}/agents`;
    return this.requester.get(url).then(createMany);
  }

}
