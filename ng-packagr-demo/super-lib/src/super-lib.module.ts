import { NgModule } from '@angular/core';

import { SuperLibComponet } from './super-lib.component';
import { CoolComponentComponent } from './cool-component/cool-component.component';

@NgModule({
  exports: [SuperLibComponet, CoolComponentComponent],
  declarations: [SuperLibComponet, CoolComponentComponent],
})

export class SuperLibModule { }
