import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { ToGetSkillsListComponent } from './to-get-skills-list/to-get-skills-list.component';

const routes: Routes = [
  {
    path:'',
    component: MainPageComponent,
  },
  {
    path:'zr-skills',
    component: SkillsListComponent,
  },
  {
    path: 'zr-skills-in-development',
    component: ToGetSkillsListComponent
  },
  {
    path: 'zr-resume',
    component: ResumeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    enableTracing: false
  })
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
