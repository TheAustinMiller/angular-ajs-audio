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

  constructor(private yt: YoutubeService) {}

  search() {
    this.yt.search(this.query).subscribe(res => {
      this.videos = res.items;
    });
  }

  play(id: string) {
    this.currentVideo = id;
  }
}
