import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostXamarinComponent } from './blog-post-xamarin.component';

describe('BlogPostXamarinComponent', () => {
  let component: BlogPostXamarinComponent;
  let fixture: ComponentFixture<BlogPostXamarinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostXamarinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostXamarinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
