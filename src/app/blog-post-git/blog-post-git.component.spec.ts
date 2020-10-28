import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostGitComponent } from './blog-post-git.component';

describe('BlogPostGitComponent', () => {
  let component: BlogPostGitComponent;
  let fixture: ComponentFixture<BlogPostGitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostGitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostGitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
