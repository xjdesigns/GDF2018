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
var MenuComponent = (function () {
    function MenuComponent() {
        this.menuIsOpen = false;
        this.menuList = [];
        this.menuOptionClicked = new core_1.EventEmitter();
    }
    MenuComponent.prototype.toggleMenu = function () {
        this.menuIsOpen = !this.menuIsOpen;
    };
    MenuComponent.prototype.menuOptionClick = function (item) {
        this.menuOptionClicked.emit({ item: item });
    };
    return MenuComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MenuComponent.prototype, "menuIcon", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MenuComponent.prototype, "menuList", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], MenuComponent.prototype, "menuOptionClicked", void 0);
MenuComponent = __decorate([
    core_1.Component({
        selector: 'app-menu',
        templateUrl: 'app/components/components/menu/menu.component.html'
    }),
    __metadata("design:paramtypes", [])
], MenuComponent);
exports.MenuComponent = MenuComponent;
