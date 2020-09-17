import { Component, Input, OnInit } from '@angular/core';
import { SKILLS } from '../test-data/mock-skills';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.css']
})
export class SkillsListComponent implements OnInit {

  skills = SKILLS;

  constructor() { }

  ngOnInit(): void {
  }

}
