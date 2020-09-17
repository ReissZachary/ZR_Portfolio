import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotSkillsListUnprioritizedComponent } from './not-skills-list-unprioritized.component';

describe('NotSkillsListUnprioritizedComponent', () => {
  let component: NotSkillsListUnprioritizedComponent;
  let fixture: ComponentFixture<NotSkillsListUnprioritizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotSkillsListUnprioritizedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotSkillsListUnprioritizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
