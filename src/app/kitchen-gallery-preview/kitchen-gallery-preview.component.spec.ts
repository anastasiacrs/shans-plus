import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenGalleryPreviewComponent } from './kitchen-gallery-preview.component';

describe('KitchenGalleryPreviewComponent', () => {
  let component: KitchenGalleryPreviewComponent;
  let fixture: ComponentFixture<KitchenGalleryPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenGalleryPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenGalleryPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
