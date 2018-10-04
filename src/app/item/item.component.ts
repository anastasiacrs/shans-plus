import {Component, OnInit, ViewChild} from '@angular/core';
import {SlickComponent} from 'ngx-slick';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ItemConfigService} from './item-config.service';
import {Item} from './item.config';


@Component({
  selector: 'shp-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit{


  // slides2 = [
  //   {src: 'http://placehold.it/450x150?text=1'},
  //   {img: 'http://placehold.it/300x150?text=2'},
  //   {img: 'http://placehold.it/250x110?text=3'},
  //   {img: 'http://placehold.it/850x350?text=4'},
  //   {img: 'http://placehold.it/350x180?text=5'},
  //   {img: 'http://placehold.it/350x140?text=6'},
  //   {img: 'http://placehold.it/350x100?text=7'},
  //   {img: 'http://placehold.it/150x120?text=8'}
  // ];
  // slides = [
  //   {img: 'assets/images/gallery-preview/01.jpg'},
  //   {img: 'assets/images/gallery-preview/02.jpg'},
  //   {img: 'assets/images/gallery-preview/03.jpg'},
  //   {img: 'assets/images/gallery-preview/04.jpg'},
  //   {img: 'assets/images/gallery-preview/05.jpg'}
  // ];


  item: Item;


  constructor(
    //  private service: HeroService,
    private route: ActivatedRoute,
    private itemConfigService: ItemConfigService
  ) {
  }


  ngOnInit() {
    // // this.item =
    //      this.route.paramMap
    //      .switchMap((params: ParamMap) => {
    //          // (+) before `params.get()` turns the string into a number
    //          this.itemId = params.get('id');
    //          console.log(this.itemId);
    //         // return this.service.getHeroes();
    //      });


    const itemId = this.route.snapshot.paramMap.get('id');

    this.itemConfigService.getConfigById(itemId)
    // clone the data object, using its known Config shape
      .subscribe(data => this.item = data);
  }

}
