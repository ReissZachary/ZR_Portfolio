import { Component, OnInit } from '@angular/core';
import { SKILLS } from '../test-data/mock-skills';

@Component({
  selector: 'app-main-skills-list',
  templateUrl: './main-skills-list.component.html',
  styleUrls: ['./main-skills-list.component.css']
})
export class MainSkillsListComponent implements OnInit {

  constructor() { }
  
  skills = SKILLS;

  ngOnInit(): void {
  }

}
