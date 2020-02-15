import { Component, OnInit, AfterContentChecked, AfterViewChecked} from '@angular/core';
import {LoginService} from './login.service';
import { Observable } from 'rxjs';
import { User } from '../interfaces/User';
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
  }

  loginHandler(data) {
   this.loginService.Log(data);
   this.logged = this.loginService.isLogged();
   if (this.logged) {setTimeout(() => {
       this.router.navigateByUrl('/posts');
    }, 2000);
   }
  }

}
