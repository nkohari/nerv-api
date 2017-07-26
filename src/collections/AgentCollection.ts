import { Agent } from '../structures/Agent';
import { Collection } from '../framework/Collection';

export class AgentCollection extends Collection<Agent> {

  forGroup(groupid): AgentCollection {
    return this.filter(item => item.groupid === groupid);
  }

}
