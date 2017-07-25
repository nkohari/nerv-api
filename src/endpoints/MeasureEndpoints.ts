import { ApiClient } from '../ApiClient';
import { Measure } from '../structures/Measure';

const createMany = result => result.measures.map(item => new Measure(item));

export class MeasureEndpoints {

  client: ApiClient;

  constructor(client: ApiClient) {
    this.client = client;
  }

  listByGroup(groupid: string): Promise<Measure[]> {
    const url = `/groups/${groupid}/measures`;
    return this.client.get(url).then(createMany);
  }

  listByAgent(groupid: string, agentid: string): Promise<Measure[]> {
    const url = `/groups/${groupid}/agents/${agentid}/measures`;
    return this.client.get(url).then(createMany);
  }

  listByDevice(groupid: string, agentid: string, deviceid: string): Promise<Measure[]> {
    const url = `/groups/${groupid}/agents/${agentid}/devices/${deviceid}/measures`;
    return this.client.get(url).then(createMany);
  }

}
