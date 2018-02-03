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
  }

  toggleExt() {
    this.toggleIsActive = !this.toggleIsActive;
  }

  menuOptions() {
    console.warn('this would open the context menu');
  }

  actionClick(idx, item) {
    this.onActionTaken.emit({idx, item});
  }
}
