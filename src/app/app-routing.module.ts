import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BashScriptBlogPostComponent } from './blog-post-bash-script/bash-script-blog-post.component';
import { BlogPostDbOrganizationComponent } from './blog-post-db-organization/blog-post-db-organization.component';
import { BlogPostDjangoApiComponent } from './blog-post-django-api/blog-post-django-api.component';
import { BlogPostDjangoPostgresComponent } from './blog-post-django-postgres/blog-post-django-postgres.component';
import { BlogPostDockerComponent } from './blog-post-docker/blog-post-docker.component';
import { BlogPostElixirComponent } from './blog-post-elixir/blog-post-elixir.component';
import { BlogPostGeolocationFinalComponent } from './blog-post-geolocation-final/blog-post-geolocation-final.component';
import { BlogPostGeolocationLatLongComponent } from './blog-post-geolocation-lat-long/blog-post-geolocation-lat-long.component';
import { BlogPostGitComponent } from './blog-post-git/blog-post-git.component';
import { BlogPostManagerComponent } from './blog-post-manager/blog-post-manager.component';
import { BlogPostNgRoutingComponent } from './blog-post-ng-routing/blog-post-ng-routing.component';
import { BlogPostOpenSourceComponent } from './blog-post-open-source/blog-post-open-source.component';
import { BlogPostPhpLaravelApiComponent } from './blog-post-php-laravel-api/blog-post-php-laravel-api.component';
import { BlogPostPowershellScriptComponent } from './blog-post-powershell-script/blog-post-powershell-script.component';
import { BlogPostReactiveFormsComponent } from './blog-post-reactive-forms/blog-post-reactive-forms.component';
import { BlogPostSipitComponent } from './blog-post-sipit/blog-post-sipit.component';
import { BlogPostSqlJoinsComponent } from './blog-post-sql-joins/blog-post-sql-joins.component';
import { SudokuSolverBlogPostComponent } from './blog-post-sudoku-solver/sudoku-solver-blog-post.component';
import { BlogPostTddComponent } from './blog-post-tdd/blog-post-tdd.component';
import { BlogPostTinkerjemApiComponent } from './blog-post-tinkerjem-api/blog-post-tinkerjem-api.component';
import { BlogPostXamarinComponent } from './blog-post-xamarin/blog-post-xamarin.component';
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
  {
    path: 'sql-joins-blog-post',
    component: BlogPostSqlJoinsComponent
  },
  {
    path: 'tdd-blog-post',
    component: BlogPostTddComponent
  },
  {
    path: 'db-organization-blog-post',
    component: BlogPostDbOrganizationComponent
  },
  {
    path: 'docker-blog-post',
    component: BlogPostDockerComponent
  },
  {
    path: 'reactive-forms-blog-post',
    component: BlogPostReactiveFormsComponent
  },
  {
    path: 'git-blog-post',
    component: BlogPostGitComponent
  },
  {
    path: 'django-api-blog-post',
    component: BlogPostDjangoApiComponent
  },
  {
    path: 'django-postgres-blog-post',
    component: BlogPostDjangoPostgresComponent
  },
  {
    path: 'xamarin-blog-post',
    component: BlogPostXamarinComponent
  },
  {
    path: 'php-laravel-api',
    component: BlogPostPhpLaravelApiComponent
  },
  {
    path: 'elixir-blog-post',
    component: BlogPostElixirComponent
  },
  {
    path: 'geo-lat-blog-post',
    component: BlogPostGeolocationLatLongComponent
  },
  {
    path: 'geolocation',
    component: BlogPostGeolocationFinalComponent
  },
  {
    path: 'bash-script-blog-post',
    component: BashScriptBlogPostComponent
  },
  {
    path: 'sudoku-solver-blog-post',
    component: SudokuSolverBlogPostComponent
  },  
  {
    path: 'scripting-madness-blog-post',
    component: BlogPostPowershellScriptComponent
  },  
  {
    path: 'open-source-blog-post',
    component: BlogPostOpenSourceComponent
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
