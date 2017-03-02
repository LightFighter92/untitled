import { Pipe, PipeTransform } from '@angular/core';
import {isNullOrUndefined} from "util";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(sponsoren: any, filterSponsor: any): any {
    //Überprüfen ob das Suchfeld leer ist
    if(filterSponsor === null || filterSponsor === undefined){
      return sponsoren;
    }
    //Sponsorliste updaten
    return sponsoren.filter(function (sponsor) {
      return sponsor.name.toLowerCase().includes(filterSponsor.toLowerCase());
    })
  }

}
