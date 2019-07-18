import { Injectable } from '@angular/core';
import { Monster } from '../models/monster';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MonsterserviceService {

  constructor(private http:HttpClient) { }

  getMonesterById(id:number):Promise<Monster[]>{
    return this.http.get<Monster[]>("https://mhw-db.com/monsters").toPromise();
  }
}
