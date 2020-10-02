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
