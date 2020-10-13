import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostTddComponent } from './blog-post-tdd.component';

describe('BlogPostTddComponent', () => {
  let component: BlogPostTddComponent;
  let fixture: ComponentFixture<BlogPostTddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostTddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostTddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
