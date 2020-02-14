import { Component, OnInit,AfterContentChecked,AfterViewChecked} from '@angular/core';
import {LoginService} from './login.service';
import { Observable } from 'rxjs';
import{ User } from '../interfaces/User';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  constructor( private loginService: LoginService, private router: Router) { }
  users: User[];
  logged: boolean;
  ngOnInit() {
  // const usersObservable = this.loginService.getUsers();
   //usersObservable.subscribe(users => this.users = users);

  }

  loginHandler(data) {
    let subscription= this.loginService.getUsers()
    .subscribe(
      users=>{(users
        .filter(x=>(x.username==((data as User).username))))
        .length!==0?
        this.logged=true:
        this.logged=false;
      },
      err=>console.error('observable got an error' + err)
    );

   if(this.logged)setTimeout(() => {
      subscription.unsubscribe();
      this.router.navigateByUrl('/posts');
    }, 2000);
  }

}
