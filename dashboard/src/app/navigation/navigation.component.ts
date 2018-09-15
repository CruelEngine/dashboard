import { Component, OnInit } from '@angular/core';
import { NavigationOptions } from '../navigation-options';
import { Path } from '../routes.enum';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  navOptions : Array<NavigationOptions> = [
    { name : 'Dashboard' , path : Path.DASHBOARD},
    { name : 'Interface' , path : Path.INTERFACE},
    { name : 'Settings' , path : Path.SETTINGs},
    { name : 'Users' , path : Path.USERS},
    { name : 'File Upload' , path : Path.FILE_UPLOAD},
    { name : 'Alias' , path : Path.ALIAS},
    { name : 'Custom Protocols' , path : Path.CUSTOM_PROTOCOLS}
  ]

  constructor() { }

  ngOnInit() {
  }

}
