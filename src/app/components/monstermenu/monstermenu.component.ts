import { Component, OnInit } from '@angular/core';
import { Monster } from 'src/app/models/monster';
import { MonsterserviceService } from 'src/app/services/monsterservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-monstermenu',
  templateUrl: './monstermenu.component.html',
  styleUrls: ['./monstermenu.component.css'],
})
export class MonstermenuComponent implements OnInit {
  parentExample:number = 1;

  constructor(private monsterservice:MonsterserviceService, private router:Router, private arouter:ActivatedRoute) { }

  ngOnInit() {
    this.monsterservice.getMonster().then((response)=>{
      console.log(response);
      this.monsters = response;
    });
  }

  monsters:Array<Monster>;

  displayMonster(id:number){
    console.log(id);
    this.router.navigateByUrl('/monster')
  }

}
