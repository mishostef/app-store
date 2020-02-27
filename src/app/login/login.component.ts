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
  providers: [LoginService, AppReolverService]
})
export class LoginComponent implements OnInit {

  constructor( private loginService: LoginService, private router: Router,
               private actr: ActivatedRoute) {
    //  this.actr.data.pipe(map((d) => d.cres)).subscribe(x => console.log(x));
     }
  users: User[];
  public logged: boolean;
  visible = true;
  ngOnInit() {
  }

  loginHandler(data) {

   this.loginService.logUser(data as User).
subscribe(() => {
    this.logged = this.loginService.isLogged();
    localStorage.setItem('logged', this.logged.toString());///
    //console.log('in serice logged:' + this.logged);
    //console.log('localst. inservice:' + localStorage.getItem('logged'));
    setTimeout(() => {
           this.router.navigate(['posts']);
           localStorage.setItem('logged', this.logged.toString());
    }, 2000);


}, console.error);
  }


}
