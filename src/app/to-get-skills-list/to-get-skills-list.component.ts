import { Component, OnInit } from '@angular/core';
import { SKILLS } from '../test-data/mock-not-skills-prioritized'

@Component({
  selector: 'app-to-get-skills-list',
  templateUrl: './to-get-skills-list.component.html',
  styleUrls: ['./to-get-skills-list.component.css']
})
export class ToGetSkillsListComponent implements OnInit {

  skills = SKILLS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
