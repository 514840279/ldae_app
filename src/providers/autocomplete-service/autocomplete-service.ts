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
     return this.http.get("http://998xp.vicp.net:8001/api?action=sug_app&q=" + keyword).map(
      result=>{
        console.log(result);
         var aa =  result.json().filter(item => item.name.toLowerCase().startsWith(keyword.toLowerCase()))
         

         return aa;
      }
    );

   
  }
}
