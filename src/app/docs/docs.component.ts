import { Component, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

@Component({
  selector: 'app-docs',
  templateUrl: 'app/docs/docs.component.html'
})

export class DocsComponent {
  constructor() {}
}
