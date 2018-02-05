import { Component, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

@Component({
  selector: 'app-welcome',
  templateUrl: 'app/welcome/welcome.component.html'
})

export class WelcomeComponent {
  control: string = 'Hello World from comp'
  constructor() {}

  innerAction(e) {
    console.warn('innerAction::::', e);
  }

  filterActionTaken(opt) {
    console.warn('Filter Action from inner component', opt);
  }
}
