import { Component } from '@angular/core';
import { YoutubeService } from './youtube.service';

@Component({
    selector: 'app-root',
    template: `
    <h1>My Music App</h1>
    
    <input
      [(ngModel)]="query"
      placeholder="Search music..."
      />
    <button (click)="search()">Search</button>
    
    <ul>
      @for (v of videos; track v) {
        <li
          (click)="play(v.id.videoId)"
          >
          {{ v.snippet.title }}
        </li>
      }
    </ul>
    
    <app-player [videoId]="currentVideo"></app-player>
    `,
    standalone: false
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
