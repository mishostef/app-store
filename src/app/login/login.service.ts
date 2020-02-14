import { Injectable } from '@angular/core';
import { User } from '.././interfaces/User';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable()
export class LoginService {
    private usersUrl = '/login';

    constructor(private http: HttpClient) {}

    // get("/api/users")
    getUsers(): Observable<User[]>{
      return this.http.get<any>('/api/users')
      .pipe(map((res) => res as User[]));
    }

    // post("/login")
    createUser(newUser: User): Observable<User> {
      console.log('new user is' + newUser.username);
      return this.http.post(this.usersUrl, newUser)
      .pipe(map((res) => res as User));
    }
}
