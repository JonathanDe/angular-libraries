import { NgModule } from '@angular/core';

import { SuperLibComponet } from './super-lib.component';

@NgModule({
  exports: [SuperLibComponet],
  declarations: [SuperLibComponet],
})

export class SuperLibModule { }
