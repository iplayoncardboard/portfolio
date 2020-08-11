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
    body: ''
  };

  tiles: TileCard[] = cardListData;

  ngOnInit(): void {
  }
}
