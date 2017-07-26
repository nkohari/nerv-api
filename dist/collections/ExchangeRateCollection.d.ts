import { ExchangeRate } from '../structures/ExchangeRate';
import { Collection } from '../framework/Collection';
export declare class ExchangeRateCollection extends Collection<ExchangeRate> {
    for(symbol: string, currency: string): ExchangeRate;
}
