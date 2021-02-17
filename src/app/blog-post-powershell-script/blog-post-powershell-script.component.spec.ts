import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostPowershellScriptComponent } from './blog-post-powershell-script.component';

describe('BlogPostPowershellScriptComponent', () => {
  let component: BlogPostPowershellScriptComponent;
  let fixture: ComponentFixture<BlogPostPowershellScriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostPowershellScriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostPowershellScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
