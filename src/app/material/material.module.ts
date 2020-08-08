import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    MatSidenavModule
  ]
})
export class MaterialModule { }
