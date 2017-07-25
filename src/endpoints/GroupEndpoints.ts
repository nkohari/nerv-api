import { Requester } from '../framework/Requester';
import { Group } from '../structures/Group';

const createOne = result => new Group(result.group);
const createMany = result => result.groups.map(item => new Group(item));

export class GroupEndpoints {

  requester: Requester;

  constructor(requester: Requester) {
    this.requester = requester;
  }

  get(groupid: string): Promise<Group> {
    const url = `/groups/${groupid}`;
    return this.requester.get(url).then(createOne);
  }

  update(groupid: string, data: Partial<Group>): Promise<Group> {
    const url = `/groups/${groupid}`;
    return this.requester.put(url, { data }).then(createOne);
  }

  listByUser(): Promise<Group[]> {
    const url = '/groups';
    return this.requester.get(url).then(createMany);
  }

}
