import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { API_URL } from './app-injection-tokens';
import { JwtModule } from '@auth0/angular-jwt';
import { ACCESS_TOKEN_KEY } from './auth.service';
import { HttpClientModule } from '@angular/common/http';

export function tokenGetter(){
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
    JwtModule.forRoot({
      config:{
      tokenGetter,
      allowedDomains:environment.tokenWhiteListedDomains
      }
    })
  ],
  providers: [{provide:API_URL,useValue:environment.webApi}],
  bootstrap: [AppComponent]
})
export class AppModule { }
