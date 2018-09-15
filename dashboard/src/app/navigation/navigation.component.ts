import { Component, OnInit } from '@angular/core';
import { NavigationOptions } from '../navigation-options';
import { Path } from '../routes.enum';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  navigationOptions : Array<NavigationOptions> = [
    { name : 'Dashboard' , path : Path.DASHBOARD , isSelected:false},
    { name : 'Interface' , path : Path.INTERFACE ,  isSelected:true},
    { name : 'Settings' , path : Path.SETTINGs , isSelected:false},
    { name : 'Users' , path : Path.USERS , isSelected:false},
    { name : 'File Upload' , path : Path.FILE_UPLOAD , isSelected:false},
    { name : 'Alias' , path : Path.ALIAS , isSelected:false },
    { name : 'Custom Protocols' , path : Path.CUSTOM_PROTOCOLS , isSelected:false}
  ]

  constructor(private _activatedroute : ActivatedRoute , private _router : Router) { }

  ngOnInit() {

    // this._router.events.subscribe( na)
  }

}
