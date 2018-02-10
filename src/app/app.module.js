"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
// COMPONENTS
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var welcome_component_1 = require("./welcome/welcome.component");
var welcome_02_component_1 = require("./welcome-02/welcome-02.component");
var docs_component_1 = require("./docs/docs.component");
var steps_component_1 = require("./steps/steps.component");
var components_1 = require("./components");
// DIRECTIVES
var code_display_directive_1 = require("./shared/code-display.directive");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            welcome_component_1.WelcomeComponent,
            welcome_02_component_1.Welcome02Component,
            docs_component_1.DocsComponent,
            steps_component_1.StepsComponent,
            code_display_directive_1.CodeDisplayDirective
        ].concat(components_1.GDFComponentProvider),
        providers: [],
        bootstrap: [app_component_1.AppComponent],
        schemas: [
            core_1.CUSTOM_ELEMENTS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
