import { __decorate, __metadata } from 'tslib';
import { Component, NgModule } from '@angular/core';

let SuperLibComponet = class SuperLibComponet {
};
SuperLibComponet = __decorate([
    Component({
        selector: 'super-lib-component',
        template: '<p>Hello from the library</p>'
    })
], SuperLibComponet);

let CoolComponentComponent = class CoolComponentComponent {
    constructor() { }
    ngOnInit() {
    }
};
CoolComponentComponent = __decorate([
    Component({
        selector: 'app-cool-component',
        template: "<p>\n  cool-component works!\n</p>\n",
        styles: [""]
    }),
    __metadata("design:paramtypes", [])
], CoolComponentComponent);

let SuperLibModule = class SuperLibModule {
};
SuperLibModule = __decorate([
    NgModule({
        exports: [SuperLibComponet, CoolComponentComponent],
        declarations: [SuperLibComponet, CoolComponentComponent],
    })
], SuperLibModule);

export { CoolComponentComponent, SuperLibComponet, SuperLibModule };
//# sourceMappingURL=super-lib.js.map
