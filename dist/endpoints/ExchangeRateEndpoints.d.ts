import { ApiClient } from '../ApiClient';
import { ExchangeRate } from '../structures/ExchangeRate';
export declare class ExchangeRateEndpoints {
    client: ApiClient;
    constructor(client: ApiClient);
    listByCurrency(currency: string): Promise<ExchangeRate[]>;
}
