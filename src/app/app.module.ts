import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './/app-routing.module';
import {IntroComponent} from './intro/intro.component';
import {SvgLogoComponent} from './svg-logo/svg.logo.component';
import {NavigationComponent} from './navigation/navigation.component';
import {HttpClientModule} from '@angular/common/http';
import {FooterComponent} from './footer/footer.component';
import {GalleryPreviewComponent} from './gallery-preview/gallery-preview.component';
import {SofaGalleryPreviewComponent} from './sofa-gallery-preview/sofa-gallery-preview.component';
import {KitchenGalleryPreviewComponent} from './kitchen-gallery-preview/kitchen-gallery-preview.component';
import {PromoComponent} from './promo/promo.component';
import {ItemComponent} from './item/item.component';
import {CarouselComponent} from './carousel/carousel.component';
import {ContactsComponent} from './contacts/contacts.component';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    SvgLogoComponent,
    NavigationComponent,
    IntroComponent, FooterComponent, GalleryPreviewComponent, SofaGalleryPreviewComponent,
    KitchenGalleryPreviewComponent, PromoComponent, ItemComponent, CarouselComponent, ContactsComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCVFVR1p_e_8tLDug_4OECSD7o4D25pIOc'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
