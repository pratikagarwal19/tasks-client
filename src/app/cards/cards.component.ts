import { Component, OnInit } from '@angular/core';

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
    {style:"background-color:blue"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
