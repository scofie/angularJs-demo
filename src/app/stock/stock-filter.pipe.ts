import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockFilter'
})
export class StockFilterPipe implements PipeTransform {

  transform (list: any[] , field: string , searchWord: string): any {

    if (!field || !searchWord ) {
      return list;
    }
    return list.filter (item => {
      let itemFieldValue = item[field].toLowerCase ();
      return itemFieldValue.indexOf(searchWord) >=0 ;
    });
  }
}

