import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostDjangoApiComponent } from './blog-post-django-api.component';

describe('BlogPostDjangoApiComponent', () => {
  let component: BlogPostDjangoApiComponent;
  let fixture: ComponentFixture<BlogPostDjangoApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostDjangoApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostDjangoApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
