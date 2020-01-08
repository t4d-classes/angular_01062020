import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'archive'
})
export class ArchivePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return Boolean(value) ? 'Yes' : 'No';
  }

}
