import { HasIdentifier } from '../framework/HasIdentifier';

export class ExchangeRate implements HasIdentifier {

  id: string;
  time: Date;
  symbol: string;
  currency: string;
  amount: number;

  constructor(data: Partial<ExchangeRate> = {}) {
    this.id = data.id;
    this.time = new Date(data.time);
    this.symbol = data.symbol;
    this.currency = data.currency;
    this.amount = Number(data.amount);
  }

}
