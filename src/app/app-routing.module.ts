import {LoginService} from './login/login.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import { ComponentListContainerComponent} from './component-list-container/component-list-container.component'
import {PostsComponent} from './posts/posts.component';
import {RegisterComponent} from './register/register.component';
import {ProductsComponent} from './products/products.component';
import {AuthGuard} from './auth.guard';
import {AppReolverService} from './shared/resolvers/app-reolver.service'
import { from } from 'rxjs';


const routes: Routes = [
  { path: 'login', component: LoginComponent, resolve: {cres: AppReolverService} } ,
  {path: 'contacts', component: ComponentListContainerComponent},
  {path: 'posts', component: PostsComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductsComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AppReolverService, LoginService, AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
