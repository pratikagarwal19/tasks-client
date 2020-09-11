import { Component, OnInit } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { TestFetchService } from '../../shared/services/test-fetch.service';
import { GlobalService } from '../../shared/services/global.service';
import { Day } from '../../shared/models/day';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
})
export class DatepickerComponent implements OnInit {

  day: Day = {
    _id: "1599762600000",
    date: "18/09/2020",
    start: 9,
    end: 2,
    duration: 7,
    tasks: [],
  };  
  
  constructor( private testFetchService: TestFetchService,
               private globalTestService: GlobalService,) { 
                this.globalTestService.setDay(new Date().setHours(0,0,0,0).toString());
                var temp = this.globalTestService.getDay();
               }
               

  ngOnInit(): void { 
    setTimeout(() =>{
      console.log("GET");
      console.log(this.globalTestService.getDay());
      this.day = this.globalTestService.getDay();
      console.log(this.day);
    },5000);
 
  }

  
  

  addEvent(event: MatDatepickerInputEvent<Date>) {

    var mills = event.value.getTime().toString();

    this.globalTestService.setDay(mills);

    this.day = this.globalTestService.getDay();
    }

  

}
