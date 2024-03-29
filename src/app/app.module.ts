import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { ClarityModule } from '@clr/angular';
import { ToGetSkillsListComponent } from './to-get-skills-list/to-get-skills-list.component';
import { NotSkillsListUnprioritizedComponent } from './not-skills-list-unprioritized/not-skills-list-unprioritized.component';
import { ResumeComponent } from './resume/resume.component';
import { BlogPostManagerComponent } from './blog-post-manager/blog-post-manager.component';
import { BlogPostNgRoutingComponent } from './blog-post-ng-routing/blog-post-ng-routing.component';
import { BlogPostSipitComponent } from './blog-post-sipit/blog-post-sipit.component';
import { BlogPostTinkerjemApiComponent } from './blog-post-tinkerjem-api/blog-post-tinkerjem-api.component';
import { BlogPostSqlJoinsComponent } from './blog-post-sql-joins/blog-post-sql-joins.component';
import { BlogPostTddComponent } from './blog-post-tdd/blog-post-tdd.component';
import { BlogPostDbOrganizationComponent } from './blog-post-db-organization/blog-post-db-organization.component';
import { BlogPostDockerComponent } from './blog-post-docker/blog-post-docker.component';
import { BlogPostReactiveFormsComponent } from './blog-post-reactive-forms/blog-post-reactive-forms.component';
import { BlogPostGitComponent } from './blog-post-git/blog-post-git.component';
import { BlogPostDjangoApiComponent } from './blog-post-django-api/blog-post-django-api.component';
import { BlogPostDjangoPostgresComponent } from './blog-post-django-postgres/blog-post-django-postgres.component';
import { MainSkillsListComponent } from './main-skills-list/main-skills-list.component';
import { BlogPostXamarinComponent } from './blog-post-xamarin/blog-post-xamarin.component';
import { BlogPostPhpLaravelApiComponent } from './blog-post-php-laravel-api/blog-post-php-laravel-api.component';
import { BlogPostElixirComponent } from './blog-post-elixir/blog-post-elixir.component';
import { BlogPostGeolocationLatLongComponent } from './blog-post-geolocation-lat-long/blog-post-geolocation-lat-long.component';
import { BlogPostGeolocationFinalComponent } from './blog-post-geolocation-final/blog-post-geolocation-final.component';
import { BashScriptBlogPostComponent } from './blog-post-bash-script/bash-script-blog-post.component';
import { SudokuSolverBlogPostComponent } from './blog-post-sudoku-solver/sudoku-solver-blog-post.component';
import { BlogPostPowershellScriptComponent } from './blog-post-powershell-script/blog-post-powershell-script.component';
import { BlogPostOpenSourceComponent } from './blog-post-open-source/blog-post-open-source.component';
import { BlogPostMetricMonitorComponent } from './blog-post-metric-monitor/blog-post-metric-monitor.component';
import { BlogPostFirstProgramComponent } from './blog-post-first-program/blog-post-first-program.component';
import { BlogPostPulpPythonComponent } from './blog-post-pulp-python/blog-post-pulp-python.component';
import { BlogPostGrafanaOpenSourceComponent } from './blog-post-grafana-open-source/blog-post-grafana-open-source.component';
import { BlogPostDynamicProgrammingComponent } from './blog-post-dynamic-programming/blog-post-dynamic-programming.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SkillsListComponent,
    ToGetSkillsListComponent,
    NotSkillsListUnprioritizedComponent,
    ResumeComponent,
    BlogPostManagerComponent,
    BlogPostNgRoutingComponent,
    BlogPostSipitComponent,
    BlogPostTinkerjemApiComponent,
    BlogPostSqlJoinsComponent,
    BlogPostTddComponent,
    BlogPostDbOrganizationComponent,
    BlogPostDockerComponent,
    BlogPostReactiveFormsComponent,
    BlogPostGitComponent,
    BlogPostDjangoApiComponent,
    BlogPostDjangoPostgresComponent,
    MainSkillsListComponent,
    BlogPostXamarinComponent,
    BlogPostPhpLaravelApiComponent,
    BlogPostElixirComponent,
    BlogPostGeolocationLatLongComponent,
    BlogPostGeolocationFinalComponent,
    BashScriptBlogPostComponent,
    SudokuSolverBlogPostComponent,
    BlogPostPowershellScriptComponent,
    BlogPostOpenSourceComponent,
    BlogPostMetricMonitorComponent,
    BlogPostFirstProgramComponent,
    BlogPostPulpPythonComponent,
    BlogPostGrafanaOpenSourceComponent,
    BlogPostDynamicProgrammingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    ClarityModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
