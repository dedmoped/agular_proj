import { Inject, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { API_URL } from './app-injection-tokens';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {Token} from '../app/models/token'
import {tap} from 'rxjs/internal/operators'
export const ACCESS_TOKEN_KEY='acess_token'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,@Inject(API_URL)private apiurl:string,
  private jwtHelper:JwtHelperService,
  private router:Router) {
  }

  login(login:string, password:string ):Observable<Token> {
    return this.http.post<Token>(`${this.apiurl}api/auth/login`, {login, password}).pipe(tap(token=>localStorage.setItem(ACCESS_TOKEN_KEY,token.access_token)))
      }

      isAuthenticated(){
var token=localStorage.getItem(ACCESS_TOKEN_KEY);
return token&&!this.jwtHelper.isTokenExpired(token)
      }
}