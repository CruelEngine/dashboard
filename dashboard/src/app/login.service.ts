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
    
    if(login == undefined){
      localStorage.setItem('login-details' , JSON.stringify({username:'admin' , password :'admin'}));
      
    }

  }

  setCookie(){
    let date = new Date().getTime();
    let expires = date + (60*60*1000);
    let expiryTime = expires-date;
    document.cookie = "value="+new Date().getTime()+"-"+"expiry="+expires;
    console.log(document.cookie);

  }

  login(login:Login){
    let loginData : string = localStorage.getItem('login-details');
    let loginDetails : Login = JSON.parse(loginData);
    if(login.username == loginDetails.username && login.password == loginDetails.password){
      return true;
    }
    return false;
  }
  
}
