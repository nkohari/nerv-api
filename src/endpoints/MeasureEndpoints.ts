import { Requester } from '../framework/Requester';
import { Measure } from '../structures/Measure';

const createMany = result => result.measures.map(item => new Measure(item));

export class MeasureEndpoints {

  requester: Requester;

  constructor(requester: Requester) {
    this.requester = requester;
  }

  listByGroup(groupid: string): Promise<Measure[]> {
    const url = `/groups/${groupid}/measures`;
    return this.requester.get(url).then(createMany);
  }

  listByAgent(groupid: string, agentid: string): Promise<Measure[]> {
    const url = `/groups/${groupid}/agents/${agentid}/measures`;
    return this.requester.get(url).then(createMany);
  }

  listByDevice(groupid: string, agentid: string, deviceid: string): Promise<Measure[]> {
    const url = `/groups/${groupid}/agents/${agentid}/devices/${deviceid}/measures`;
    return this.requester.get(url).then(createMany);
  }

}
