import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PromoConfig} from './promo-config';

@Injectable({
  providedIn: 'root'
})
export class PromoConfigService {
  constructor(private http: HttpClient) {
  }

  configUrl = 'assets/content-config/promo/promo.json';

  getConfig() {
    // now returns an Observable of Config
    return this.http.get<PromoConfig>(this.configUrl);
  }
}
