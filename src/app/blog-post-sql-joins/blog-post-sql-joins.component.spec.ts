import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostSqlJoinsComponent } from './blog-post-sql-joins.component';

describe('BlogPostSqlJoinsComponent', () => {
  let component: BlogPostSqlJoinsComponent;
  let fixture: ComponentFixture<BlogPostSqlJoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostSqlJoinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostSqlJoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
