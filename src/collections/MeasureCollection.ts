import { Measure } from '../structures/Measure';
import { Collection } from '../framework/Collection';

export class MeasureCollection extends Collection<Measure> {

  forGroup(groupid: string): MeasureCollection {
    return this.filter(item => item.groupid === groupid);
  }

  forAgent(agentid: string): MeasureCollection {
    return this.filter(item => item.agentid === agentid);
  }

  forDevice(deviceid: string): MeasureCollection {
    return this.filter(item => item.deviceid === deviceid);
  }

  mostRecentForDevice(deviceid: string): Measure {
    return this.forDevice(deviceid).reduce((winner, item) => {
      return (!winner || item.time.valueOf() > winner.time.valueOf()) ? item : winner;
    }, null);
  }

  mostRecentForAgentByDevice(agentid: string): { [deviceid: string]: Measure } {
    return this.forAgent(agentid).reduce((winners, item) => {
      const winner = winners[item.deviceid];
      if (!winner || item.time.valueOf() > winner.time.valueOf()) {
        winners[item.deviceid] = item;
      }
      return winners;
    }, {});
  }

}
