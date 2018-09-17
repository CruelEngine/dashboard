import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _loginService : LoginService, private _router : Router) { }


  logoutEnabled : boolean = false;

  ngOnInit() {
    console.log('Dashboard');
  }

  logout(){
    this._loginService.deleteCookie("nubewelldashboard");
    this._router.navigate(['/login']);
  }

  showLogout(){
    this.logoutEnabled = !this.logoutEnabled;
  }

}
