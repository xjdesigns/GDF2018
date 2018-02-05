import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-info-title',
  // template: `<h1>HEllo World</h1>`
  templateUrl: 'app/components/components/info-title/info-title.component.html'
})

export class InfoTitleComponent {
  @Input() infoTitle: string;
  @Output() onFilterAction = new EventEmitter<any>();

  filterList = [{
    name: 'Asc',
    opt: 'Ascending'
  }, {
    name: 'Dsc',
    opt: 'Descending'
  }, {
    name: 'Sort By',
    opt: 'Sort By'
  }]

  constructor() {}

  filterAction(filter) {
    console.warn('Filter Emit', filter);
    this.onFilterAction.emit({filter});
  }
}
