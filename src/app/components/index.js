"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// // COMPONENTS
var card_component_1 = require("./components/card/card.component");
var info_bar_component_1 = require("./components/info-bar/info-bar.component");
var menu_component_1 = require("./components/menu/menu.component");
var info_title_component_1 = require("./components/info-title/info-title.component");
var side_nav_component_1 = require("./components/side-nav/side-nav.component");
var ComponentsProvider = [
    card_component_1.CardComponent,
    info_bar_component_1.InfoBarComponent,
    menu_component_1.MenuComponent,
    info_title_component_1.InfoTitleComponent,
    side_nav_component_1.SideNavComponent
];
// // EXPORT PROVIDERS AS ONE
exports.GDFComponentProvider = ComponentsProvider.slice();
