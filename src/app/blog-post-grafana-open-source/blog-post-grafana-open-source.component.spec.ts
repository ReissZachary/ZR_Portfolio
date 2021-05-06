import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostGrafanaOpenSourceComponent } from './blog-post-grafana-open-source.component';

describe('BlogPostGrafanaOpenSourceComponent', () => {
  let component: BlogPostGrafanaOpenSourceComponent;
  let fixture: ComponentFixture<BlogPostGrafanaOpenSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostGrafanaOpenSourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostGrafanaOpenSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
