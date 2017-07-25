import { ApiClient } from '../ApiClient';
import { Group } from '../structures/Group';
export declare class GroupEndpoints {
    client: ApiClient;
    constructor(client: ApiClient);
    get(groupid: string): Promise<Group>;
    update(groupid: string, data: Partial<Group>): Promise<Group>;
    listByUser(): Promise<Group[]>;
}
