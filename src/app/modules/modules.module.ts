import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work/work.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    WorkComponent,
    AboutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WorkComponent,
    AboutComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ModulesModule { }
