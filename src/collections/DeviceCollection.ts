import { Device } from '../structures/Device';
import { Collection } from '../framework/Collection';

export class DeviceCollection extends Collection<Device> {

  forGroup(groupid): DeviceCollection {
    return this.filter(item => item.groupid === groupid);
  }

  forAgent(agentid): DeviceCollection {
    return this.filter(item => item.agentid === agentid);
  }

}
