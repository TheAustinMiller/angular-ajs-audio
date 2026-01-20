import { Component, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [],
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnChanges {

  @Input() videoId?: string;

  embedUrl?: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnChanges() {
    if (this.videoId) {
      const params = `?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3&controls=1`;

      this.embedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${this.videoId}${params}`
      );
    }
  }
}
