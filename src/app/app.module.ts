import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DevWorkComponent } from './dev-work/dev-work.component';

import { MaterialModule } from './material/material.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConnectComponent } from './connect/connect.component';
import { ContactCardComponent } from './contact-card/contact-card.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LandingPageComponent,
    DevWorkComponent,
    ConnectComponent,
    ContactCardComponent,
  ],
  imports: [
    BrowserModule,

    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
