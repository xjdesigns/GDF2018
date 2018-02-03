import { Component } from '@angular/core';
import { Router, NavigationStart } from  '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})

export class AppComponent {
  sideNavIsOpen: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationStart) {
        this.sideNavIsOpen = false;
      }
    });
  }

  toggleSidenav() {
    this.sideNavIsOpen = !this.sideNavIsOpen;
  }
}
