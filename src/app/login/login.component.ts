import { Component, OnInit, AfterContentChecked, AfterViewChecked} from '@angular/core';
import {LoginService} from './login.service';
import { Observable, from  } from 'rxjs';
import { map} from 'rxjs/operators';
import { User } from '../interfaces/User';
import { Router, ActivatedRoute } from '@angular/router';
import {AppReolverService} from '../shared/resolvers/app-reolver.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService,AppReolverService]
})
export class LoginComponent implements OnInit {

  constructor( private loginService: LoginService, private router: Router,
    private actr: ActivatedRoute) {
      this.actr.data.pipe(map((d)=>d.cres)).subscribe(x=>console.log(x));
     }
  users: User[];
  logged: boolean;
  visible = true;
  ngOnInit() {
  }

  loginHandler(data) {

   this.loginService.logUser(data).toPromise().
  then(() => {
    this.logged = this.loginService.isLogged();
     }).then(() => {
  console.log(`logger in login handler= ${this.logged}`);
  if (this.logged) {setTimeout(() => {
       this.visible = false;
       this.router.navigateByUrl('/posts');
    }, 2000);
   }

  }).catch(err=>console.error(err));

  }

}
