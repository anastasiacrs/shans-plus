import {Component, Input, OnInit} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'shp-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [NgbCarouselConfig]
})
export class CarouselComponent implements OnInit {


  @Input() slides;
  activeSliderId;

  constructor(config: NgbCarouselConfig, private _http: HttpClient) {
    config.wrap = false;
    config.keyboard = false;
  }

  ngOnInit() {
    // this._http.get('https://picsum.photos/list')
    //   .pipe(map((images: Array<{ id: number }>) => this._randomImageUrls(images)))
    //   .subscribe(images => this.images = images);

    this.slides.map((v, i) => {
      v.id = `ngb-slide-${i}`;
      return v;
    });
    this.activeSliderId = 'ngb-slide-0';
  }


  cycleToSlide(image) {
    console.log(image.id - 1);
    const slideId = image.id - 1;

    this.activeSliderId = 'ngb-slide-' + slideId;
  }


}
