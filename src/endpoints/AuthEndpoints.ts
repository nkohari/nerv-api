import { Requester } from '../framework/Requester';
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

  requester: Requester;

  constructor(requester: Requester) {
    this.requester = requester;
  }

  login(data: LoginPayload): Promise<Credentials> {
    return this.requester.post('/auth', { data }).then(createOne);
  }

  getToken(): Promise<Credentials> {
    return this.requester.get('/auth').then(createOne);
  }

  createUser(data: CreateUserPayload): Promise<Credentials> {
    return this.requester.post('/users', { data }).then(createOne);
  }

}
