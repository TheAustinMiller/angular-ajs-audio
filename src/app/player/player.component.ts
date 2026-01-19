import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'app-player',
    template: `
    @if (videoId) {
      <iframe
        width="100%"
        height="80"
        [src]="embedUrl"
        frameborder="0"
        allow="autoplay"
      ></iframe>
    }
    `,
    standalone: false
})
export class PlayerComponent implements OnChanges {
  @Input() videoId!: string;
  embedUrl = '';

  ngOnChanges() {
    this.embedUrl =
      `https://www.youtube.com/embed/${this.videoId}?autoplay=1`;
  }
}
