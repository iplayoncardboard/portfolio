import { Component, EventEmitter, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MatDrawer)
  private matDrawerComponent: MatDrawer;

  toggleContactTray(){
    this.matDrawerComponent.toggle();

  }

}
