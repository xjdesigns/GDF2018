import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { Welcome02Component } from './welcome-02/welcome-02.component';
import { DocsComponent } from './docs/docs.component';
import { StepsComponent } from './steps/steps.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'welcome02', component: Welcome02Component },
  { path: 'docs', component: DocsComponent },
  { path: 'steps', component: StepsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
