import { __decorate } from 'tslib';
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

var SuperLibModule = /** @class */ (function () {
    function SuperLibModule() {
    }
    SuperLibModule = __decorate([
        NgModule({
            exports: [SuperLibComponet],
            declarations: [SuperLibComponet],
        })
    ], SuperLibModule);
    return SuperLibModule;
}());

export { SuperLibComponet, SuperLibModule };
//# sourceMappingURL=super-lib.js.map
