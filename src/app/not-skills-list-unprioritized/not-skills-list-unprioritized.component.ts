import { Component, OnInit } from '@angular/core';
import { SKILLS } from '../test-data/mock-not-skills-unprioritized'

@Component({
  selector: 'app-not-skills-list-unprioritized',
  templateUrl: './not-skills-list-unprioritized.component.html',
  styleUrls: ['./not-skills-list-unprioritized.component.css']
})
export class NotSkillsListUnprioritizedComponent implements OnInit {

  skills = SKILLS;
  constructor() { }

  ngOnInit(): void {
  }

}
