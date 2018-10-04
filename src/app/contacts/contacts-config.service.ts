import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ContactsConfig} from './contacts.config';

@Injectable({
  providedIn: 'root'
})
export class ContactsConfigService {

  constructor(private http: HttpClient) {
  }

  configUrl = 'assets/content-config/contacts/contacts.json';

  getConfig() {
    return this.http.get<ContactsConfig>(this.configUrl);
  }

}
