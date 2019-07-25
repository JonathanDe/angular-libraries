import { __decorate, __metadata } from 'tslib';
import { Component, NgModule } from '@angular/core';

var SuperLibComponet = /** @class */ (function () {
    function SuperLibComponet() {
    }
    SuperLibComponet = __decorate([
        Component({
            selector: 'super-lib-component',
            template: '<p>Hello from the library</p>'
        })
    ], SuperLibComponet);
    return SuperLibComponet;
}());

var CoolComponentComponent = /** @class */ (function () {
    function CoolComponentComponent() {
    }
    CoolComponentComponent.prototype.ngOnInit = function () {
    };
    CoolComponentComponent = __decorate([
        Component({
            selector: 'app-cool-component',
            template: "<p>\n  cool-component works!\n</p>\n",
            styles: [""]
        }),
        __metadata("design:paramtypes", [])
    ], CoolComponentComponent);
    return CoolComponentComponent;
}());

var SuperLibModule = /** @class */ (function () {
    function SuperLibModule() {
    }
    SuperLibModule = __decorate([
        NgModule({
            exports: [SuperLibComponet, CoolComponentComponent],
            declarations: [SuperLibComponet, CoolComponentComponent],
        })
    ], SuperLibModule);
    return SuperLibModule;
}());

export { CoolComponentComponent, SuperLibComponet, SuperLibModule };
//# sourceMappingURL=super-lib.js.map
