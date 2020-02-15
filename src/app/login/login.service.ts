import { Injectable } from '@angular/core';
import { User } from '.././interfaces/User';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable()
export class LoginService {
    private usersUrl = '/login';
    private logged: boolean = false;
    constructor(private http: HttpClient) {}

    // get("/api/users")
    getUsers(): Observable<User[]> {
      return this.http.get<any>('/api/users')
      .pipe(map((res) => res as User[]));
    }
    isLogged():boolean{
      return this.logged;
    }
    Log(data){
      this.getUsers().toPromise()
      .then(
        users => {(users
          .filter(x => (x.username === ((data as User).username))))
          .length !== 0 ?
          this.logged = true :
          this.logged = false;
        },

      ).catch(err=>console.error(err));
    }


       // post("/login")
    createUser(newUser: User): Observable<User> {
      console.log('new user is' + newUser.username);
      return this.http.post(this.usersUrl, newUser)
      .pipe(map((res) => res as User));
    }
}
