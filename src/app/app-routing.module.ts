import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DragndropComponent} from './dragndrop/dragndrop.component';
import { CardsComponent } from './cards/cards.component';
import {TimeslotsComponent} from './timeslots/timeslots.component'

const routes: Routes = [
  {path:'drag', component:DragndropComponent},
  {path:'cards', component:CardsComponent},
  {path: 'time', component:TimeslotsComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
