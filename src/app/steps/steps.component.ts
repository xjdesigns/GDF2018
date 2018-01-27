import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent  {
  name = 'Angular';
  thing: boolean = false;

  theThing() {
    this.thing = !this.thing;
  }
}