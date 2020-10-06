import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogPostManagerComponent } from './blog-post-manager/blog-post-manager.component';
import { BlogPostNgRoutingComponent } from './blog-post-ng-routing/blog-post-ng-routing.component';
import { BlogPostSipitComponent } from './blog-post-sipit/blog-post-sipit.component';
import { BlogPostTinkerjemApiComponent } from './blog-post-tinkerjem-api/blog-post-tinkerjem-api.component';
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
  },
  {
    path: 'zr-blog-posts',
    component: BlogPostManagerComponent
  },
  {
    path: 'ng-routing-blog-post',
    component: BlogPostNgRoutingComponent
  },
  {
    path: 'sipit-blog-post',
    component: BlogPostSipitComponent
  },
  {
    path: 'tinkerjems-api-blog-post',
    component: BlogPostTinkerjemApiComponent
  },
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
