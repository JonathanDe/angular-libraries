import { __decorate } from 'tslib';
import { Component, NgModule } from '@angular/core';

let SuperLibComponet = class SuperLibComponet {
};
SuperLibComponet = __decorate([
    Component({
        selector: 'super-lib-component',
        template: '<p>Hello from the library</p>'
    })
], SuperLibComponet);

let SuperLibModule = class SuperLibModule {
};
SuperLibModule = __decorate([
    NgModule({
        exports: [SuperLibComponet],
        declarations: [SuperLibComponet],
    })
], SuperLibModule);

export { SuperLibComponet, SuperLibModule };
//# sourceMappingURL=super-lib.js.map
