import { ApiClient } from '../ApiClient';
import { Device } from '../structures/Device';
export declare class DeviceEndpoints {
    client: ApiClient;
    constructor(client: ApiClient);
    get(groupid: string, agentid: string, deviceid: string): Promise<Device>;
    update(groupid: string, agentid: string, deviceid: string, data: Partial<Device>): Promise<Device>;
    listByGroup(groupid: string): Promise<Device[]>;
    listByAgent(groupid: string, agentid: string): Promise<Device[]>;
}
