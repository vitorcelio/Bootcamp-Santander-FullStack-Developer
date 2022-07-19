import { formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import LocalePT from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(LocalePT);

@Pipe({
  name: 'dataBr'
})
export class DataBrPipe implements PipeTransform {

  transform(value: string, formato: string): unknown {
    return formatDate(value, formato, 'pt-BR', 'GMT-03:00');
  }

}
