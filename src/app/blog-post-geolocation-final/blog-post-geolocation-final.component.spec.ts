import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostGeolocationFinalComponent } from './blog-post-geolocation-final.component';

describe('BlogPostGeolocationFinalComponent', () => {
  let component: BlogPostGeolocationFinalComponent;
  let fixture: ComponentFixture<BlogPostGeolocationFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostGeolocationFinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostGeolocationFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
