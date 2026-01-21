import { Component } from '@angular/core';
import { PlayerComponent } from './player/player.component';
import { YoutubeService } from './youtube.service';
import { FormsModule } from '@angular/forms';
import { MY_COLLECTIONS } from './music-data';

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

  constructor(private yt: YoutubeService) {
    this.videos = MY_COLLECTIONS['Favorites'];
  }

  loadPlaylist(genre: string) {
    this.videos = MY_COLLECTIONS[genre];
  }

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
