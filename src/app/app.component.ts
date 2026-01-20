import { Component } from '@angular/core';
import { PlayerComponent } from './player/player.component';
import { YoutubeService } from './youtube.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlayerComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  query = '';
  videos: any[] = [];
  currentVideo = '';
  currentTitle: any;

  constructor(private yt: YoutubeService) { }

  search() {
    this.yt.search(this.query).subscribe(res => {
      this.videos = res.items;
    });
  }

  play(video: any) {
    this.currentVideo = video.id.videoId;
    this.currentTitle = video.snippet.title.replace(/(\[.*?\]|\(.*?\))/g, '').trim();
  }
}
