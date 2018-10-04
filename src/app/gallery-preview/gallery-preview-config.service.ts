import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GalleryPreviewConfig} from './gallery-preview.config';

@Injectable({
  providedIn: 'root'
})
export class GalleryPreviewConfigService {
  constructor(private http: HttpClient) {
  }

  configUrl = 'assets/content-config/gallery-preview/gallery-preview.json';

  getConfig() {
    // now returns an Observable of Config
    return this.http.get<GalleryPreviewConfig>(this.configUrl);
  }

  getConfigByUrl(url: string) {
    // now returns an Observable of Config
    return this.http.get<GalleryPreviewConfig>(url);
  }
}
