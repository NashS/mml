import { environment } from './../../../environments/environment';
import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MmlAgmComponent } from './mml-agm.component';

@NgModule({
  declarations: [MmlAgmComponent],
  imports: [
    CommonModule,
    AgmCoreModule
  ],
  exports: [
    AgmCoreModule
  ]
})
export class MmlAgmModule { }
