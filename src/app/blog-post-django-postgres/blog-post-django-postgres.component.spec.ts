import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostDjangoPostgresComponent } from './blog-post-django-postgres.component';

describe('BlogPostDjangoPostgresComponent', () => {
  let component: BlogPostDjangoPostgresComponent;
  let fixture: ComponentFixture<BlogPostDjangoPostgresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostDjangoPostgresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostDjangoPostgresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
