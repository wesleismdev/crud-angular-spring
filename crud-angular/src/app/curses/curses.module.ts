import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursesRoutingModule } from './curses-routing.module';
import { CursesComponent } from './curses/curses.component';


@NgModule({
  declarations: [
    CursesComponent
  ],
  imports: [
    CommonModule,
    CursesRoutingModule
  ]
})
export class CursesModule { }
