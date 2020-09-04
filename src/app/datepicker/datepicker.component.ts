import { Component, OnInit } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  date=Date.now()

  constructor() { }

  ngOnInit(): void {
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log(event.value);
  }

}
