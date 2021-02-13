import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from 'src/app/app.component'
import { LoginComponent } from './components/login/login.component';
import {RegistrationComponent} from '../app/components/registration/registration.component'
const routes: Routes = [{
  path: 'login',
  component: LoginComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
