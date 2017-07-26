import { Sample } from '../structures/Sample';
import { Collection } from '../framework/Collection';
export declare class SampleCollection extends Collection<Sample> {
    forGroup(groupid: any): SampleCollection;
    forAgent(agentid: any): SampleCollection;
    forDevice(deviceid: any): SampleCollection;
}
