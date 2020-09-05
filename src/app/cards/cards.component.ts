import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cards = [
    {style:"background-color:white"},
    {style:"background-color:black"},
    {style:"background-color:red"},
    {style:"background-color:green"},
    {style:"background-color:white;border: solid 0px #ccc;"},
    {style:"background-color:white;border: solid 0px #ccc;"},
    {style:"background-color:whiteb;border: solid 0px #ccc;"},
    {style:"background-color:blue"},
    {style:"background-color:blue"},
    {style:"background-color:blue"},
    {style:"background-color:white"},
    {style:"background-color:black"},
    {style:"background-color:red"},
    {style:"background-color:green"},
    {style:"background-color:blue"},
    {style:"background-color:blue"},
    {style:"background-color:blue"},
    {style:"background-color:blue"},
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.cards, event.previousIndex, event.currentIndex);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
