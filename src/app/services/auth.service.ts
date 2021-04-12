import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUserToken } from '../models/user-token.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  getLoggedInUser(): IUserToken {
    if (window.localStorage.getItem('_userData'))
      return JSON.parse(window.localStorage.getItem('_userData')) as IUserToken;
    else null;
  }
  public login(userInfo: IUserToken){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }

  storeUserData(data: IUserToken) {
    window.localStorage.setItem('_userData', JSON.stringify(data));
  }
  public logout(){
    window.localStorage.clear();
  }
}
