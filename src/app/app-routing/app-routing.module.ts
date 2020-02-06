import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../pages/home/home.component';
import {AboutComponent} from '../pages/about/about.component';
import {LoginComponent} from '../pages/login/login.component';
import {MainComponent} from '../pages/main/main.component';


const routes: Routes = [
  
  { path: 'login', component: LoginComponent },
  { path: '', component: MainComponent,
  children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: '', redirectTo: 'home', pathMatch: 'prefix' }
  ]
  },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }