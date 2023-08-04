import { Component, OnInit } from '@angular/core';
import { Curse } from '../model/curse';

@Component({
  selector: 'app-curses',
  templateUrl: './curses.component.html',
  styleUrls: ['./curses.component.scss']
})
export class CursesComponent implements OnInit {

  curses: Curse[] = [];
  displayedColumns = ['nome','categoria'];

  constructor(){
    //this.curses = [];
  }

  ngOnInit(): void {

  }

}
