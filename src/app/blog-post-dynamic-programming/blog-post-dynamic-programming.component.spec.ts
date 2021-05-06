import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostDynamicProgrammingComponent } from './blog-post-dynamic-programming.component';

describe('BlogPostDynamicProgrammingComponent', () => {
  let component: BlogPostDynamicProgrammingComponent;
  let fixture: ComponentFixture<BlogPostDynamicProgrammingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostDynamicProgrammingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostDynamicProgrammingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
