import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DragndropComponent} from './dragndrop/dragndrop.component';
import { CardsComponent } from './cards/cards.component';

const routes: Routes = [
  {path:'drag', component:DragndropComponent},
  {path:'cards', component:CardsComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
