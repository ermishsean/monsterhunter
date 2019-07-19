import { Injectable } from '@angular/core';
import { Youtube } from '../models/youtube';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  constructor(private http:HttpClient) { }

  getYoutubeVids(search:string):Promise<any>{
    return this.http.get<any>("https://www.googleapis.com/youtube/v3/search?q=" + search + "&key=AIzaSyAJbefOFJv2Yl6T1FuckHxJds-nNUD17zk&type=video&safeSearch=none&maxResults=3&part=snippet").toPromise();
  }
}
