import { Component, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

@Component({
  selector: 'app-home',
  templateUrl: 'app/home/home.component.html'
})

export class HomeComponent {
  control: string = 'Hello World from comp'
  constructor() {}

  innerAction(e) {
    console.warn('innerAction::::', e);
  }
}
