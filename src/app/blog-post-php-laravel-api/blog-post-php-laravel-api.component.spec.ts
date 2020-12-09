import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostPhpLaravelApiComponent } from './blog-post-php-laravel-api.component';

describe('BlogPostPhpLaravelApiComponent', () => {
  let component: BlogPostPhpLaravelApiComponent;
  let fixture: ComponentFixture<BlogPostPhpLaravelApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostPhpLaravelApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostPhpLaravelApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
