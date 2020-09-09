import { Component, OnInit } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { TestFetchService } from '../../shared/services/test-fetch.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
})
export class DatepickerComponent implements OnInit {

  data ={
    _id: '',
      date: '',
      start:0, 
      end: 0,
      duration: 0,
      tasks: [],
    };

  constructor( private testFetchService: TestFetchService,
               private datePipe: DatePipe) { }

  ngOnInit(): void {
  }

  addEvent(event: MatDatepickerInputEvent<Date>) {

    var mills = event.value.getTime();

    this.testFetchService.get(mills.toString())
    .subscribe(
      day => {
        if( day.length != 0 ){
          this.data = day[0];
        }
        else{
          var tempdate = new Date(mills).toLocaleString().slice(0,10);
          var tempstart = 9;
          var tempend = 2;

          var dur = Math.abs(tempend - tempstart);

          this.data = {
            _id: mills.toString(),
            date: tempdate,
            start: tempstart,
            end: tempend,
            duration: dur,
            tasks: [],
          };
      
          this.testFetchService.create(this.data,mills.toString())
            .subscribe(
              response => {
                console.log(response);
              },
              error => {
                console.log(error);
              }
            ); 
        }
      },
      error => {
        console.log(error);
      });

    
  }

  

}
