import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursesComponent } from './curses/curses.component';

const routes: Routes = [
  {path: '', component: CursesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursesRoutingModule { }
