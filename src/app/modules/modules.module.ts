import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work/work.component';
import { AboutComponent } from './about/about.component';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importación necesaria
import { BrowserModule } from '@angular/platform-browser';
import { ImageModule } from 'primeng/image';
import { TableModule } from 'primeng/table';
import { CarouselModule } from 'primeng/carousel';
import { BandanaComponent } from './bandana/bandana.component';
import { ItsmartsComponent } from './itsmarts/itsmarts.component';

@NgModule({
  declarations: [
    WorkComponent,
    AboutComponent,
    BandanaComponent,
    ItsmartsComponent
  ],
  imports: [
    CommonModule,
    AnimateOnScrollModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    ImageModule,
    TableModule,
    CarouselModule
  ],
  exports: [
    WorkComponent,
    AboutComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ModulesModule { }
