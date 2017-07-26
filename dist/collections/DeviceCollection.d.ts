import { Device } from '../structures/Device';
import { Collection } from '../framework/Collection';
export declare class DeviceCollection extends Collection<Device> {
    forGroup(groupid: any): DeviceCollection;
    forAgent(agentid: any): DeviceCollection;
}
