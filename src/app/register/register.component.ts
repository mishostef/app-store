import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,Validators,Validator } from '@angular/forms';
import {RegisterService} from './register.service';
import {UserWithEmail} from '../interfaces/UserWithEmail';
import { Router, ActivatedRoute } from '@angular/router';
import {PasswordMatchDirective} from '../shared/directives/password-match.directive';
import {MustMatch} from './MustMatch';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  fb = new FormBuilder();

  ngOnInit() {
  }
  constructor(private registerService: RegisterService, private router: Router) {
    this.registerForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
   // repassword:['',[Validators.required]],
    email: ['', [Validators.required]],
  reemail: ['', Validators.required]
  }, {validators: [ new PasswordMatchDirective() ]});//pass function instead
  }

    registerHandler() {
      if (this.registerForm.invalid) {
 console.log("Not valid data"); return;
    }
       const username = this.registerForm.value.username;
       const password = this.registerForm.value.password;
       const email = this.registerForm.value.email;
       const date = new Date();
       const currentUser = new UserWithEmail(username, password, email, date);
       this.registerService.createUser(currentUser).toPromise()
       .then(() => this.router.navigateByUrl('/posts'));
    }

}
