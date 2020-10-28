import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostReactiveFormsComponent } from './blog-post-reactive-forms.component';

describe('BlogPostReactiveFormsComponent', () => {
  let component: BlogPostReactiveFormsComponent;
  let fixture: ComponentFixture<BlogPostReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostReactiveFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
