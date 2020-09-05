import { Component, OnInit } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  date: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  addEvent(event: MatDatepickerInputEvent<Date>) {
    this.date = event.value;
  }

  

}
