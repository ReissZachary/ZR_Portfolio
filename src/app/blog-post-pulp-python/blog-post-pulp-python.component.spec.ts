import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostPulpPythonComponent } from './blog-post-pulp-python.component';

describe('BlogPostPulpPythonComponent', () => {
  let component: BlogPostPulpPythonComponent;
  let fixture: ComponentFixture<BlogPostPulpPythonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostPulpPythonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostPulpPythonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
