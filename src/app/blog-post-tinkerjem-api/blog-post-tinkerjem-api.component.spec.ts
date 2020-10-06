import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostTinkerjemApiComponent } from './blog-post-tinkerjem-api.component';

describe('BlogPostTinkerjemApiComponent', () => {
  let component: BlogPostTinkerjemApiComponent;
  let fixture: ComponentFixture<BlogPostTinkerjemApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostTinkerjemApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostTinkerjemApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
