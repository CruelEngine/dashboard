import { Component, OnInit } from '@angular/core';
import {PaginationService } from '../pagination.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-pagination-options',
  templateUrl: './pagination-options.component.html',
  styleUrls: ['./pagination-options.component.css']
})
export class PaginationOptionsComponent implements OnInit {

  constructor(private _paginationService : PaginationService) { }

  pageSize : number;
  pageObject : any = [];
  pageNumber : string;

  pageNumberSubject : Subject<any> = new Subject<any>();

  ngOnInit() {
   this._paginationService.dataSizeSubject.subscribe((size) => {
     if(size <=10){
       this.pageSize = 1;
       this._paginationService.pageChanged(this.pageSize);
     }else
      this.pageSize = Math.floor(size/10) + size%10;
      this.createPageObject();
    });

  }


  createPageObject(){
    this.pageObject = [];
    for(let i=1; i <=this.pageSize ; i++){
      this.pageObject.push({name : i , value : i});
    }
  }

  pageClicked(pageNo : string){
    this.pageNumber = pageNo;
    this._paginationService.pageChanged(this.pageNumber);
  }

}
