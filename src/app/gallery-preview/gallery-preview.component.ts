import {Component, Input, OnInit} from '@angular/core';
import {GalleryPreviewConfigService} from './gallery-preview-config.service';
import {GalleryPreviewConfig} from './gallery-preview.config';


import {faSearch, faSearchPlus, faSquare} from '@fortawesome/fontawesome-free-solid';
import fontawesome from '@fortawesome/fontawesome';
import {Router} from '@angular/router';

@Component({
  selector: 'shp-gallery-preview',
  templateUrl: './gallery-preview.component.html',
  styleUrls: ['./gallery-preview.component.scss'],
  providers: []
})
export class GalleryPreviewComponent implements OnInit {

  //    configUrl = 'assets/content-config/gallery-preview/gallery-preview.json';
  //@Input()  get configUrl:String;

  _configUrl: string;

  id: string;

  get configUrl(): string {
    return this._configUrl;
  }

  @Input('configUrl')
  set configUrl(value: string) {
    this._configUrl = `assets/content-config/${value}/${value}.json`;
    this.id = value;
    //this.updatePeriodTypes();
  }

  config: GalleryPreviewConfig;


  constructor(public configService: GalleryPreviewConfigService, private router: Router) {
  }


  ngOnInit(): void {
    //
    fontawesome.library.add(faSearch);
    fontawesome.library.add(faSearchPlus);
    fontawesome.library.add(faSquare);
    this.configService.getConfigByUrl(this.configUrl)
    // clone the data object, using its known Config shape
      .subscribe(data => this.config = data);
  }

  navigateToItem(itemId) {
    this.router.navigate([`/item/${itemId}`]);
  }

}
