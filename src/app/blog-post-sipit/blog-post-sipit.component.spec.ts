import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostSipitComponent } from './blog-post-sipit.component';

describe('BlogPostSipitComponent', () => {
  let component: BlogPostSipitComponent;
  let fixture: ComponentFixture<BlogPostSipitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostSipitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostSipitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
