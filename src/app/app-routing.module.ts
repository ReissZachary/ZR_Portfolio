import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { SkillsListComponent } from './skills-list/skills-list.component';

const routes: Routes = [
  {
    path:'',
    component: MainPageComponent,
  },
  {
    path:'skills',
    component: SkillsListComponent,
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
