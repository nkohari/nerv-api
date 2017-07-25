import { Requester } from '../framework/Requester';
import { Group } from '../structures/Group';
export declare class GroupEndpoints {
    requester: Requester;
    constructor(requester: Requester);
    get(groupid: string): Promise<Group>;
    update(groupid: string, data: Partial<Group>): Promise<Group>;
    list(): Promise<Group[]>;
}
