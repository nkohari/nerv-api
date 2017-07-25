import { Credentials } from './structures/Credentials';
import { AgentEndpoints } from './endpoints/AgentEndpoints';
import { AuthEndpoints } from './endpoints/AuthEndpoints';
import { DeviceEndpoints } from './endpoints/DeviceEndpoints';
import { ExchangeRateEndpoints } from './endpoints/ExchangeRateEndpoints';
import { GroupEndpoints } from './endpoints/GroupEndpoints';
import { MeasureEndpoints } from './endpoints/MeasureEndpoints';
import { SampleEndpoints } from './endpoints/SampleEndpoints';
export interface GetRequestConfig {
    params?: {
        [name: string]: any;
    };
}
export interface PostRequestConfig {
    data: any;
}
export interface PutRequestConfig {
    data: any;
}
export interface ApiClientConfig {
    scheme?: string;
}
export declare class ApiClient {
    scheme: string;
    baseUrl: string;
    credentials: Credentials;
    agents: AgentEndpoints;
    auth: AuthEndpoints;
    devices: DeviceEndpoints;
    exchangeRates: ExchangeRateEndpoints;
    groups: GroupEndpoints;
    measures: MeasureEndpoints;
    samples: SampleEndpoints;
    constructor(baseUrl: string, options?: ApiClientConfig);
    setCredentials(credentials: Credentials): void;
    get(path: string, config?: GetRequestConfig): Promise<any>;
    post(path: string, config?: PostRequestConfig): Promise<any>;
    put(path: string, config?: PutRequestConfig): Promise<any>;
    getHeaders(): {
        Accept: string;
        'Content-Type': string;
        Authorization: string;
    };
    getUrl(path: any): string;
}
