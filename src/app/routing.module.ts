import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DevWorkComponent } from './dev-work/dev-work.component';
import { ConnectComponent } from './connect/connect.component';


const routes: Routes = [
    { path: '', component: LandingPageComponent},
    {path: 'dev', component: DevWorkComponent},
    {path: 'connect', component: ConnectComponent},
    { path: '**', component: LandingPageComponent},
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
