import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import { ComponentListContainerComponent} from './component-list-container/component-list-container.component'
import {PostsComponent} from './posts/posts.component';
import {RegisterComponent} from './register/register.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: 'login', component: LoginComponent} ,
  {path: 'contacts', component: ComponentListContainerComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'register', component: RegisterComponent},
  { path: '', component: HomeComponent, pathMatch: 'full' },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
