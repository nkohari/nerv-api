import { HasIdentifier } from '../framework/HasIdentifier';
export declare class ExchangeRate implements HasIdentifier {
    id: string;
    time: Date;
    symbol: string;
    currency: string;
    amount: number;
    constructor(data?: Partial<ExchangeRate>);
}
