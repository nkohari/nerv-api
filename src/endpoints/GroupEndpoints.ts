import { ApiClient } from '../ApiClient';
import { Group } from '../structures/Group';

const createOne = result => new Group(result.group);
const createMany = result => result.groups.map(item => new Group(item));

export class GroupEndpoints {

  client: ApiClient;

  constructor(client: ApiClient) {
    this.client = client;
  }

  get(groupid: string): Promise<Group> {
    const url = `/groups/${groupid}`;
    return this.client.get(url).then(createOne);
  }

  update(groupid: string, data: Partial<Group>): Promise<Group> {
    const url = `/groups/${groupid}`;
    return this.client.put(url, { data }).then(createOne);
  }

  listByUser(): Promise<Group[]> {
    const url = '/groups';
    return this.client.get(url).then(createMany);
  }

}
