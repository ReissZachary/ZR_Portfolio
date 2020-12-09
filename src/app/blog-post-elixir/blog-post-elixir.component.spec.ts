import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostElixirComponent } from './blog-post-elixir.component';

describe('BlogPostElixirComponent', () => {
  let component: BlogPostElixirComponent;
  let fixture: ComponentFixture<BlogPostElixirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostElixirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostElixirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
