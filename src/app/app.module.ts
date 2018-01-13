import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from  '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

// COMPONENTS
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

// DIRECTIVES
import { CodeDisplayDirective } from './shared/code-display.directive';


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    CodeDisplayDirective
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
