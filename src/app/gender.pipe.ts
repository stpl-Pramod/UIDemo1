import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: any): any {
    console.log(value);
    
    switch(value)
    {
      case 1: return "Male";
      case 2: return "Female";
    }
  }

}
