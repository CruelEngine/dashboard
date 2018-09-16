import { Pipe, PipeTransform } from '@angular/core';
import { Rule } from './rule';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform(value: Array<Rule>, pageSize : number , pageNumber : number): any {
    let startIndex = (pageNumber- 1) * pageSize;
    let endIndex = startIndex + pageSize;
    return value.slice(startIndex , endIndex);
  }

}
