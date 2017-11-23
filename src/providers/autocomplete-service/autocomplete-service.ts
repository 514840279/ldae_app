import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AutoCompleteService } from 'ionic2-auto-complete';

/*
  Generated class for the AutocompleteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AutocompleteServiceProvider implements AutoCompleteService {

  labelAttribute="name";

  constructor(public http: Http) {
    console.log('Hello AutocompleteServiceProvider Provider');
  }

  getResults(keyword:string){
    return this.http.get("https://restcountries.eu/rest/v1/name/" + keyword).map(
      result=>{
        console.log(result);
        return result.json().filter(item => item.name.toLowerCase().startsWith(keyword.toLowerCase()))
      }
    );
  }
}
