import { Identifiable } from '../framework/Identifiable';
export declare class ExchangeRate implements Identifiable {
    id: string;
    time: Date;
    symbol: string;
    currency: string;
    amount: number;
    constructor(data?: Partial<ExchangeRate>);
}
