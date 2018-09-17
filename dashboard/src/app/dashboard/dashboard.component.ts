import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { IdleTimeoutServiceService } from '../idle-timeout-service.service';
import { PopupService } from '../popup.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _loginService : LoginService, private _router : Router , private _idleTimeoutService : IdleTimeoutServiceService , private _popupService : PopupService) { }


  logoutEnabled : boolean = false;

  ngOnInit() {
    console.log('Dashboard');
    this._idleTimeoutService.timeOutSubject.subscribe( ()=>{
      this._popupService.openPopup();
    });
  }

  logout(){
    this._loginService.deleteCookie("nubewelldashboard");
    this._router.navigate(['/login']);
  }

  showLogout(){
    this.logoutEnabled = !this.logoutEnabled;
  }

}
