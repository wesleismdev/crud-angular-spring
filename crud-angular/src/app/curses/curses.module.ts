import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { CursesRoutingModule } from './curses-routing.module';
import { CursesComponent } from './curses/curses.component';


@NgModule({
  declarations: [
    CursesComponent
  ],
  imports: [
    CommonModule,
    CursesRoutingModule,
    MatTableModule
  ]
})
export class CursesModule { }
