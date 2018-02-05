import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: 'app/components/components/menu/menu.component.html'
})

export class MenuComponent {
  menuIsOpen: boolean = false;
  @Input() menuIcon: string;
  @Input() menuList = [];
  @Output() menuOptionClicked = new EventEmitter<any>();

  constructor() {}

  toggleMenu() {
    this.menuIsOpen = !this.menuIsOpen;
  }

  menuOptionClick(item) {
    this.menuOptionClicked.emit({item});
  }
}
