import { Component, OnInit, Pipe } from '@angular/core';
import {Http} from '@angular/http';
import {Router, ROUTER_PROVIDERS} from '@angular/router';
import {SortArrayPipe} from './filter.pipe';



@Component({
  selector: 'my-app',
 templateUrl: './app/TestAssignment.html'    ,

  pipes:[SortArrayPipe]

})
export class AppComponent {
    router: any;
  redirect() {
    this.router.navigate(['http://google.com']);
  }

public fullPath = 'http://trstorage1.blob.core.windows.net/expert-pictures/';
 public mydata = [];

 constructor(http: Http) {
        http.get('https://api.tipranks.com/api/analysts/aapl?num=15&X-APIKey=TR_Interview4&X-APIToken=TR_Interview')
        .subscribe(result => {
            this.mydata = result.json();
        });
    }

}
