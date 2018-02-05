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
var InfoBarComponent = (function () {
    function InfoBarComponent() {
        this.toggleIsActive = false;
        this.infoTitle = 'Provide a title';
        this.infoDesc = 'Prodive a description';
        this.infoActions = [];
        this.onActionTaken = new core_1.EventEmitter();
        this.optionsMenuList = [{
                name: 'Item 01'
            }, {
                name: 'Item 02'
            }, {
                name: 'Item 03'
            }];
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
            }];
        console.warn('options', this.optionsMenuList);
    }
    InfoBarComponent.prototype.toggleExt = function () {
        this.toggleIsActive = !this.toggleIsActive;
    };
    InfoBarComponent.prototype.actionClick = function (idx, item) {
        this.onActionTaken.emit({ idx: idx, item: item });
    };
    InfoBarComponent.prototype.optionClicked = function (opt) {
        console.warn('my menu option clicked', opt);
    };
    return InfoBarComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], InfoBarComponent.prototype, "infoImg", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], InfoBarComponent.prototype, "infoTitle", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], InfoBarComponent.prototype, "infoDesc", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], InfoBarComponent.prototype, "infoActions", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], InfoBarComponent.prototype, "onActionTaken", void 0);
InfoBarComponent = __decorate([
    core_1.Component({
        selector: 'app-info-bar',
        templateUrl: 'app/components/components/info-bar/info-bar.component.html'
    }),
    __metadata("design:paramtypes", [])
], InfoBarComponent);
exports.InfoBarComponent = InfoBarComponent;
