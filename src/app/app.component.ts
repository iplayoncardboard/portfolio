import { Component, EventEmitter, ViewChild, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import {MediaMatcher} from '@angular/cdk/layout';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MatDrawer)
  private matDrawerComponent: MatDrawer;
  mobileQuery: MediaQueryList;

  private mobileQueryListener: () => void;

  // constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher){
  //   this.mobileQuery = media.matchMedia('(max-width: 600px)');
  //   this.mobileQueryListener = () => changeDetectorRef.detectChanges();
  //   this.mobileQuery.addListener(this.mobileQueryListener);
  // }
  toggleContactTray(){
    this.matDrawerComponent.toggle();

  // }
  // ngOnDestroy(): void {
  //   this.mobileQuery.removeListener(this.mobileQueryListener);
  }
}
