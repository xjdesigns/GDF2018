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
var CardComponent = (function () {
    function CardComponent() {
        this.dataTitle = 'Steps';
        this.dataDesc = 'Steps walkthrough';
        this.cardImg = '';
        this.cardText = 'I am text';
        this.onPrimaryAction = new core_1.EventEmitter();
    }
    CardComponent.prototype.ngOnInit = function () { };
    CardComponent.prototype.primaryActionClick = function () {
        console.warn('primary actions');
        this.onPrimaryAction.emit({ name: 'jason' });
    };
    return CardComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CardComponent.prototype, "dataTitle", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CardComponent.prototype, "dataDesc", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CardComponent.prototype, "cardImg", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CardComponent.prototype, "cardText", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CardComponent.prototype, "isPrimaryAction", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CardComponent.prototype, "onPrimaryAction", void 0);
CardComponent = __decorate([
    core_1.Component({
        selector: 'app-card',
        templateUrl: 'app/components/components/card/card.component.html'
    }),
    __metadata("design:paramtypes", [])
], CardComponent);
exports.CardComponent = CardComponent;
