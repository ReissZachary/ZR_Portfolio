import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostDockerComponent } from './blog-post-docker.component';

describe('BlogPostDockerComponent', () => {
  let component: BlogPostDockerComponent;
  let fixture: ComponentFixture<BlogPostDockerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostDockerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostDockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
