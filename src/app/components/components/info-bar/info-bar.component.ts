import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-info-bar',
  templateUrl: 'app/components/components/info-bar/info-bar.component.html'
})

export class InfoBarComponent {
  toggleIsActive: boolean = false;
  @Input() infoImg: string;
  @Input() infoTitle: string = 'Provide a title';
  @Input() infoDesc: string = 'Prodive a description';
  @Input() infoActions = [];
  @Output() onActionTaken = new EventEmitter<any>();

  optionsMenuList = [{
    name: 'Item 01'
  }, {
    name: 'Item 02'
  }, {
    name: 'Item 03'
  }]

  constructor() {
    this.infoActions = [{
      icon: 'timeline',
      item: 'timeline'
    }, {
      icon: 'access_time',
      item: 'timing'
    }, {
      icon: 'delete',
      item: 'delete'
    }, {
      icon: 'check',
      item: 'select'
    }]
    console.warn('options', this.optionsMenuList);
  }

  toggleExt() {
    this.toggleIsActive = !this.toggleIsActive;
  }

  actionClick(idx, item) {
    this.onActionTaken.emit({idx, item});
  }

  optionClicked(opt) {
    console.warn('my menu option clicked', opt);
  }
}
