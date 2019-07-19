import { Component, OnInit } from '@angular/core';
import { Monster } from 'src/app/models/monster';
import { MonsterserviceService } from 'src/app/services/monsterservice.service';

@Component({
  selector: 'app-monstermenu',
  templateUrl: './monstermenu.component.html',
  styleUrls: ['./monstermenu.component.css']
})
export class MonstermenuComponent implements OnInit {

  constructor(private monsterservice:MonsterserviceService) { }

  ngOnInit() {
    this.monsterservice.getMonesterById(1).then((response)=>{
     // console.log(response);
      this.monsters = response;
    });
  }

  monsters:Array<Monster>;

}
