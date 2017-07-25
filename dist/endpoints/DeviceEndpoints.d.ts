import { Requester } from '../framework/Requester';
import { Device } from '../structures/Device';
export declare class DeviceEndpoints {
    requester: Requester;
    constructor(requester: Requester);
    get(groupid: string, agentid: string, deviceid: string): Promise<Device>;
    update(groupid: string, agentid: string, deviceid: string, data: Partial<Device>): Promise<Device>;
    listByGroup(groupid: string): Promise<Device[]>;
    listByAgent(groupid: string, agentid: string): Promise<Device[]>;
}
