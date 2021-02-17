import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudokuSolverBlogPostComponent } from './sudoku-solver-blog-post.component';

describe('SudokuSolverBlogPostComponent', () => {
  let component: SudokuSolverBlogPostComponent;
  let fixture: ComponentFixture<SudokuSolverBlogPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SudokuSolverBlogPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SudokuSolverBlogPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
