import {Injectable} from '@angular/core';
import {NavigationConfig} from './navigation-config';


import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable(
  {providedIn: 'root'}
)
export class NavigationConfigService {
  constructor(private http: HttpClient) {
  }

  configUrl = 'assets/content-config/navigation/navigation.json';

  getConfig() {
    // now returns an Observable of Config
    //  return this.http.get<Hero[]>(this.heroesUrl)
    return this.http.get<NavigationConfig>(this.configUrl);
  }
}
