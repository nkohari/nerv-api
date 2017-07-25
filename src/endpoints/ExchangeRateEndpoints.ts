import { ApiClient } from '../ApiClient';
import { ExchangeRate } from '../structures/ExchangeRate';

const createMany = result => result.exchangeRates.map(item => new ExchangeRate(item));

export class ExchangeRateEndpoints {

  client: ApiClient;

  constructor(client: ApiClient) {
    this.client = client;
  }

  listByCurrency(currency: string): Promise<ExchangeRate[]> {
    const url = '/structures/exchangerates';
    const params = { currency };
    return this.client.get(url, { params }).then(createMany);
  }

}
