import { Injectable } from '@angular/core';
import { Day } from '../models/day';
import { TestFetchService } from '../../shared/services/test-fetch.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private day:Day;

  getDay(): Day{ 
    return this.day;
  }

  setDay(id:string): void{  
    this.testFetchService.get(id)
    .subscribe(
      data => {
        if( data.length != 0 ){  
          this.day = data[0];
        }
        else{
          var tempdate = new Date(parseInt(id)).toLocaleString().slice(0,10);
          var tempstart = 9;
          var tempend = 2;

          var dur = Math.abs(tempend - tempstart);

          this.day = {
            _id: id,
            date: tempdate,
            start: tempstart,
            end: tempend,
            duration: dur,
            tasks: [],
          };
          this.testFetchService.create(this.day,id)
            .subscribe(
              response => {
                console.log(response[0]);
              },
              error => {
                console.log(error);
              }
            ); 
            return this.day
        }
      },
      error => {
        console.log(error);
      });
  } 

  constructor(private testFetchService: TestFetchService,) { }

  

}
