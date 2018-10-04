import {Injectable} from '@angular/core';


import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FooterConfig} from './footer.config';

@Injectable(
  {providedIn: 'root'}
)
export class FooterConfigService {
  constructor(private http: HttpClient) {
  }

  configUrl = 'assets/content-config/footer/footer.json';

  getConfig() {
    return this.http.get<FooterConfig>(this.configUrl);
  }
}
