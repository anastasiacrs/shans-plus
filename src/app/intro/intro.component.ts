import {Component, Input, OnInit} from '@angular/core';
import {IntroConfig} from './intro.config';
import {IntroConfigService} from './intro-config.service';

@Component({
  selector: 'shp-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  providers: [IntroConfigService]
})
export class IntroComponent implements OnInit {

  config: IntroConfig;

  constructor(public configService: IntroConfigService) {
  }


  ngOnInit(): void {console.log('init');
    this.configService.getConfig()
      .subscribe(data => this.config = data);
  }
}
