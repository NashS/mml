import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule, IconsModule, CarouselModule, WavesModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    CarouselModule,
    WavesModule,
    ButtonsModule,
    IconsModule
  ]
})
export class MMLMdbModule { }
