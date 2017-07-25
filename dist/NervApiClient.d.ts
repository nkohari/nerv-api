import { Credentials } from './structures/Credentials';
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
export declare class NervApiClient {
    agents: AgentEndpoints;
    auth: AuthEndpoints;
    devices: DeviceEndpoints;
    exchangeRates: ExchangeRateEndpoints;
    groups: GroupEndpoints;
    measures: MeasureEndpoints;
    samples: SampleEndpoints;
    private requester;
    constructor(baseUrl: string, options?: NervApiClientConfig);
    setCredentials(credentials: Credentials): void;
}
export default NervApiClient;
