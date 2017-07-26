import { NetworkData } from '../structures/NetworkData';
import { Collection } from '../framework/Collection';

export class NetworkDataCollection extends Collection<NetworkData> {

  for(symbol: string): NetworkData {
    return this.find(item => item.symbol === symbol);
  }

}
