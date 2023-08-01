import { CursesComponent } from './curses/curses/curses.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'curses' },
  {
    path: 'curses',
    loadChildren: () => import('./curses/curses.module').then(m => m.CursesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
