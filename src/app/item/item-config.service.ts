import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Item} from './item.config';

@Injectable({
  providedIn: 'root'
})
export class ItemConfigService {
  constructor(private http: HttpClient) {
  }

  configUrl = 'assets/content-config/items/items.json';

  // getConfig() {
  //   // now returns an Observable of Config
  //   return this.http.get<Item>(this.configUrl);
  // }

  getConfigById(id: string) {
    // now returns an Observable of Config
    return this.http.get<Item>(this.compileUrl(id));
  }

  private compileUrl(id: string) {
    return `assets/content-config/items/${id}.json`;
  }

  // getConfigByUrl(url: string) {
  //   // now returns an Observable of Config
  //   return this.http.get<Item>(url);
  // }
}
