import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostFirstProgramComponent } from './blog-post-first-program.component';

describe('BlogPostFirstProgramComponent', () => {
  let component: BlogPostFirstProgramComponent;
  let fixture: ComponentFixture<BlogPostFirstProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostFirstProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostFirstProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
