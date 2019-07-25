import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { SuperLibComponet } from './super-lib.component';
import { CoolComponentComponent } from './cool-component/cool-component.component';
var SuperLibModule = /** @class */ (function () {
    function SuperLibModule() {
    }
    SuperLibModule = tslib_1.__decorate([
        NgModule({
            exports: [SuperLibComponet, CoolComponentComponent],
            declarations: [SuperLibComponet, CoolComponentComponent],
        })
    ], SuperLibModule);
    return SuperLibModule;
}());
export { SuperLibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VwZXItbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1cGVyLWxpYi8iLCJzb3VyY2VzIjpbInNyYy9zdXBlci1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBT25GO0lBQUE7SUFBOEIsQ0FBQztJQUFsQixjQUFjO1FBTDFCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLHNCQUFzQixDQUFDO1lBQ25ELFlBQVksRUFBRSxDQUFDLGdCQUFnQixFQUFFLHNCQUFzQixDQUFDO1NBQ3pELENBQUM7T0FFVyxjQUFjLENBQUk7SUFBRCxxQkFBQztDQUFBLEFBQS9CLElBQStCO1NBQWxCLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgU3VwZXJMaWJDb21wb25ldCB9IGZyb20gJy4vc3VwZXItbGliLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvb2xDb21wb25lbnRDb21wb25lbnQgfSBmcm9tICcuL2Nvb2wtY29tcG9uZW50L2Nvb2wtY29tcG9uZW50LmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGV4cG9ydHM6IFtTdXBlckxpYkNvbXBvbmV0LCBDb29sQ29tcG9uZW50Q29tcG9uZW50XSxcclxuICBkZWNsYXJhdGlvbnM6IFtTdXBlckxpYkNvbXBvbmV0LCBDb29sQ29tcG9uZW50Q29tcG9uZW50XSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTdXBlckxpYk1vZHVsZSB7IH1cclxuIl19