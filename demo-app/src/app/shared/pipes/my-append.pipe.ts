import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAppend'
})
export class MyAppendPipe implements PipeTransform {

  transform(value: any, strToAppend: any): any {
    return String(value) + String(strToAppend);
  }

}
