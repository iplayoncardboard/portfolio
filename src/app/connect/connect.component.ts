import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TileCard  } from '../interfaces';
import { MatDrawer } from '@angular/material/sidenav';
import { contactData } from './data';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit    {

  contacts = contactData;

  constructor() { }
  @Output()closeContact: EventEmitter<any> = new EventEmitter();

contactArray;
  ngOnInit(): void {}
  toggleContactTray(event){
    this.closeContact.emit(event);
  }
}
