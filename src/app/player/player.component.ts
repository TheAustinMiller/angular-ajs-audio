import { Component, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-player',
  standalone: true,
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnChanges {
  @Input() videoId: string = '';
  @Input() playlistIds: string[] = [];

  embedUrl?: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnChanges() {
    if (this.videoId && this.playlistIds.length > 0) {
      const list = this.playlistIds.join(',');

      const startIndex = this.playlistIds.indexOf(this.videoId);

      const rawUrl = `https://www.youtube.com/embed/${this.videoId}?playlist=${list}&index=${startIndex}&autoplay=1&rel=0&iv_load_policy=3&modestbranding=1`;

      this.embedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(rawUrl);
    }
  }
}