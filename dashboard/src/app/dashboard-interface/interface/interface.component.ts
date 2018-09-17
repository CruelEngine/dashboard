import { Component, OnInit , ChangeDetectorRef} from '@angular/core';
import { Rule } from '../rule';
import { Tableheader } from '../tableheader';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Dropdown } from '../dropdown';
import { PaginationService } from '../pagination.service';
import { LocalstorageService } from '../localstorage.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {

  tableRules: FormGroup;

  tableData: Array<Rule> = [];
  tableHeader: Tableheader;

  formData : any =[]

  accessType : Array<Dropdown> = [];
  protocols : Array<Dropdown> = [];

  rules : FormArray;
  origRules:FormGroup;

  ruleArray : FormGroup;

  pageSize = 10;

  totalSize : number ;

  pageLength : number;

  constructor(private _fb: FormBuilder , private _paginationService : PaginationService , 
    private _cdr : ChangeDetectorRef , private _localstorageService : LocalstorageService,
    private _searchService : SearchService) { }

  ngOnInit() {
    this.tableRules = this._fb.group({
      rules: this._fb.array([])
    });

    this.ruleArray = this._fb.group({
      rules: this._fb.array([])
    });
    this._paginationService.setTableData(this.tableRules);
    this.accessType = [
      {name : 'deny' , value : 'deny'},
      { name : 'permit' , value : 'permit'}
    ];

    this.protocols = [
      {name : 'tcp' , value : 'tcp'},
      {name : 'ip' , value : 'ip'},
      {name:'udp' , value : 'udp'}
    ];
    this.formValueChangeListener();

    this._paginationService.tableDataSubject.subscribe((data) => {
      this.createPaginatedForm(data);
    });


    this._searchService.searchSubject.subscribe((value) =>{
      this.createPaginatedForm(this._paginationService.searchTableData(value));
    });
  }

  addRule() {
    this.rules = this.tableRules.get('rules') as FormArray;
    this.rules.push(this.createRow());
    this._paginationService.setTableData(this.tableRules);
  }

  createRow() {
    return this._fb.group({
      protocol: ['',Validators.required],
      sourceIp: ['',Validators.required],
      destinationIp: ['',Validators.required],
      accessType: ['',Validators.required]
    });
  }

  delete(index : number){
    let rules = this.tableRules.get('rules') as FormArray;
    rules.removeAt(index);
    this._paginationService.setTableData(this.tableRules);
  }

  formValueChangeListener(){
    this.tableRules.valueChanges.pipe(debounceTime(500),distinctUntilChanged()).subscribe( (data) => {
      this.formData = data;
      this._localstorageService.setItem('table-rules',JSON.stringify(data));
      this.totalSize = this.formData['rules'].length;
    });
  }

  get rulesArray(){
    return this.ruleArray.get('rules') as FormArray;
  }

  createPaginatedForm(formValue : any){
    this.pageLength = formValue.length;
    let ruleArray = this.ruleArray.get('rules') as FormArray;
    ruleArray.controls.splice(0,ruleArray.length);
    let ipPatter = "/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/";
    for(let i =0; i < formValue.length ; i++){

      let formGroup = this._fb.group({
        protocol: [formValue[i].protocol,Validators.required],
        sourceIp: [formValue[i].sourceIp,Validators.compose([Validators.required,Validators.pattern(ipPatter)])],
        destinationIp: [formValue[i].destinationIp,Validators.compose([Validators.required,Validators.pattern(ipPatter)])],
        accessType: [formValue[i].accessType,Validators.required]
      });
      ruleArray.push(formGroup);
    }
  }
  
}
