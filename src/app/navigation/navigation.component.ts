import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import {of, Observable} from 'rxjs';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {

username: string;

//
constructor(
    private loginService: LoginService,
    private router: Router
  ){
  }

ngOnInit() {
    console.log('in nav logged:' + this.loginService.isLogged());
    console.log('in nav local:' + localStorage.getItem('logged')); //
     //
}

logged(): boolean {
     return  localStorage.getItem('logged') === 'true' ? true : false;
   }


logout(){
    this.loginService.logout();
    console.log('local storage:' + localStorage.getItem('logged'));
    console.log('in logout logged:' + this.logged());
    this.router.navigate(['']);

  }


}
