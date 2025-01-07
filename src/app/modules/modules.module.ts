import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work/work.component';
import { AboutComponent } from './about/about.component';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importación necesaria
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    WorkComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    AnimateOnScrollModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
  ],
  exports: [
    WorkComponent,
    AboutComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ModulesModule { }
