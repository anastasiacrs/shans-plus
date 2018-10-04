import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IntroComponent} from './intro/intro.component';
import {GalleryPreviewComponent} from './gallery-preview/gallery-preview.component';
import {SofaGalleryPreviewComponent} from './sofa-gallery-preview/sofa-gallery-preview.component';
import {KitchenGalleryPreviewComponent} from './kitchen-gallery-preview/kitchen-gallery-preview.component';
import {PromoComponent} from './promo/promo.component';
import {ItemComponent} from './item/item.component';
import {ContactsComponent} from './contacts/contacts.component';

const routes: Routes = [
  {path: '', redirectTo: 'intro', pathMatch: 'full'},
  {path: 'home', component: IntroComponent},
  {path: 'intro', component: IntroComponent},
  {path: 'sofa-gallery-preview', component: SofaGalleryPreviewComponent},
  {path: 'kitchen-gallery-preview', component: KitchenGalleryPreviewComponent},
  {path: 'promo', component: PromoComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'item/:id', component: ItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
