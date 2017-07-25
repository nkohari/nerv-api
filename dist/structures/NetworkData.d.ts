import { Identifiable } from '../framework/Identifiable';
export declare class NetworkData implements Identifiable {
    id: string;
    time: Date;
    symbol: string;
    algorithm: string;
    blockreward: number;
    blocktime: number;
    networkhashrate: number;
    constructor(data?: Partial<NetworkData>);
}
