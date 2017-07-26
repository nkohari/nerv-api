import { Measure } from '../structures/Measure';
import { Collection } from '../framework/Collection';
export declare class MeasureCollection extends Collection<Measure> {
    forGroup(groupid: string): MeasureCollection;
    forAgent(agentid: string): MeasureCollection;
    forDevice(deviceid: string): MeasureCollection;
    mostRecentForDevice(deviceid: string): Measure;
    mostRecentForAgentByDevice(agentid: string): {
        [deviceid: string]: Measure;
    };
}
