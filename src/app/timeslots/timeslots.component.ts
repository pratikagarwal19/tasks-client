import { Component, OnInit, enableProdMode } from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-timeslots',
  templateUrl: './timeslots.component.html',
  styleUrls: ['./timeslots.component.css']
})
export class TimeslotsComponent implements OnInit {

  todayNumber: number = Date.now();
  startDate : Date = new Date();

  times = [];

  duration = 17;

  constructor() { 

    let hours = this.startDate.getHours();

    for(let i=0;i<=this.duration;i++){
      this.times.push({
        text:hours+i,
        style: "width:"+stringify(i/this.duration*100)+"%;background-color:hsl(240,0%,"+stringify((1-i/this.duration)*100)+"%);" + "color:hsl(240,0%,"+stringify((i/this.duration)*100)+"%);"
      });
    }
  }

  ngOnInit(): void {
  }

}
