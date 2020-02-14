import {User} from './User';

export class UserWithEmail extends User {
  username: string;
  password: string;
  email: string;
  dateRegistered: Date;
  constructor(name: string, pass: string, mail: string, dateReg: Date){
    super();
    this.username = name;
    this.password = pass;
    this.email = mail;
    this.dateRegistered = dateReg;
  }
}
