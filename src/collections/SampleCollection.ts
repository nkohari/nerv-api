import { Sample } from '../structures/Sample';
import { Collection } from '../framework/Collection';

export class SampleCollection extends Collection<Sample> {

  forGroup(groupid): SampleCollection {
    return this.filter(item => item.groupid === groupid);
  }

  forAgent(agentid): SampleCollection {
    return this.filter(item => item.agentid === agentid);
  }

  forDevice(deviceid): SampleCollection {
    return this.filter(item => item.deviceid === deviceid);
  }

}
