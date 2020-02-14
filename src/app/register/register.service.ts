import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserWithEmail} from '.././interfaces/UserWithEmail';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  registerUrl = '/register';
  constructor(private http: HttpClient) { }

  createUser(newUser: UserWithEmail ): Observable<UserWithEmail> {
    console.log('new user is' + JSON.stringify(newUser));
    return this.http.post(this.registerUrl, newUser)
    .pipe(map((res) => res as UserWithEmail));
  }
}
