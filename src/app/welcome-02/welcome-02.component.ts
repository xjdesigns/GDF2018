import { Component, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

@Component({
  selector: 'app-welcome-02',
  templateUrl: 'app/welcome-02/welcome-02.component.html'
})

export class Welcome02Component {
  constructor() {}

  innerAction(e) {
    console.warn('innerAction::::', e);
  }

  filterActionTaken(opt) {
    console.warn('Filter Action from inner component', opt);
  }
}
