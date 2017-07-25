import { Credentials } from './structures/Credentials';
import { Requester } from './framework/Requester';
import { AgentEndpoints } from './endpoints/AgentEndpoints';
import { AuthEndpoints } from './endpoints/AuthEndpoints';
import { DeviceEndpoints } from './endpoints/DeviceEndpoints';
import { ExchangeRateEndpoints } from './endpoints/ExchangeRateEndpoints';
import { GroupEndpoints } from './endpoints/GroupEndpoints';
import { MeasureEndpoints } from './endpoints/MeasureEndpoints';
import { SampleEndpoints } from './endpoints/SampleEndpoints';

export interface NervApiClientConfig {
  scheme?: string;
  credentials?: Credentials;
}

export class NervApiClient {

  agents: AgentEndpoints;
  auth: AuthEndpoints;
  devices: DeviceEndpoints;
  exchangeRates: ExchangeRateEndpoints;
  groups: GroupEndpoints;
  measures: MeasureEndpoints;
  samples: SampleEndpoints;

  private requester: Requester;

  constructor(baseUrl: string, options: NervApiClientConfig = {}) {
    this.requester = new Requester({ baseUrl, ...options });
    this.agents = new AgentEndpoints(this.requester);
    this.auth = new AuthEndpoints(this.requester);
    this.devices = new DeviceEndpoints(this.requester);
    this.exchangeRates = new ExchangeRateEndpoints(this.requester);
    this.groups = new GroupEndpoints(this.requester);
    this.measures = new MeasureEndpoints(this.requester);
    this.samples = new SampleEndpoints(this.requester);
  }

  setCredentials(credentials: Credentials) {
    this.requester.setCredentials(credentials);
  }

}

export default NervApiClient;
