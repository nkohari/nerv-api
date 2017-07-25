import { ApiClient } from '../ApiClient';
import { Device } from '../structures/Device';

const createOne = result => new Device(result.device);
const createMany = result => result.devices.map(item => new Device(item));

export class DeviceEndpoints {

  client: ApiClient;

  constructor(client: ApiClient) {
    this.client = client;
  }

  get(groupid: string, agentid: string, deviceid: string): Promise<Device> {
    const url = `/groups/${groupid}/agents/${agentid}/devices/${deviceid}`;
    return this.client.get(url).then(createOne);
  }

  update(groupid: string, agentid: string, deviceid: string, data: Partial<Device>): Promise<Device> {
    const url = `/groups/${groupid}/agents/${agentid}/devices/${deviceid}`;
    return this.client.put(url, { data }).then(createOne);
  }

  listByGroup(groupid: string): Promise<Device[]> {
    const url = `/groups/${groupid}/devices`;
    return this.client.get(url).then(createMany);
  }

  listByAgent(groupid: string, agentid: string): Promise<Device[]> {
    const url = `/groups/${groupid}/agents/${agentid}/devices`;
    return this.client.get(url).then(createMany);
  }

}
