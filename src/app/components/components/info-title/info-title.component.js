"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var InfoTitleComponent = (function () {
    function InfoTitleComponent() {
        this.onFilterAction = new core_1.EventEmitter();
    }
    InfoTitleComponent.prototype.filterAction = function (filter) {
        this.onFilterAction.emit({ filter: filter });
    };
    return InfoTitleComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], InfoTitleComponent.prototype, "infoTitle", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], InfoTitleComponent.prototype, "onFilterAction", void 0);
InfoTitleComponent = __decorate([
    core_1.Component({
        selector: 'app-info-title',
        // template: `<h1>HEllo World</h1>`
        templateUrl: 'app/components/components/info-title/info-title.component.html'
    }),
    __metadata("design:paramtypes", [])
], InfoTitleComponent);
exports.InfoTitleComponent = InfoTitleComponent;
