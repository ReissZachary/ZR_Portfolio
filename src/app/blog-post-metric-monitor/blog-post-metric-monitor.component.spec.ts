import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostMetricMonitorComponent } from './blog-post-metric-monitor.component';

describe('BlogPostMetricMonitorComponent', () => {
  let component: BlogPostMetricMonitorComponent;
  let fixture: ComponentFixture<BlogPostMetricMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostMetricMonitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostMetricMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
