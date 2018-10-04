import {Component, OnInit} from '@angular/core';
import {ContactsConfigService} from './contacts-config.service';
import {ContactsConfig} from './contacts.config';

@Component({
  selector: 'shp-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  data: ContactsConfig;
  lat = 53.233165;
  lng = 26.674368;

  constructor(private service: ContactsConfigService) {
  }

  ngOnInit() {
    this.service.getConfig().subscribe(data => this.data = data);
  }


}
