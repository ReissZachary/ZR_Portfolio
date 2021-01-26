import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostGeolocationLatLongComponent } from './blog-post-geolocation-lat-long.component';

describe('BlogPostGeolocationLatLongComponent', () => {
  let component: BlogPostGeolocationLatLongComponent;
  let fixture: ComponentFixture<BlogPostGeolocationLatLongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostGeolocationLatLongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostGeolocationLatLongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
