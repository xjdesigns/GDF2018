"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var info_title_component_1 = require("./info-title.component");
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
describe('InfoTitleComponent', function () {
    var de;
    var comp;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [info_title_component_1.InfoTitleComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(info_title_component_1.InfoTitleComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
    });
    it('should create component', function () { return expect(comp).toBeDefined(); });
    it('should set the input to the value provided', function () {
        comp.infoTitle = 'Hello World';
        expect(comp.infoTitle).toEqual('Hello World');
    });
    it('should fire off emit action with correct args', function () {
        spyOn(comp.onFilterAction, 'emit');
        comp.filterAction('filtering');
        expect(comp.onFilterAction.emit).toHaveBeenCalledWith({ filter: 'filtering' });
    });
});
