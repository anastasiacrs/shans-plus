import {Component, OnInit} from '@angular/core';
import {NavigationConfigService} from '../navigation/navigation-config.service';
import {NavigationConfig} from '../navigation/navigation-config';
import {PromoConfigService} from './promo-config.service';
import {PromoConfig} from './promo-config';

@Component({
  selector: 'shp-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss'],
  providers: []
})
export class PromoComponent implements OnInit {
  constructor(public configService: PromoConfigService) {
  }

  config: PromoConfig;


  ngOnInit(): void {
    this.configService.getConfig()
    // clone the data object, using its known Config shape
      .subscribe(data => this.config = data);
  }
}
