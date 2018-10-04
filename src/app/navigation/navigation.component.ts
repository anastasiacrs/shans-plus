import {Component, Input, OnChanges, OnInit, ViewEncapsulation} from '@angular/core';
import {NavigationConfigService} from './navigation-config.service';
import {NavigationConfig} from './navigation-config';
import {Router} from '@angular/router';


@Component({
  selector: 'shp-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  providers: [NavigationConfigService]
})
export class NavigationComponent implements OnInit {

  config: NavigationConfig;

  sections = [
    {active: false, value: 'intro', id: 'intro', label: 'Главная'},
    {active: false, value: 'sofa-gallery-preview', id: 'sofa-gallery-preview', label: 'Мягкая мебель'},
    {active: false, value: 'promo', id: 'promo', label: 'Акции'},
    {active: false, value: 'kitchen-gallery-preview', id: 'kitchen-gallery-preview', label: 'Кухонная мебель'},
    {active: false, value: 'contacts', id: 'contacts', label: 'Контакты'}

  ];

  constructor(public configService: NavigationConfigService, public router: Router) {
  }

  ngOnInit(): void {
    this.configService.getConfig()
      .subscribe(data => this.config = data);
  }

}
