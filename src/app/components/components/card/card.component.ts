import {
  OnInit,
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: 'app/components/components/card/card.component.html'
})

export class CardComponent implements OnInit {
  @Input() dataTitle: string = 'Steps'
  @Input() dataDesc: string = 'Steps walkthrough'
  @Input() cardImg: string = '';
  @Input() cardText: string = 'I am text';
  @Output() onPrimaryAction = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  primaryActionClick() {
    console.warn('primary actions');
    this.onPrimaryAction.emit({ name: 'jason' });
  }
}
