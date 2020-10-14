import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostDbOrganizationComponent } from './blog-post-db-organization.component';

describe('BlogPostDbOrganizationComponent', () => {
  let component: BlogPostDbOrganizationComponent;
  let fixture: ComponentFixture<BlogPostDbOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostDbOrganizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostDbOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
