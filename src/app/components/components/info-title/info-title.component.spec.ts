import { InfoTitleComponent } from './info-title.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('InfoTitleComponent', function () {
  let de: DebugElement;
  let comp: InfoTitleComponent;
  let fixture: ComponentFixture<InfoTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoTitleComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should set the input to the value provided', () => {
    comp.infoTitle = 'Hello World';
    expect(comp.infoTitle).toEqual('Hello World');
  });

  it('should fire off emit action with correct args', () => {
    spyOn(comp.onFilterAction, 'emit');
    comp.filterAction('filtering');
    expect(comp.onFilterAction.emit).toHaveBeenCalledWith({filter: 'filtering'});
  });
});
