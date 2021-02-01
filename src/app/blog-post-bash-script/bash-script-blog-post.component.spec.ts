import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BashScriptBlogPostComponent } from './bash-script-blog-post.component';

describe('BashScriptBlogPostComponent', () => {
  let component: BashScriptBlogPostComponent;
  let fixture: ComponentFixture<BashScriptBlogPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BashScriptBlogPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BashScriptBlogPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
