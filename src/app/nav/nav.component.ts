import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Output() toggleContact: EventEmitter<any> = new EventEmitter<any>();
  title = 'Erik C Hurst';
  constructor() { }

  ngOnInit(): void {
  }

  contactToggle(event){
    this.toggleContact.emit(event);
  }

}
