import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToGetSkillsListComponent } from './to-get-skills-list.component';

describe('ToGetSkillsListComponent', () => {
  let component: ToGetSkillsListComponent;
  let fixture: ComponentFixture<ToGetSkillsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToGetSkillsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToGetSkillsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
