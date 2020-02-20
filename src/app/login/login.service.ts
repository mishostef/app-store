import { Injectable } from '@angular/core';
import { User } from '.././interfaces/User';
import { HttpClient } from '@angular/common/http';
import {map,tap} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';


@Injectable()
export class LoginService {
    private usersUrl = '/login';
    private visible = false;
    private currentUser : User;
    constructor(private http: HttpClient,
                private cookieService: CookieService ) {}

    // get("/api/users")

    getUsers(): Observable<User[]> {
      return this.http.get<any>('/api/users')
      .pipe(map((res) => res as User[]));
    }
    public isLogged(): boolean {
      let logged = !!this.currentUser;
      console.log(`islogged= ${logged}`)
      localStorage.setItem('logged',logged.toString());
      return logged;
    }

       // post("/login")
    logUser(newUser: User): Observable<User> {
      console.log('log user... ' + newUser.username);
      return this.http.post(this.usersUrl, newUser)
      .pipe(map((res) => res as User)).pipe(tap(res => {
       this.currentUser = res;
       console.log(`currentUser is : ${JSON.stringify(this.currentUser)}`);
      }));
    }

    logout() {
      console.log(`service logout called!`)
      this.cookieService.delete('userCookie');
      localStorage.clear();
      // return this.http.post('/logout', {}).pipe(tap(() => {
      this.currentUser = null;
     // }));
    }
}
