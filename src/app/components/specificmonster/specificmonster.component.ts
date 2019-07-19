import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-specificmonster',
  templateUrl: './specificmonster.component.html',
  styleUrls: ['./specificmonster.component.css'],
  template:`Example:{{id}}`
})
export class SpecificmonsterComponent implements OnInit {

  @Input()
  id:number;

  constructor() { }

  ngOnInit() {
  }

}
