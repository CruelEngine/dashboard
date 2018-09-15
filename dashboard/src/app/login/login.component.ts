import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Login } from '../login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(private _fb : FormBuilder) { 

    this.loginForm= this._fb.group({
      username : [''],
      password : ['']
    })
  }

  ngOnInit() {
    
  }

  login(login : Login){
    console.log(login);
  }

}
