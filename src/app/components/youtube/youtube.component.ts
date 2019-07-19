import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { YoutubeService } from 'src/app/services/youtubeservice.service';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {


  constructor(private youtubeservice:YoutubeService, private router: Router) {}

  videos:string = ""; 
 
  ngOnInit() {
    console.log(this.router.url);


    this.youtubeservice.getYoutubeVids("mhw nergigante")
    .then((response) => {
      for (var i = 0; i < response.items.length ; i++) {
        this.videos += `<h2>` + response.items[i].snippet.title + `</h2><br/>
        <a href="https://youtu.be/` + response.items[i].id.videoId + `" target="_blank"><img src="https://i.ytimg.com/vi/` + response.items[i].id.videoId +`/hqdefault.jpg"></a>
        <br/><p>` + response.items[i].snippet.description + `</p>`;
      }
    });
  } 

}
