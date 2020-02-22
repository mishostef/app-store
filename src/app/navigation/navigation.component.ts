import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {

  logged: boolean;
  username: string;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.logged = !!localStorage.getItem('logged');
    console.log(`in navigation logged=${this.logged}`);
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['']);
  }


}
