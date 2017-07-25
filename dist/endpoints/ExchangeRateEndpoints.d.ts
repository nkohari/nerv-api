import { Requester } from '../framework/Requester';
import { ExchangeRate } from '../structures/ExchangeRate';
export declare class ExchangeRateEndpoints {
    requester: Requester;
    constructor(requester: Requester);
    listByCurrency(currency: string): Promise<ExchangeRate[]>;
}
