import { Injectable } from '@angular/core';
import { Rule } from './rule';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {


  tableData : Array<Rule> = [];
  dataSize : number;

  constructor() { }

  setTableData(tableData : Array<Rule> ){
    this.tableData = tableData;
    this.dataSize = tableData.length;
  }

  getTableData(pagenumber : number){

  }


}
