import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime , distinctUntilChanged } from'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchSubject : Subject<string> = new Subject<string>();
  searchInput : string;
  constructor() { }

  ngOnInit() {
    this.searchSubject.pipe(debounceTime(300),distinctUntilChanged()).subscribe(value =>{
      this.inputValueChanged(value);
   });
  }

  inputValueChanged(event){
    this.searchSubject.next(event);
  }

}
