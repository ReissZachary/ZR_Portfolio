import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostManagerComponent } from './blog-post-manager.component';

describe('BlogPostManagerComponent', () => {
  let component: BlogPostManagerComponent;
  let fixture: ComponentFixture<BlogPostManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
