import { Requester } from '../framework/Requester';
import { Sample } from '../structures/Sample';

const createMany = result => result.samples.map(item => new Sample(item));

export class SampleEndpoints {

  requester: Requester;

  constructor(requester: Requester) {
    this.requester = requester;
  }

  listByUser(period: string): Promise<Sample[]> {
    const url = '/samples';
    const params = { period };
    return this.requester.get(url, { params }).then(createMany);
  }

  listByGroup(groupid: string, period: string): Promise<Sample[]> {
    const url = `/groups/${groupid}/samples`;
    const params = { period };
    return this.requester.get(url, { params }).then(createMany);
  }

  listByAgent(groupid: string, agentid: string, period: string): Promise<Sample[]> {
    const url = `/groups/${groupid}/agents/${agentid}/samples`;
    const params = { period };
    return this.requester.get(url, { params }).then(createMany);
  }

  listByDevice(groupid: string, agentid: string, deviceid: string, period: string): Promise<Sample[]> {
    const url = `/groups/${groupid}/agents/${agentid}/devices/${deviceid}/samples`;
    const params = { period };
    return this.requester.get(url, { params }).then(createMany);
  }

}
