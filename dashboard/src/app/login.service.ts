import { Injectable } from '@angular/core';
import { Login } from './login';
import {  BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  /**
   * Use of behavioral subject as it stores the previous value 
   */
  loginSubject : BehaviorSubject<Login> = new BehaviorSubject<Login>(null);

  constructor() { 

    let loginDetails : string = localStorage.getItem('login-details');

    let login : Login = JSON.parse(loginDetails);
    
    if(!login){
      login.username="admin";
      login.password="admin";
      localStorage.setItem('login-details' , JSON.stringify(login));
      
      this.loginSubject.next(login);
    }

  }

  
}
