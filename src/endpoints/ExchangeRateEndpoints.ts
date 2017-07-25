import { Requester } from '../framework/Requester';
import { ExchangeRate } from '../structures/ExchangeRate';

const createMany = result => result.exchangeRates.map(item => new ExchangeRate(item));

export class ExchangeRateEndpoints {

  requester: Requester;

  constructor(requester: Requester) {
    this.requester = requester;
  }

  listByCurrency(currency: string): Promise<ExchangeRate[]> {
    const url = '/structures/exchangerates';
    const params = { currency };
    return this.requester.get(url, { params }).then(createMany);
  }

}
