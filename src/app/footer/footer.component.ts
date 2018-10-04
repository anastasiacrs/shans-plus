import {Component, OnInit} from '@angular/core';
import {NavigationConfigService} from '../navigation/navigation-config.service';
import {NavigationConfig} from '../navigation/navigation-config';
import {Router} from '@angular/router';
import {FooterConfig} from './footer.config';
import {FooterConfigService} from './footer-config.service';

@Component({
  selector: 'shp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {

  footer: FooterConfig;


  constructor(public configService: FooterConfigService) {
  }

  config: NavigationConfig;


  ngOnInit(): void {
    this.configService.getConfig()
    // clone the data object, using its known Config shape
      .subscribe(data => this.footer = data);
  }

}
