import { Component } from '@angular/core';
import { PlayerComponent } from './player/player.component';
import { YoutubeService } from './youtube.service';
import { FormsModule } from '@angular/forms';
import { MY_COLLECTIONS } from './music-data';
import { Album, ALBUMS } from 'src/album-data';

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

  albumLibrary = ALBUMS;
  activeAlbum?: Album;

  constructor(private yt: YoutubeService) {
    this.videos = MY_COLLECTIONS['Favorites'];
  }

  loadPlaylist(genre: string) {
    this.activeAlbum = undefined;
    this.videos = MY_COLLECTIONS[genre];
  }

  loadAlbum(album: Album) {
    this.activeAlbum = album;
    this.videos = MY_COLLECTIONS[album.collectionKey];
  }

  search() {
    this.activeAlbum = undefined;
    this.yt.search(this.query).subscribe(res => {
      this.videos = res.items;
    });
  }

  get currentIndex(): number {
    return this.videos.findIndex(v => v.id.videoId === this.currentVideo);
  }

  get currentIdList(): string[] {
    return this.videos.map(v => v.id.videoId);
  }

  play(video: any) {
    this.currentVideo = video.id.videoId;
    this.currentTitle = video.snippet.title.replace(/(\[.*?\]|\(.*?\))/g, '').trim();
  }
}