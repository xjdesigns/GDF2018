import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { StepsComponent } from './steps/steps.component';
// import { ComponentsRouting } from './components/components/components.routes';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'steps', component: StepsComponent }
  // ...ComponentsRouting
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
