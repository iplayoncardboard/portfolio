import { Component, OnInit } from '@angular/core';
import { TileCard, SimpleMessage } from '../interfaces/';
import { cardListData } from './data';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  gigatronMessage: SimpleMessage = {
    heading: 'Application Developer, Agile Enthusiast, Game Master',
    body: 'I\'m great at it'
  };

  tiles: TileCard[] = cardListData;

  openDialog(){
    console.log('OPEN DIALOG');
  }
  ngOnInit(): void {
  }
}
