import { Component, OnInit } from '@angular/core';
import { Monster } from 'src/app/models/monster';

@Component({
  selector: 'app-monstermenu',
  templateUrl: './monstermenu.component.html',
  styleUrls: ['./monstermenu.component.css']
})
export class MonstermenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  monsters:Array<Monster>;

}
