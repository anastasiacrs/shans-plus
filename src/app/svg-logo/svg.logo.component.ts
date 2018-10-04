import {Component, Input} from '@angular/core';

@Component({
  selector: 'shp-svg-logo',
  templateUrl: './svg.logo.component.html'
})
export class SvgLogoComponent {
  @Input() size: string;
}
