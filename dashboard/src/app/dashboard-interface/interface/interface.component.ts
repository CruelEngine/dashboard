import { Component, OnInit } from '@angular/core';
import { Rule } from '../rule';
import { Tableheader } from '../tableheader';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {

  tableRules: FormGroup;

  tableData: Array<Rule> = [];
  tableHeader: Tableheader;

  rules : FormArray;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.tableRules = this._fb.group({
      rules: this._fb.array([])
    });
  }

  addRule() {
    this.rules = this.tableRules.get('rules') as FormArray;
    this.rules.push(this.createRow());
  }

  createRow() {
    return this._fb.group({
      protocol: [''],
      sourceIp: [''],
      destinationIp: [''],
      accessType: ['']
    });
  }

  delete(index : number){
    let rules = this.tableRules.get('rules') as FormArray;
    rules.removeAt(index);
  }

}
