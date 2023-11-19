import { Pipe, PipeTransform } from "@angular/core";
import { DateUtil } from "src/app/utilities/date.utilitiy";

@Pipe({ 
  name: 'dateFormatClient'
})
export class DateFormatClientePipe implements PipeTransform {
  
  transform(value: Date, ...args: string[]) {
    return DateUtil.Format(value, args[0]);
  }
}