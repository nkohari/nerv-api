import { HasIdentifier } from '../framework/HasIdentifier';
export declare class NetworkData implements HasIdentifier {
    id: string;
    time: Date;
    symbol: string;
    algorithm: string;
    blockreward: number;
    blocktime: number;
    networkhashrate: number;
    constructor(data?: Partial<NetworkData>);
}
