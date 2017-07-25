import { Requester } from '../framework/Requester';
import { Device } from '../structures/Device';

const createOne = result => new Device(result.device);
const createMany = result => result.devices.map(item => new Device(item));

export class DeviceEndpoints {

  requester: Requester;

  constructor(requester: Requester) {
    this.requester = requester;
  }

  get(groupid: string, agentid: string, deviceid: string): Promise<Device> {
    const url = `/groups/${groupid}/agents/${agentid}/devices/${deviceid}`;
    return this.requester.get(url).then(createOne);
  }

  update(groupid: string, agentid: string, deviceid: string, data: Partial<Device>): Promise<Device> {
    const url = `/groups/${groupid}/agents/${agentid}/devices/${deviceid}`;
    return this.requester.put(url, { data }).then(createOne);
  }

  listByGroup(groupid: string): Promise<Device[]> {
    const url = `/groups/${groupid}/devices`;
    return this.requester.get(url).then(createMany);
  }

  listByAgent(groupid: string, agentid: string): Promise<Device[]> {
    const url = `/groups/${groupid}/agents/${agentid}/devices`;
    return this.requester.get(url).then(createMany);
  }

}
