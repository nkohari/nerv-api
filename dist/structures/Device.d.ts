import { Model } from '../framework/Model';
export declare class Device extends Model {
    groupid: string;
    agentid: string;
    type: string;
    name: string;
    vendor: string;
    model: string;
    constructor(data?: Partial<Device>);
}
