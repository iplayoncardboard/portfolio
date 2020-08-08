import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TileCard  } from '../interfaces';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit    {
  @Output()closeContact: EventEmitter<any> = new EventEmitter();

  constructor() { }
  ngOnInit(): void {}

  toggleContactTray(event){
    console.log('toggleClicked');
    this.closeContact.emit(event);
  }
}
