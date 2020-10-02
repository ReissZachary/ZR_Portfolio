import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostNgRoutingComponent } from './blog-post-ng-routing.component';

describe('BlogPostNgRoutingComponent', () => {
  let component: BlogPostNgRoutingComponent;
  let fixture: ComponentFixture<BlogPostNgRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostNgRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostNgRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
