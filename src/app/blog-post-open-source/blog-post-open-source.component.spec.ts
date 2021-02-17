import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostOpenSourceComponent } from './blog-post-open-source.component';

describe('BlogPostOpenSourceComponent', () => {
  let component: BlogPostOpenSourceComponent;
  let fixture: ComponentFixture<BlogPostOpenSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostOpenSourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostOpenSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
