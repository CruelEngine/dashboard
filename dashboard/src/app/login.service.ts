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
    document.cookie = "nubewelldashboard="+ new Date().getTime()+"; expiry="+expires;
    console.log(document.cookie);

  }

  getCookie(name:string){
    let cookieName = name+"=";
    let cookieDoc = document.cookie.split('-');
    for(let i=0; i <cookieDoc.length;i++){
      let cookie = cookieDoc[i];
      console.log(cookie);
      if (cookie.indexOf(cookieName) == 0){
        console.log(cookie);
        return cookie.substring(cookieName.length,cookie.length);
      }
    }

  }

  deleteCookie(){

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
