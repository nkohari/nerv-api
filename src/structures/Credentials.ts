import { User } from './User';

export class Credentials {

  token: string;
  user: User;

  constructor(data: Partial<Credentials> = {}) {
    this.token = data.token;
    this.user = data.user;
  }

}
