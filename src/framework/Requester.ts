import axios from 'axios';
import { Credentials } from '../structures/Credentials';

export interface GetRequestConfig {
  params?: { [name: string]: any };
}

export interface PostRequestConfig {
  data: any;
}

export interface PutRequestConfig {
  data: any;
}

export class Requester {

  scheme: string;
  baseUrl: string;
  credentials: Credentials;

  constructor(options: Partial<Requester> = {}) {
    this.scheme = options.scheme;
    this.baseUrl = options.baseUrl;
    this.credentials = options.credentials;
  }

  setCredentials(credentials: Credentials) {
    this.credentials = credentials;
  }

  get(path: string, config: GetRequestConfig = {}): Promise<any> {
    return axios({
      method: 'get',
      url: this.getUrl(path),
      headers: this.getHeaders(),
      params: config.params
    }).then(response => response.data);
  }

  post(path: string, config: PostRequestConfig): Promise<any> {
    return axios({
      method: 'post',
      url: this.getUrl(path),
      headers: this.getHeaders(),
      data: config.data
    }).then(response => response.data);
  }

  put(path: string, config: PutRequestConfig): Promise<any> {
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

export default Requester;
