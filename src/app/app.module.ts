import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { DragndropComponent } from './dragndrop/dragndrop.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { CardsComponent } from './cards/cards.component';
import { TimeslotsComponent } from './timeslots/timeslots.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DatepickerComponent } from './datepicker/datepicker.component';
import {MatFormFieldModule,} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DragndropComponent,
    CardsComponent,
    TimeslotsComponent,
    AddtaskComponent,
    DatepickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    DragDropModule,
    FontAwesomeModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
    DatePipe 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
