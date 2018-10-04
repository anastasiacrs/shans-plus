import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SofaGalleryPreviewComponent } from './sofa-gallery-preview.component';

describe('SofaGalleryPreviewComponent', () => {
  let component: SofaGalleryPreviewComponent;
  let fixture: ComponentFixture<SofaGalleryPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SofaGalleryPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SofaGalleryPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
