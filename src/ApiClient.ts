import axios from 'axios';
import { Credentials } from './structures/Credentials';
import { AgentEndpoints } from './endpoints/AgentEndpoints';
import { AuthEndpoints } from './endpoints/AuthEndpoints';
import { DeviceEndpoints } from './endpoints/DeviceEndpoints';
import { ExchangeRateEndpoints } from './endpoints/ExchangeRateEndpoints';
import { GroupEndpoints } from './endpoints/GroupEndpoints';
import { MeasureEndpoints } from './endpoints/MeasureEndpoints';
import { SampleEndpoints } from './endpoints/SampleEndpoints';

export interface GetRequestConfig {
  params?: { [name: string]: any };
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

export class ApiClient {

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

  constructor(baseUrl: string, options: ApiClientConfig = {}) {
    this.baseUrl = baseUrl;
    this.scheme = options.scheme || 'https';
    this.agents = new AgentEndpoints(this);
    this.auth = new AuthEndpoints(this);
    this.devices = new DeviceEndpoints(this);
    this.exchangeRates = new ExchangeRateEndpoints(this);
    this.groups = new GroupEndpoints(this);
    this.measures = new MeasureEndpoints(this);
    this.samples = new SampleEndpoints(this);
  }

  setCredentials(credentials: Credentials) {
    this.credentials = credentials;
  }

  get(path: string, config?: GetRequestConfig): Promise<any> {
    return axios({
      method: 'get',
      url: this.getUrl(path),
      headers: this.getHeaders(),
      params: config.params
    }).then(response => response.data);
  }

  post(path: string, config?: PostRequestConfig): Promise<any> {
    return axios({
      method: 'post',
      url: this.getUrl(path),
      headers: this.getHeaders(),
      data: config.data
    }).then(response => response.data);
  }

  put(path: string, config?: PutRequestConfig): Promise<any> {
    return axios({
      method: 'put',
      url: this.getUrl(path),
      headers: this.getHeaders(),
      data: config.data
    }).then(response => response.data);
  }

  getHeaders() {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: this.credentials ? `Bearer ${this.credentials.token}` : null
    };
  }

  getUrl(path) {
    return `${this.scheme}://${this.baseUrl}${path}`;
  }

}
