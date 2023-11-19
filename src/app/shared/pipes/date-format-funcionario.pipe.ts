import { Pipe, PipeTransform } from "@angular/core";
import { DateUtil } from "src/app/utilities/date.utilitiy";

@Pipe({ 
  name: 'dateFormatFunc'
})
export class DateFormatFuncionarioPipe implements PipeTransform {
  
  transform(value: Date, ...args: string[]) {
    return DateUtil.Format(value, args[0]);
  }
}