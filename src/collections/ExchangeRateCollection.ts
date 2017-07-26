import { ExchangeRate } from '../structures/ExchangeRate';
import { Collection } from '../framework/Collection';

export class ExchangeRateCollection extends Collection<ExchangeRate> {

  for(symbol: string, currency: string): ExchangeRate {
    return this.find(item => item.symbol === symbol && item.currency === currency);
  }

}
