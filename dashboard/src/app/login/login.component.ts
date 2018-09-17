import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Login } from '../login';
import { LoginService } from '../login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PermissionService } from '../permission.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(private _fb : FormBuilder , private _loginService : LoginService  , private _router : Router , private _permission : PermissionService) { 

    this.loginForm= this._fb.group({
      username : [''],
      password : ['']
    })
  }

  ngOnInit() {

    if(this._permission.canLoadDashboard()){
      this._router.navigate(['/dashboard/interface']);
    }
    
  }

  login(login : Login){
    if(this._loginService.login(login)){
    this._loginService.setCookie();
    this._router.navigate(['/dashboard/interface']);
    }
  }


}
