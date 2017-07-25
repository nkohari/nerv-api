import { ApiClient } from '../ApiClient';
import { Credentials } from '../structures/Credentials';
import { User } from '../structures/User';

const createOne = result => new Credentials({ token: result.token, user: new User(result.user) });

export interface LoginPayload {
  username: string;
  password: string;
}

export interface CreateUserPayload {
  username: string;
  password: string;
  email: string;
  agentid: string;
}

export class AuthEndpoints {

  client: ApiClient;

  constructor(client: ApiClient) {
    this.client = client;
  }

  login(data: LoginPayload): Promise<Credentials> {
    return this.client.post('/auth', { data }).then(createOne);
  }

  getToken(): Promise<Credentials> {
    return this.client.get('/auth').then(createOne);
  }

  createUser(data: CreateUserPayload): Promise<Credentials> {
    return this.client.post('/users', { data }).then(createOne);
  }

}
