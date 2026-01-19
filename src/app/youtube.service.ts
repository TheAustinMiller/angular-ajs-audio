import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class YoutubeService {
  private apiUrl = 'https://music-proxy-api.onrender.com';

  constructor(private http: HttpClient) {}

  search(query: string) {
    return this.http.get<any>(
      `${this.apiUrl}/api/search?q=${encodeURIComponent(query)}`
    );
  }
}
